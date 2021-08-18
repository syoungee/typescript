{
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
