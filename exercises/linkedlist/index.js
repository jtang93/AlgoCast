// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

  constructor(data, next=null) {
    this.data = data
    this.next = next
  }

}

class LinkedList {

  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head

    while (node) {
      if (!node.next) {
        return node
      }
      node = node.next
    }

    return node
  }

  clear() {
    this.head=null
  }

  removeFirst() {
    if (this.head) {
      this.head=this.head.next
    }
  }

  removeLast() {
    let node = this.head
    if (!node) {
      return
    }
    if (!node.next) {
      this.head=null
      return
    }

    while(node.next.next) {
      node = node.next
    }
      node.next=null
  }

  insertLast(data) {
    // let node = this.head
    // while (node.next) {
    //   node = node.next
    // }
    // node.next= new Node(data)
    let last = this.getLast()
    if (last) {
      last.next=new Node(data)
    }
    else {
      this.head=new Node(data)
    }
  }

  getAt(index) {
    let node = this.head
    let counter = 0

    if (this.size() > index) {
      while (node) {
        if (counter === index) {
          return node
        }
        counter++
        node=node.next
      }
    }
    else {
      return null
    }
  }

  removeAt(index) {
    let indexedNode = this.getAt(index),
      prevNode

    if (index === 0) {
      this.removeFirst()
      return
    }
    else {
      prevNode = this.getAt(index-1)
    }

    if (indexedNode) {
      prevNode.next=indexedNode.next
    }
  }

  insertAt(data, index) {

    if (index === 0) {
      this.insertFirst(data)
    }
    else if (index > this.size()) {
      this.insertLast(data)
    }
    else {
      let indexedNode = this.getAt(index)
      let prevNode = this.getAt(index-1)
      prevNode.next = new Node(data, indexedNode)
    }

  }

  forEach(func) {
    let node = this.head
    while (node) {
      func(node)
      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}



module.exports = { Node, LinkedList };
