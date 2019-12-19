class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  //methods: insertFirst(value), insertLast(value), insert(node1, node2), find(value)
  insertFirst(value) {
    this.head = new Node(value, this.head);
  }
  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      let last = this.head;
      while (last.next !== null) {
        last = last.next;
      }
      last.next = new Node(value, null);
    }
  }
  insertAfter(value, insertion) {
    let currNode = this.find(insertion);
    let afterNode = currNode.next;
    currNode.next = new Node(value, afterNode);
  }
  insertBefore(value, insertion) {
    let currNode = this.head;
    let tempNode = this.head;
    while (currNode.value !== insertion) {
      tempNode = currNode;
      currNode = currNode.next;
    }
    tempNode.next = new Node(value, currNode);
  }
  insertAt(value, index) {
    let currIndex = 0;
    let currNode = this.head;
    while (currIndex !== (index - 1)) {
      currNode = currNode.next;
      currIndex++;
    }
    currNode.next = new Node(value, currNode.next.next);
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  display() {
    let currNode = this.head;
    let arr = [];
    while (currNode.next !== null) {
      arr.push(currNode.value);
      // str = str + currNode.value + ', ';
      currNode = currNode.next;
    }
    arr.push(currNode.value);
    //str = str + currNode.value;
    return arr;
  }
  size() {
    let size = 0;
    let currNode = this.head;
    while (currNode !== null) {
      size++;
      currNode = currNode.next;
    }
    return size;
  }
  isEmpty() {
    return this.head === null;
  }
  findPrevious(value) {
    let currNode = this.head;
    if (currNode === null) {
      return 'empty list';
    } else {
      let tempNode = currNode;
      while (currNode.value !== value) {
        if (currNode.next === null) {
          return 'no such value';
        } else {
          tempNode = currNode;
          currNode = currNode.next;
        }
      }
      return tempNode;
    }
  }
  findLast() {
    let currNode = this.head;
    if (currNode === null) {
      return 'empty list';
    } else {
      while (currNode.next !== null) {
        // if (currNode.next !== null){
        //   currNode = currNode.next;
        // }
        currNode = currNode.next;
      }
      return currNode;
    }
  }
  reverse(node) {
    // let tempHead = node;
    if (node.next !== null) {
      // console.log('before reverse', node.next.value);
      this.reverse(node.next);
      node.next.next = node;
      // console.log(`set node ${node.value}.next.next to ${node.value}`);
      // console.log(`${node.next.value}.next is now ${node.next.next.value}`);
      // console.log(`${node.value}.next is ${node.next.value}`);
      node.next = null;
      // console.log(`${node.value}.next is ${node.next}`)
      //this else block is the base case
    } else {
      // console.log('node', node.value, 'next is null');
      // console.log(`head is ${tempHead.value}, line 47`);
      // this.head = tempHead;
      this.head = node;
    }
  }
}

module.exports = LinkedList;