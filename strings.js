

class EasyStringProblems {


  reverseAString(str) {

    // there is string which you need to reverse the letters.
    let length = str.length;

    let reversedString = '';
    if (length == 0 || typeof str != 'string') throw Error('Empty string or wrong type of string added')

    let j = length - 1;
    while (j >= 0) {

      reversedString += str.charAt(j);
      j--;
    }

    return reversedString;
  }


  //finds a substring attached to the.
  implementStr(strA, strB) {

    let text = strA.length;
    let pattern = strB.length;

    console.log(text - pattern)
    //pre validation.
    if (typeof strA != 'string' || typeof strB != 'string') throw Error(' Please enter a valid string type')
    if (text == 0 || pattern == 0) throw Error('Cannot accept string with size 0');
    if (pattern > text) throw Error('Pattern length cannot be greater than text')





    for (let i = 0; i <= (text - pattern); i++) {
      // console.log(i)
      let strike_count = 0;
      for (let j = 0; j < pattern; j++) {
        if (strB.charAt(j) != strA.charAt(j + i)) break;
        else strike_count++;


      }

      if (strike_count == pattern) {
        return i;
      }
    }

    return -1;



  }


  //Given a non-empty sequence of characters str, return true if sequence is Binary, else return false
  /*Input:
str = 101
Output:
1
Explanation:
Since string contains only 0 and 1, output is 1. */
  checkBinary(str) {

    if (typeof str != 'string' || str.length == 0) throw new Error('Wrong string format entered');

    let output = 1;

    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) !== '1' && str.charAt(i) !== '0') {
         output=0;
         break;
      }
      

      
    }

    return output;


  }


  longestName(names){
   
    if(names.length==0) console.log(names.length)

    let index=-1;
    let maxLength=-1;

    //created the names of the length
     for(let i=0;i<names.length;i++){
       if(names[i].length>maxLength){
        
         maxLength= names[i].length
         index=i;
       }
    }


    return names[index];
    
    

    
  }


conRevstr(S1,S2) {
 if(s1.length==0||s2.length==0) throw Error ('Strings cannot be empty');


  
  

  
  
}




  
}



class runPrefix extends EasyStringProblems{

longestCommonPrefix(arr,n){ 
        //code here
        let result=arr[0]
        for(let z=1;z<n;z++){
            result=this.runPrefix(result,arr[z])
        }
        
        
        if(result=='')return -1
        return result
        
        
        
    }
  
runPrefix(str1,str2){
        
        let l1=str1.length
        let l2=str2.length
        let result=''
        
        for(let i=0, j=0; i<l1 && j<l2;i++,j++){
            if(str1[i]!=str2[j]) break 
            else result+=str2[i]
        }
        
        
        return result
    }

  
}





module.exports = {
  EasyStringProblems
}