var Person = function (name) {
  this._name = name;
};

Person.prototype.getName = function () {
  return this._name;
};

var suzi = new Person("Suzi");

console.log(suzi.__proto__.getName()); // undefined
console.log(Person.prototype === suzi.__proto__); // true
console.log(suzi.getName()); // Suzi
