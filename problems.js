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



class findIndex{

  //a is the array
  //n is the total lenght
  //x -- value 1 
  //y -- value 2
    minDist(a, n, x, y)
    {
        // code here
       const map=new Map();
      for(let i=0;i<n;i++){
        if(a[i]===x) map.set(a[i],i);
        else if(a[i]===y) map.set(a[i],i)
              
      }
      if(map.size!=2) return -1;
      let distance= (map.get(x)-map.get(y));
      
       return distance;
    
    }
}






module.exports={
  problemSolving,
  findIndex
}