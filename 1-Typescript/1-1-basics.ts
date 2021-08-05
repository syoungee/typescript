{
  // JavaScript
  // old: var
  // let es6
  let name = "hello";
  name = "hi"; // 재할당 가능

  // const
  const age = 5;
  age = 5; // error!

  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array......
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = true; // true, false

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;

  // null
  let person: null; // 💩
  let person2: string | null;
}
