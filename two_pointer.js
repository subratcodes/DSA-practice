class Solution {
  //Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, sum) {
    //your code here
    let start=0
    let end=-1
    let result=[]
    let currentSum = arr[0]
    let store=new Map()
    for (let i=1;i<n;i++){
       currentSum+=arr[i]
       console.log(currentSum)
      //handles the edge case for th first half
      if(currentSum-sum==0){
         result.push(start+1)
        result.push(i+1)
         break
       }


      if(store.has(currentSum-sum)){
        //we get the starting index of the person and then we assign it to the start.
       let temp=store.get(currentSum-sum)+1
        result.push(temp)
        result.push(i)
        break;
      }

      store.set(currentSum,i)

      
       
    }

    return result

  }

  subArray_zeroSum(arr,n){
    //2 cases we need to chekc
    // 1 .either the sum gets to 0
    //or the prefix sum is repeated.

  }
}

module.exports={
  Solution
}