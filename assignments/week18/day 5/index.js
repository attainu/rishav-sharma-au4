//linked list
class Linklist{
    constructor(val){
        this.data=val
        this.next=null
    }
}
const n=new Linklist(200)
console.log(n);
/* var removeElements = function(head, val) {
    if(head === null){
        return head;
    }
    
    var dummy = new ListNode(-1);
    dummy.next = head;
    prev = dummy;
    cur = head;
    
    while(prev !== null && prev.next !== null){
        if(cur.val === val) {
            prev.next = cur.next;
            cur = prev.next;
        } else {
            prev = cur;
            cur = cur.next;
        }
    }
    
    return dummy.next;
}; */
