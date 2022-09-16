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
  this.length--;
  this.top=this.data.length-1;

  
//  return this.data;
  
}
  
peek(){
  if(this.length==0) return null;
  return this.data[this.top];
}
  
}





// queues data structures works on FIFO

class queue{
 // constructor
  constructor(){
  this.first=null;
  this.last=null;
  this.length=0;
}

  peek(){
   return this.first;
    
  }


  // adds the value
  enqueue(value){
 let node= new Node(value)
    //first time entering.
    if(this.length==0){
      this.first=node;
      this.last=node;
      
     
    }else{

      let lastNode=this.last;
      lastNode.next=node;
      this.last=node;
  
      
    }
     
    this.length++;
   return this;    
  }

  
  dequeue(){
    let nodeStack=this.first;c
    this.first=nodeStack.next;
    this.length--;
    return this;
  }


  
}



class ParenthesisChecker
{
    //Function to check if brackets are balanced or not.
    ispar(x)
    {
      if(x.length==1) return false;
        //your code here
    
         let openingInput=false;
        
        let stackChecker= new arayStack()
        
        for(let i=0;i<x.length;i++){
               // console.log(x.charAt(i))
             if(x.charAt(i)=='{'|| x.charAt(i)=='(' || x.charAt(i)=='[') {

                openingInput=true;
               stackChecker.push(x.charAt(i)); 
           
             }
             
             
              if(x.charAt(i)=='}'||x.charAt(i)==')' || x.charAt(i)==']'){
                      
                   
                  let char=x.charAt(i);
                     
          
                 if(char=='}'&&stackChecker.peek()=='{')stackChecker.pop();
               else if(char==')' && stackChecker.peek()=='(')stackChecker.pop();
               else if(char==']'&& stackChecker.peek()=='[')stackChecker.pop();
               
              
  
              }
            
            
        }


      if(openingInput==false) return false;

      if(stackChecker.data.length==0) return true;
      else return  false;
    
       
        
    }
}


module.exports={
  Stack,arayStack,queue,
  ParenthesisChecker
}