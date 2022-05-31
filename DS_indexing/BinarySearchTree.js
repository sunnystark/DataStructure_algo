//BST
class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}
class binarySearchTree{
    constructor(){
        this.root = null
    }
    // function to be implemented
    // insert(data)
    insert(data){
        //create node 
        let newNode = new Node(data)
        //check if root == null then set element in a root
        if(this.root == null){
            this.root = newNode
            console.log("node added in root")
        }
           else{
            //other wise chcek the node if it is grater than or equal to root node here we create halper function 
            this.insertNode(this.root, newNode)
           }
    }
     // insertNode
       insertNode(node, newNode){
           if(newNode.data < node.data){
                  if(node.left == null){ 
                  console.log("node added in left")
                    node.left = newNode
                   } else{
                    this.insertNode(node.left,newNode)}
       } else{
           if(node.right == null){
               node.right = newNode
               console.log("node Added in right")}
               else{
               this.insertNode(node.right,newNode)}
       }
           
       }
    // remove(data)
          // helper method that calls the
// removeNode with a given data
remove(data)
{
	// root is re-initialized with
	// root of a modified tree.
	this.root = this.removeNode(this.root, data);
}

// Method to remove node with a
// given data
// it recur over the tree to find the
// data and removes it
removeNode(node, key)
{
		
	// if the root is null then tree is
	// empty
	if(node === null)
		return null;

	// if data to be delete is less than
	// roots data then move to left subtree
	else if(key < node.data)
	{
		node.left = this.removeNode(node.left, key);
		return node;
	}

	// if data to be delete is greater than
	// roots data then move to right subtree
	else if(key > node.data)
	{
		node.right = this.removeNode(node.right, key);
		return node;
	}

	// if data is similar to the root's data
	// then delete this node
	else
	{
		// deleting node with no children
		if(node.left === null && node.right === null)
		{
			node = null;
			return node;
		}

		// deleting node with one children
		if(node.left === null)
		{
			node = node.right;
			return node;
		}
		
		else if(node.right === null)
		{
			node = node.left;
			return node;
		}

		// Deleting node with two children
		// minimum node of the right subtree
		// is stored in aux
		var aux = this.findMinNode(node.right);
		node.data = aux.data;

		node.right = this.removeNode(node.right, aux.data);
		return node;
	}

}

 
    // Helper function
    // findMinNode()
    findMinNode(node){
        if(node.left == null){
            return node
        }else{
           return this.findMinNode(node.left)
        }
    }
    // getRootNode()
   getRootNode()
    {
    return this.root;
    }
    // inorder(node)
    inorder(node){
    if(node !== null){
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
}
    // preorder(node)   
    preorder(node){
        if(node !== null){
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    // postorder(node)
    postorder(node){
    if(node !== null){ 
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.data)
    }}
    // search(node, data)
    search(node, data){
        if(node == null){
            return null
        }else if(data < node.data){
           return this.search(node.left, data)
        }else if(data > node.data){
          return this.search(node.right,data)
        }else
          return node
    }
  
}

let BST = new binarySearchTree()
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
var root = BST.getRootNode()
console.log("inorder")
BST.inorder(root)
console.log(BST.remove(22))
var root = BST.getRootNode()
BST.inorder(root)
// console.log(BST.findMinNode(root))
// console.log(BST.search(root,13))
// console.log("inorder")
// BST.inorder(root)
// console.log("pre")
// BST.preorder(root)
// console.log("post")
// BST.postorder(root)