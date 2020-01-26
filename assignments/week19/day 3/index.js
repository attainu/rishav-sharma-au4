class Node { 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
}

class BinarySearchTree { 
    constructor() 
    { 
        // root of a binary seach tree 
        this.root = null; 
    }
insert(data) { 
    
    var newNode = new Node(data); 
                      
    
    if(this.root === null) 
        this.root = newNode; 
    else
       this.insertNode(this.root, newNode); 
} 
insertNode(node, newNode) { 
     
    if(newNode.data < node.data) { 
        // if left is null insert node here 
        if(node.left === null) 
            node.left = newNode; 
        else
           this.insertNode(node.left, newNode);  
    }  else { 
        
        if(node.right === null) 
            node.right = newNode; 
        else
  
            this.insertNode(node.right,newNode); 
    } 
} 
//Inoreder recursively
inorder(node) 
{ 
    if(node !== null) 
    { 
        this.inorder(node.left); 
        console.log(node.data); 
        this.inorder(node.right); 
    } 
}
// Performs preorder traversal of a tree     
preorder(node) 
{ 
    if(node != null) 
    { 
        console.log(node.data); 
        this.preorder(node.left); 
        this.preorder(node.right); 
    } 
}
}

const binary = new BinarySearchTree();
binary.insert(5);
binary.insert(10);
binary.insert(15);
binary.insert(6);
binary.insert(16);
binary.inorder(5);
binary.preorder(6);

console.log(binary);