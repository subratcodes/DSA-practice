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
    this.inorder(root.left)
    console.log(root.value)
    this.inorder(root.right)
  
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

module.exports = {
	BinaryTree
};
