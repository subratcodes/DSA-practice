class Solution {
    binarysearch(arr, n, k) {
        // code here
        if(n==0) throw ' wrong length of array specified.'; 
        let pivot=parseInt(n/2);
         if(arr[pivot]==k) return pivot;
        else if(k>arr[pivot]) return this.runBinarySearch(pivot+1,n,k,arr)
        else  return this.runBinarySearch (0,pivot-1,k,arr);
        
    }

    //running the binary search. option.
    runBinarySearch(start, end, index,arr){

       console.log(start, end)
         while(start<=end){
             if(arr[start]==index) return start;
             start++;
         }
         
        return -1;
        
    }
}



module.exports={
  Solution
}