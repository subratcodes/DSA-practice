class Node{
  constructor(value){
   this.value=value;
    this.next=null;
  }
}



class Stack{
  constructor(){
    this.top=null;
    this.bottom=null;
    this.length=0;
  }

  //pushing value in the stack. having time complexity of 0(1).
  push(value){
    let node= new Node(value);
    if(this.top!=null){
     let data=this.top;
      this.top=node;
      //top to bottom approach needs to be found out here.
      this.top.next=data;
      
    }else{
      this.top=node;  
     this.bottom=node;
    }
    this.length++;
    return this;
  }

//   deletes the top most element in the stack
 pop(){


   if(this.top== null) return null;
this.top=this.top.next;
  this.length--; 
   if(this.length==0) this.bottom=null;
   return this;
   
   
 }

  //shows a value
  peek(value){
    return this.top;
  }

  
}



//using stacks with arrays,
class arayStack{
  constructor(){
    this.top=null;
    this.bottom=null;
    this.data=[];
    this.length=0;
  }

push(value){

  //if the stack is new.
  if(this.length==0){
     this.data.push(value);
    this.top=this.data.length-1;
    this.bottom=this.data.length-1;
    this.length++;
  }else{

    this.data.push(value)
    this.top=this.data.length-1; 
    this.length++;
  }
  
  return this;

  
}

  //pops out.
pop(){

  this.data.pop();
  return this.data;
  
}
  
peek(){
  if(this.length==0) return null;
  return this.data[this.top];
}
  
}



module.exports={
  Stack,arayStack
}