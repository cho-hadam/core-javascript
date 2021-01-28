var Grade = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};

Grade.prototype = [];

var g = new Grade(100, 200);
console.log(g); // Grade(2) [100, 200]
g.pop();
console.log(g); // Grade(1) [100]
