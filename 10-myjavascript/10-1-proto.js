const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  /*this.makeCoffee = (shots) => {
    console.log("making...");
  };*/
}

CoffeeMachine.prototype.makeCoffee = () => {
  console.log("making...");
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine);
const latteMachine = new LatteMachine(123);
console.log(latteMachine);

/*
    프로토타입은 js에서 상속을 하기 위해 쓰이는 아이이다.
    코드를 재사용하기 위해 사용되는 아이이다.
*/
