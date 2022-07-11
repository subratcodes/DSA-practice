class LinkedList{

  constructor(value){
    this.head={
      value:value,
      next:null
    }

    this.tail=this.head;
    this.length=1;
  }

  append(value){
    const newNode={
      value:value,
      next:null
    }

    this.tail.next=newNode;
    this.tail=newNode;
    this.length++;
    return this;
  }
  
}



module.exports={
  LinkedList
}