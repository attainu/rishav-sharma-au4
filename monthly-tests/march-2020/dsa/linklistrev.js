// Node constructor
class Node {
    constructor(element, next=null) {
      this.element = element;
      this.next = next;
    }
  }
  // LinkedList constructor
  class LinkedList {
    constructor() {
      this.head = null;
    }
    // Add a node to the end of the linked list
    push(element) {
      var node = new Node(element);
      if (!this.head) {
        this.head = node;
      } else {
        var current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
    }
    // Reverse a single node in the linked list
    reverseNode(node, prev) {
      var newNode = new Node(node.element, prev);
      if (node.next) {
        return this.reverseNode(node.next, newNode);
      } else {
        return newNode;
      }
    }
    // returns the reversed Linked List (i.e. c->b->a->null)
    reversedList() {
      return this.reverseNode(this.head, null);
    }
  }
  var list = new LinkedList();
  list.push('a');
  list.push('b');
  list.push('c');
  console.log(list.reversedList());