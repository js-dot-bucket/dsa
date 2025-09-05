class CustomArray {

  constructor() {
    this.length = 0;
    this.elements = {};
  }

  getArray() {
    console.log(`length of array is: ${this.length}`);
    console.log(Object.values(this.elements));
  }

  push(item) {
    this.elements[this.length] = item;
    this.length++;
    console.log("item added successfully");
    this.getArray();
  }

  pop() {
    this.length--;
    delete this.elements[this.length]
    console.log("item deleted successfully");
    this.getArray();
  }

  deleteByIndex(index) {
    let i=index;
    for (i;i<this.length-1;i++) {
      this.elements[i] = this.elements[i+1];
    }     
    delete this.elements[i];
    this.length--;
    console.log(`elemented deleted successfully at index: ${index}`);
    this.getArray();
  }

  shift() {
    let i = 0;
    for (i;i<this.length-1;i++){
      this.elements[i] = this.elements[i+1];
    }
    delete this.elements[i];
    this.length--;
    console.log("array shifted successfully");
    this.getArray();
  }
}

const a = new CustomArray();

a.getArray();
a.push(5);
a.push("34");
a.pop();
a.push("new");
a.shift();

a.push("one");
a.push("two");
a.push("three");
a.deleteByIndex(1);
