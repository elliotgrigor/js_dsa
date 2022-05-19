
class Stack {
  constructor() {
    this.stack = [];
  }

  add(el) {
    this.stack.push(el);
  }

  remove() {
    this.stack.pop();
  }

  show() {
    console.log('\n BEGIN STACK');
    for (let i = this.stack.length - 1; i >= 0 ; i--) {
      console.log('+-----------+');
      console.log(`|  ${this.stack[i]}  |`);
      console.log('+-----------+');
    }
    console.log('  END STACK\n');
  }
}

(() => {
  let plates = new Stack();

  plates.add('Plate 1');
  plates.add('Plate 2');
  plates.add('Plate 3');

  plates.show();
  plates.remove();
  plates.show();
})();

/* Output *

 BEGIN STACK
+-----------+
|  Plate 3  |
+-----------+
+-----------+
|  Plate 2  |
+-----------+
+-----------+
|  Plate 1  |
+-----------+
  END STACK


 BEGIN STACK
+-----------+
|  Plate 2  |
+-----------+
+-----------+
|  Plate 1  |
+-----------+
  END STACK

*/
