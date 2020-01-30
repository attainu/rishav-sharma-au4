/* check this link for the output:
1.https://leetcode.com/problems/same-tree/
and copy this code ad paste there for output */

var isSameTree = function(p, q) {
    var queue1 = [];
   var queue2 = [];
   
   queue1.push(p);
   queue2.push(q);
   
   while(queue1.length && queue2.length){
       var node1 = queue1.shift();
       var node2 = queue2.shift();
       var val1;
       var val2;
       
       
       if(node1 === null){
           val1 = null;
       } else {
           val1 = node1.val;
           queue1.push(node1.left);
           queue1.push(node1.right);
       }
       
       if(node2 === null){
           val2 = null;
       } else {
           val2 = node2.val;
           queue2.push(node2.left);
           queue2.push(node2.right);
       }
       
       if(val1 !== val2){
           return false;
       }
   }
   
   return queue1.length === queue2.length;  
};


//check this repl link also:https://repl.it/@rishavsharmavst/Tree-Same