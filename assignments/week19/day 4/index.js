//done this in leet code:https://leetcode.com/problems/binary-tree-right-side-view/

var rightSideView = function(root) {
    var result = [];
   
   if(root === null) {
       return result;
   }
   
   queue = [];
   queue.push(root);
   
   while(queue.length > 0) {
       var len = queue.length;
       
       for(var i = 0; i < len; i++) {
           var node = queue.shift();
           
           if(node.left) {
               queue.push(node.left);
           }
           
           if(node.right) {
               queue.push(node.right);
           }
           
           if(i === len - 1) {
               result.push(node.val);
           }
       }
   }
   
   return result;
};