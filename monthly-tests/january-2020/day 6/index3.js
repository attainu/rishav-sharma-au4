//The program  run in O(1) space complexity and O(nodes) time complexity.
//check this link for output:https://leetcode.com/problems/odd-even-linked-list/
//check this link for output:https://repl.it/@rishavsharmavst/oddevenlinklist

/* var oddEvenList = function(head) {
    if (!head || !head.next) return head;

    const dummyHead1 = {
        next: head
    }
    const dummyHead2 = {
        next: head.next
    }

    let odd = dummyHead1.next;
    let even = dummyHead2.next;
    
    while(odd && odd.next && even && even.next) {
        const oddNext = odd.next.next;
        const evenNext = even.next.next;
        
        odd.next = oddNext;
        even.next = evenNext;

        odd = oddNext;
        even = evenNext;
    }

    odd.next = dummyHead2.next;

    return dummyHead1.next;

}; */

class Node {
    constructor(element, next = null) {
        this.element = element
        this.next = next
    }
}
class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    // Insert First Node
    inserLast(element) {
        this.head = new Node(element, this.head)
        this.size++
    }
    // Insert Last Node
    insertLast(element) {
        let node = new Node(element)
        if (this.head == null) {
            this.head = node
        } else {
            let current = this.head
                // console.log(current)
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    // Print List Data
    printList() {
        let current = this.head
        let result = new Array()
        while (current) {
            result.push(current.element)
            current = current.next
        }
        console.log(result)
    }
}
function oddEvenList (head) {
    if (!head || !head.next) return head;

    const dummyHead1 = {
        next: head
    }
    const dummyHead2 = {
        next: head.next
    }

    let odd = dummyHead1.next;
    let even = dummyHead2.next;
    
    while(odd && odd.next && even && even.next) {
        const oddNext = odd.next.next;
        const evenNext = even.next.next;
        
        odd.next = oddNext;
        even.next = evenNext;

        odd = oddNext;
        even = evenNext;
    }

    odd.next = dummyHead2.next;

    return dummyHead1.next;
}
let ll = new linkedList()
ll.insertLast(1)
ll.insertLast(2)
ll.insertLast(3)
ll.insertLast(4)
ll.insertLast(5)
ll.printList()
oddEvenList(ll.head)