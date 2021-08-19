type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object ★
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionType = {
  x: 1,
  y: 1,
};

// class ★
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };

// 😆 only interfaces can be merged.
interface PositionInterface {
  z: number;
}

// 😆 Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"]; // string
type NumberType = number;
type Direction = "left" | "right"; // union type은 type만 가능(interface 불가)

// interface? 어떤 규격 사항
// API 계약서와 마찬가지
// 규격을 통해 구현이 된다면 type보다 interface를 사용하는 것이 맞다.

// Types? 어떠한 데이터를 담을 때 데이터의 타입을 결정하는 것
// ex) type Position {x:number; y:number;}
// type alias가 강력해지고 있다!
