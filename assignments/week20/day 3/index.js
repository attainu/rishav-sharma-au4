class Heap {

    constructor(compare) {
        this.array = [];
        if(compare) {
          this.compare = compare; // can min or max
        } else {
          this.compare = this.defalutCompare; // minheap
        }
        
    }

    defalutCompare(x, y) { // min heap
      return x < y;
    }


    // Heap Functions

    add(item) {
        // Add the element to the end of the array.
        this.array.push(item);
        // And then heapify up the element
        this.heapifyUp();
    }

    find(item) {
        for(let i = 0; i < this.array.length; i++) {
            if(item === this.array[i]) { return i; }
        }
        return -1;
    }

    remove(item) {
        let indexToRemove = this.find(item);

        if(indexToRemove === -1) { return; }

        // If the index to be removed is the last item,
        // just pop it off the array and return
        if(indexToRemove === this.array.length - 1) {
            return this.array.pop();
        }

        // First, move the last element to the index to be removed
        this.array[indexToRemove] = this.array.pop();

        // Then get the parent item
        let parent = this.getParent(indexToRemove);

        if(
            this.hasLeftChild(indexToRemove) && 
            ( !parent || this.compare(parent, this.array[indexToRemove]) )
        ) {
            this.heapifyDown(indexToRemove);
        } else {
            this.heapifyUp(indexToRemove);
        }


    }

    heapifyUp(index) {
        let currentIndex = index || this.array.length - 1;

        while(this.hasParent(currentIndex) && (this.getParent(currentIndex) != this.array[currentIndex])
            && !this.compare(this.getParent(currentIndex), this.array[currentIndex])) {
            this.swap(this.getParentIndex(currentIndex), currentIndex);
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    heapifyDown(index=0) {
        // Compare the parent element to its children
        // And swap parent with the appropriate child
        // Which is smallest for min heap and largest for max heap
        // Repeat it for the next child after swap

        let currentIndex = index;

        while(this.hasLeftChild(currentIndex)) {

            let smallestChildIndex = this.getLeftChildIndex(currentIndex);

            if(this.hasRightChild(currentIndex) && 
                this.compare(this.getRightChild(currentIndex),this.getLeftChild(currentIndex))) {
                smallestChildIndex = this.getRightChildIndex(currentIndex);
            }

            if(this.array[currentIndex] < this.array[smallestChildIndex]) {
                break;
            } else {
                this.swap(currentIndex, smallestChildIndex);
            }

            currentIndex = smallestChildIndex;

        }
    }

    // Utility Functions

    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    getLeftChild(parentIndex) {
        return this.array[this.getLeftChildIndex(parentIndex)];
    }

    getRightChild(parentIndex) {
        return this.array[this.getRightChildIndex(parentIndex)];
    }

    getParent(childIndex) {
        return this.array[this.getParentIndex(childIndex)];
    }

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.array.length;
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.array.length;
    }

    swap(indexOne, indexTwo) {
        let tmp = this.array[indexOne];
        this.array[indexOne] = this.array[indexTwo];
        this.array[indexTwo] = tmp;
    }

    print() {
        console.log(this.array);
    }

}

class PriorityQueue extends Heap{
  constructor(){
    let compare = function(x, y){
        return this.priorities[x] < this.priorities[y]
    }
    super(compare)
    this.priorities = {}
  }

  add(item,value){
    this.priorities[item] = value;
    //add in heap
    super.add(item)
  }

  remove(item){
    delete this.priorities[item];

    super.remove(item);
  }

  changePriority(item,value){
    this.remove(item);

    this.add(item,value);
  }

}

let pq = new PriorityQueue();
pq.add("jatin", "2");
pq.add("zohit", "5");
pq.add("juvraj", "5");



pq.print();
