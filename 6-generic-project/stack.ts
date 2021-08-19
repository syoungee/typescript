interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;
  get size() {
    return this._size;
  }
  push(value: T) {
    const node = { value: value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    // null == undefined, null !== undefined
    if (this.head == undefined) {
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;

    return node.value;
  }
}

const stack = new StackImpl<string>();
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>();
stack2.push(123);
stack2.push(234);
stack2.push(3456);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}
