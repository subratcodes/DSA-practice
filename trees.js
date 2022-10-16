class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		//creates a node
		let newNode = new Node(value);
		if (this.root == null) this.root = newNode;
		else {
			let pointer = this.root;

			while (true) {
				if (value < pointer.value) {
					if (!pointer.left) {
						pointer.left = newNode;
						return this.root;
					}
					pointer = pointer.left;
				} else {
					if (!pointer.right) {
						pointer.right = newNode;
						return this.root;
					}
					pointer = pointer.right;
				}
			}
		}
		return this.root;
	}

	lookup(value) {
		if (!this.root) throw 'Cannot search a Binary tree when not created';

		if (!value) throw 'value needs to be sent for lookup';

		let pointer = this.root;

		while (pointer) {
			if (value > pointer.value) pointer = pointer.right;
			else if (value < pointer.value) pointer = pointer.left;
			else return pointer;
		}

		return -1;
	}

	remove(value) {
		if (!value) throw 'value needs to be sent for lookup';

		let pointer = this.root;

		while (pointer) {
			if (value > pointer.value) pointer = pointer.right;
			else if (value < pointer.value) pointer = pointer.left;
			else {

      //need to chnage it over here.
        
        
			}
		}

		return this.root;
	}


  //left =----> root--->right
  inOrder(root){
   if(!root) return null;
    this.inOrder(root.left)
    console.log(root.value)
    this.inOrder(root.right)
  
  }

 //root---> left---> right
  preOrder(root){
    if(!root) return null
    console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
  }


  //left --right--root
  postOrder(root){
    if(!root) return null
    this.postOrder(root.left)
    this.postOrder(root.right)
    
  }
}


class BinaryTreeQuestions{


countLeaves(){
  node=this.head
 if(node == null)     
            return 0; 
        if(node.left == null && node.right == null) 
            return 1;         
        else
            return this.countLeaves(node.left)+ 
               this.countLeaves(node.right); 

  
  
}
checkValidity(root){
  if(!root) return false
  
}

  getSize(node){

       
    if (node==null) return 0
    if(node.left==null || node.right==null) return 1
    else return this.getSize(node.left)+this.getSize(node.right)
 
     
  
  }

checkLeft(left){
    
  }

  
  
}



module.exports = {
	BinaryTree,BinaryTreeQuestions
};

      