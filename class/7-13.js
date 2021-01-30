var extendClass3 = function (SuperClass, SubClass, subMethods) {
  SubClass.prototype = Object.create(SuperClass.prototype);
  SubClass.prototype.constructor = SubClass;
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }
  Object.freeze(SubClass.prototype);
  return SubClass;
};

var Rectangle2 = function (width, height) {
  this.width = width;
  this.height = height;
};
Rectangle2.prototype.getArea = function () {
  return this.width * this.height;
};

var Square2 = extendClass3(Rectangle2, function (width) {
  Rectangle2.call(this, width, width);
});

var s2 = new Square2(4);
console.log(s2);
console.log(s2.getArea());
