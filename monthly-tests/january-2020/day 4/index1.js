/* check this link for the output:
1.https://leetcode.com/problems/diameter-of-binary-tree/
and copy this code ad paste there for output */

var max;
var diameterOfBinaryTree = function(root) {
    max=0;
    dfs(root);
    return max;
};

function dfs(node)
{
    if(node === null)
    {
        return 0;
    }
    var left = dfs(node.left);
    var right = dfs(node.right);
    
    max = Math.max(max,left+right);
    return Math.max(left, right)+1;
}

//check thhis repl link:https://repl.it/@rishavsharmavst/Longest-diametre