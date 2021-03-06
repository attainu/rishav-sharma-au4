class Node {
    constructor(key, next=null) {
        this.key = key;
        this.next = next;
        this.value = null;
    }

    toString() {
        return `${this.key} -> ${this.value}`;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(key, value) {
        // Create a new node
        let newNode = new Node(key);

        if(value) { newNode.value = value; }

        // If the tail is None, make the head and tail as new node as our list
        // is empty.
        if(!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            // If tail is not None, put the current tail's next node as the new
            // node. And also update the current tail as the new node.
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(key, value) {
        // Create the new Node
        let newNode = new Node(key);

        if(value) { newNode.value = value; }

        // If the head is None, it means that the list is empty.
        // So set both head and tail as the new node.
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the head is not None, set the new node's next node as the current
            // head. Also point the current head to the new node.
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    search(key) {
        // Starting from the head, go down till the last node
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.key === key) { return currentNode; }
            // Move to the next node
            currentNode = currentNode.next;
        }
        return null;
    }

    delete(keyToDelete) {
        // If the list is empty, return immediately as there is nothing to
        // look up and delete.
        if(!this.head) { return null; }

        // If head is the value that needs to be deleted, simply point the current head to the next value and return.
        if(this.head.key === keyToDelete) {
            this.head = this.head.next;
            return;
        }

        // For other values, start from the second value and go till the end.
        let currentNode = this.head;
        while(currentNode.next) {

            // If the value to delete is the next value of the current, set the
            // current node's next node as its next node's next. And return.

            if(currentNode.next.key === keyToDelete) {
                currentNode.next = currentNode.next.next;
                break;
            }

            currentNode = currentNode.next;
        }

        // Check if tail has to be updated.
        // If the value that needs to be deleted is the value at the tail,
        // we have to update tail as well
        if(this.tail.key === keyToDelete) {
            this.tail = currentNode;
        }
    }

    print() {
        let currentNode = this.head,
            values = [];
        while(currentNode) {
            values.push(currentNode.toString());
            currentNode = currentNode.next;
        }
        console.log(values);
    }
}


class HashTable {
    constructor(size=8) {
        this.size = size;
        this.array = [];

        for(let i = 0; i < this.size; i++) {
            this.array.push( new LinkedList() );
        }
    }

    hash(key) {
        let sum = 0;
        Array.from(key).forEach( v => sum += v.charCodeAt(0) );
        return sum % this.size;
    }

    getList(key) {
        let hash = this.hash(key);
        return this.array[hash];
    }

    set(key, value) {
        let linkedList = this.getList(key);
        let node = linkedList.search(key);

        if(!node) {
            linkedList.append(key, value);
        } else {
            node.value = value;
        }
    }

    get(key, value) {
        let linkedList = this.getList(key);
        let node = linkedList.search(key);

        if(!node) {
            return null;
        } else {
            return node.value;
        }
    }

    delete(key) {
        let linkedList = this.getList(key);
        linkedList.delete(key);
    }

    print() {
        this.array.forEach(a => a.print());
    }
}



let h = new HashTable();
h.set("actor", "srk");
h.set("actress", "mona");
h.set("coactor", "bhuv");
console.log( "actor is ", h.get("actor") );
console.log( "coactor is ", h.get("coactor") );
console.log( "actress is ", h.get("actress") );
h.delete("actor");
h.print();