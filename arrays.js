class EasyArrays{

printAlternateElements(arr, n){

    if(n==0) throw new Error('Array cannot be empty');
    for(let i=0;i<n;i++){
        if(i%2==0) console.log(arr[i])
    }


  
}
  printSecondLargest(arr,n){


    //simple solution. sort the array and find the element -2;
    //better approach. -- run through the array 2 times. and find the largest and the smallest.

    //
    
    if(n==0 || n<2) throw ' Invalid Array sent out to me.';
    let max=-2454635434;
    let secondMax=-2454635434;

    //doing a loop starting with 1.
    for(let i=0;i<n;i++){
      if(arr[i]>max){
        secondMax=max;
        max=arr[i];
      }
    }


    
    if(max==-2454635434) return -1;
    else return secondMax;
   
    //creating a loop to run over
    

    
  }

  valueEqualToIndex(arr, n){
   if (n==0) throw 'Wrong format of array entered';

    let i=0;
    let result=[];
    while(i<n){
      if(arr[i]==i+1) result.push(i+1); 
      i++;
    }
    
return result;

    
  }

  //check if this is an array or not.
  reverseArrayInGroups(arr,n,k){
   if(n==0||k==0) throw 'wrong format entered';

    let start=0;
    while(start<n){
      let end=this.findLastIndex(start,k,n);
      console.log(end)

      start=start+k;
    }

    


    
  }

  findLastIndex(start,k,n){
    return start+k;  
  }

  reverseArrayInGroups(arr,n,k){

     if(n==0) throw 'Empty array cannot be reversed';
     if(k==0) return arr;

    
    for(let i=0;i<n;i=i+k){

       let start=i;
      let end=Math.min(i+k-1,n-1);
      let temp;


      //swapping alogritihm begins here.
      while(start<end){
        temp=arr[start];
        start=arr[end];
        arr[end]=temp;
        start++;
        end--;
      }


  
      
    }



    return arr;
    
  }

  missingNoFromArray(arr,n){

   let total = Math.floor(n * (n + 1) / 2);

    console.log(total)
        

    // console.log(arr_total)
        
         

  
  }

  
  thirdLargest(arr,n){

  let a=arr[0],b=arr[0],c=arr[0];
    for(let i=1;i<n;i++){

      if(arr[i]>a){
        c=b;
        b=a;
        a=arr[i];
      }else if(arr[i]>b){
        c=b;
        b=arr[i];
      } 
      
      
    }

    console.log(c)
  }
  
}


module.exports={
  EasyArrays
}