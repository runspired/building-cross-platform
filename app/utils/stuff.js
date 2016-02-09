
var a = 4;

(function() {
  this.a = 5;
  var _self = this;
  window.getA = function() {
    return _self.a;
  };
}).call({});

window.getA();



window.a = 5;
function Item() {
  this.a = 4;
  this.foo = function(time) {
    setTimeout(() => {
      console.log(this.a);
    }, time);
  };
}

class MyItem {

  constructor() {
    this.a = 5;
  }

  getA() {
    return this.a;
  }

  setA(b) {
    this.a = b;
  }

}

var b = new Item();
b.foo(10);
b.a = 10;
















