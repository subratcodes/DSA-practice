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
     
    this.tail.next=node;
    this.tail=node
    
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

        console.log(currentNode.value)
       const data={
         value:currentNode.value
       }
      arr.push(data);
      currentNode=currentNode.next;
      
      
    }


    return arr;
    
  }

  //deletes node with the help of the value.
  deleteNode(index){
    if(index>this.length) throw Error('Index cannot be greater than the length');

     // if(index==0|| this.length==0)
    
    let unwantedNode =this.traverseToIndex(index);
    let headNode=this.traverseToIndex(index-1);
  
     headNode.next=unwantedNode.next
    unwantedNode.next.prev=headNode
    
    return this
    
     
     
  }

 //traverses to the index of the front.
  traverse(value){

     if(index>this.length) throw new Error('index is out of bound.')
    let counter=0;
    let currentNode=this.head;
    while(currentNode){
       if(currentNode.value==value) return currentNode;
      currentNode=currentNode.next;
    }
    
  }


  //traverses to the index and the returns the current node.
   traverseToIndex(index){
     if(index>this.length) throw Error('Index is out of range')
     let data=this.head;   
     
     for(let i=0;i<this.length;i++){
          if(i==index){
            return data;
          }
        data=data.next;
       
     }
     
   }


  delete_part2(del){
    if (this.head ==null || del==null) return
      // If node to be deleted is head node
        if (this.head == del) {
            this.head = del.next;
        }
 
        // Change next only if node to be deleted
        // is NOT the last node
        if (del.next != null) {
            del.next.prev = del.prev;
        }
 
        // Change prev only if node to be deleted
        // is NOT the first node
        if (del.prev != null) {
            del.prev.next = del.next;
        }
 
        // Finally, free the memory occupied by del
        return;
  }


  

  reverse(){

    let current=this.head
    let temp=null
    while(current!=null){

      temp=current.prev
      //switching the sides
      current.prev=current.next
      current.next=temp
      current=current.prev      
    }


    return this.head
   

   
 }
}

module.exports={
  DoubleLinkList
}