var extendClass = (function () {
  var Bridge = function () {}; // 빈 생성자 함수
  return function (SuperClass, SubClass, subMethods) {
    Bridge.prototype = SuperClass.prototype;
    SubClass.prototype = new Bridge();
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
})(); // 즉시실행함수 내부에서 Bridge 선언 (클로저 활용) => 메모리 관리
