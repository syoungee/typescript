import sum, { print } from "./10-3-module1.js";
/**
 * default인 아이들은 다른 이름으로 가져올 수가 있다.
 * 하지만 default가 아닌 아이들은 괄호를 써줘서 같은 이름으로 가져와야 한다.
 * print를 바꾸고 싶으면 {print as printMessage} 처럼 변경해서 사용 가능하다.
 */

console.log(sum(1, 2));

/**
 * import * as calculator from "./10-3-module1.js";
 * console.log(calculator.add(1,2));
 * calculator.print();
 *
 */
/**
 * 변수도 export 가능하다.
 * calculator.number
 */

/**
 * 서로 간의 코드를 분리함으로서 모듈성을 높여줌
 * 모듈 간의 재사용성을 높여준다.
 */
