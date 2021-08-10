{
  /**
   * Type Assertions 💩
   */

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  // as 키워드를 이용해서 타입을 단언
  (result as string).length;
  console.log((result as string).length);

  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers(); // findNumbers()! 함수 뒤에 !를 붙일 수 있음
  numbers!.push(2); // 😱 ! 는 진짜진짜 장담할 때 사용하는 기호

  const button = document.querySelector("class")!;
  button.nodeValue;
  if (button) {
    button.nodeValue;
  }
}
