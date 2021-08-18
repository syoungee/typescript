interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;
  get size() {
    return this._size;
  }
  push(value: string) {
    const node: StackNode = { value: value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
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

const stack = new StackImpl();
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}
