

class EasyStringProblems{


reverseAString(str){

// there is string which you need to reverse the letters.
  let length=str.length;

  let reversedString='';
  if(length==0|| typeof str!='string' ) throw Error('Empty string or wrong type of string added')

   let j=length-1;
   while(j>=0){
    
     reversedString+=str.charAt(j);
     j--;
   }
  
return reversedString;
}


  //finds a substring attached to the.
implementStr(strA, strB){

  let text=strA.length;
  let pattern=strB.length;


  //pre validation.
  if(typeof strA !='string'|| typeof strB !='string') throw Error (' Please enter a valid string type')
  if(text==0||pattern==0) throw Error('Cannot accept string with size 0');
  if(pattern>text) throw Error('Pattern length cannot be greater than text')

   
  
   for(let i=0;i<(text-pattern); i++){
     let pattern_found=true;
     for(let j=0;j<pattern;j++){
       if(strA.charAt(i)!=strB.charAt(j+i)){

         pattern_found=false;
          break;
       }
     }
      
    if(pattern_found) return pattern_found;
     
   }

  return false;

  
  
} 
  



}



module.exports={
  EasyStringProblems
}