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
    runBinarySearch(start=0, end, index,arr){

       console.log(start, end)
         while(start<=end){
             if(arr[start]==index) return start;
             start++;
         }
         
        return -1;
        
    }

    runBinary(start, end, target,arr){

      if(start>end || !end) throw 'error in start and end parameters'

      let pivot=(start+end)/2
      if(arr[pivot]==target) return pivot
      else if(arr[pivot]>target)  this.runBinary(0,pivot-1,target,arr)
      else  this.binarysearch(pivot+1,arr.length,target,arr)      
    }
    
}

 
 function first(arr,low,high,x,n)
{
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if ((mid == 0 || x > arr[mid - 1]) && arr[mid] == x)
            return mid;
        else if (x > arr[mid])
            return first(arr, (mid + 1), high, x, n);
        else
            return first(arr, low, (mid - 1), x, n);
    }
    return -1;
}
 
/* if x is present in arr then returns the index of
   LAST occurrence of x in arr[0..n-1], otherwise
   returns -1 */
function last(arr, low, high, x, n)
{
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if ((mid == n - 1 || x < arr[mid + 1]) && arr[mid] == x)
            return mid;
        else if (x < arr[mid])
            return last(arr, low, (mid - 1), x, n);
        else
            return last(arr, (mid + 1), high, x, n);
    }
    return -1;
}



module.exports={
  Solution
}