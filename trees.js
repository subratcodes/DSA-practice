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

  
        
         let remainderPointer=pointer;
        if(remainderPointer.right){

          if(!remainderPointer.right.left&&!remainderPointer.right.right) throw Error ('Cannot delete this node');
              
           remainderPointer.value=remainderPointer.right.value;
           remainderPointer.right=remainderPointer.right.right;
           break;
        
        }else if(remainderPointer.left){

           if(!remainderPointer.left.left&&!remainderPointer.left.right) throw Error('Cannot delete this node');
          
          remainderPointer.value=remainderPointer.left.value;
          remainderPointer.left=remainderPointer.left.left;
          break;
        }

       
      }
    
    }

    return this.root
  }
  
}



module.exports={
  BinaryTree
}