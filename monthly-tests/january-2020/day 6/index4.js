//check this link for output:https://leetcode.com/problems/invert-binary-tree/

var invertTree = function(root) {
    if(root === null) {
        return root;
    }
    
    var tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};



//The program run in O(n) space complexity and O(nodes) time complexity.
