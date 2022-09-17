class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}

class BinaryTree{
  constructor(){
    this.root=null
  }

  insert(value){
    //creates a node
    let newNode= new Node(value);
    if(this.root==null) this.root=newNode;
    else{

      let pointer=this.root;
      
      while(true){
        if(value<pointer.value){
          if(!pointer.left){
            pointer.left=newNode;
            return this.root;
          }
          pointer=pointer.left;
          
        }else {
          if(!pointer.right){
            pointer.right=newNode;
            return this.root;
          }
          pointer=pointer.right;
        }
  
        
      }
    }
    return this.root;
    
  }

  lookup(value){

    if(!value) throw 'value needs to be sent for lookup';

    let pointer=this.root;
    
    while(pointer){
       if(value>pointer.value) pointer=pointer.right;
      else if(value<pointer.value) pointer=pointer.left;
      else return pointer;
    }
    
    return -1;
  
  }

  remove(value){
  if(!value) throw 'value needs to be sent for lookup';

    let pointer=this.root;
    
  while(pointer){
       if(value>pointer.value) pointer=pointer.right;
      else if(value<pointer.value) pointer=pointer.left;
      else {
        //means the pointer index has been given.
         let remainderPointer=pointer;
        if(remainderPointer.right){
           remainderPointer.value=remainderPointer.right.value;
           remainderPointer.right=remainderPointer.right.right;
        
        }else if(remainderPointer.left){
          remainderPointer.value=remainderPointer.left.value;
          remainderPointer.left=remainderPointer.left.left;
        }

       
      }
    
    }

    return this.root
  }
  
}



module.exports={
  BinaryTree
}