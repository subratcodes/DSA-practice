class DoubleLinkList{


  //there is no point in having a prev object pointing towards for a head node.
  constructor(value){
    this.head={
      value: value,
      next:null
    }
    this.tail=this.head;
    this.length=1;
    
    
  }
  
  append(value){

     //creating a node object with the prev node pointer and the front node pointer.
     const node={
       value:value,
       next:null,
       prev:this.tail
     }
         //we assign the tail to the prev button.
     
     this.tail=node;
     this.head.next=node;
      
      this.length++;

     return this;
     
   }

  prepend(value){
   const headNode={
     value:value,
     next:null
   }
    
    headNode.next=this.head;
    this.head=headNode;
    this.length++;
  
    return this;
  
  }

  printlist(){

    let currentNode=this.head;

   let arr=[];
    
    while(currentNode){

       const data={
         value:currentNode.value
       }
      arr.push(data);
      currentNode=currentNode.next;
      
      
    }


    return arr;
    
  }


  //deletes node with the help of the value.
  deleteNode(value){


    
  }

  traverse(index){

     if(index>this.length) throw new Error('index is out of bound.')
    let counter=0;
    let currentNode=this.head;
    while(currentNode){
      
    }
    
  }

  

  
}

module.exports={
  DoubleLinkList
}