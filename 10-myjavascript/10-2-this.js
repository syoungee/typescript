/**
 * this 호출한 사람의 문맥을 나타내는 것
 */

console.log(this);

function simpleFunc() {
  console.log(this);
}

window.simpleFunc();
console.clear();
/*
class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
*/
class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();
// binding 을 통해 해결 가능하다.
// 아니면 화살표 함수를 이용하면 된다!
// const caller = counter.increase.bind(counter);
// caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
