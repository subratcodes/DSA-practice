  class problemSolving{

 getFirstRecurringDigits(array){

   // loop thorugh array one by one. 
   //run j loop which checks for the repeating character
   //until we reach the end.
  const count=new Map();
   
//this is going to have a liner time complexity. ) 0(N)
   
   for(let i=0;i< array.length;i++){
     if(!count.get(array[i])){
     count.set(array[i],1);  
     }else {
       //this will be our FIRST RECURRING DIGIT.
       console.log(array[i])
       return array[i];
       
      
     }
     
     
   }
   
 
   
}  
 
}









module.exports={
  problemSolving
}