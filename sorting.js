

class Sorting{


  bubble_sort(list){


    for ( let i=0;i<list.length;i++){
      for (let j=0;j<list.length;j++){
        if(list[j]>list[j+1]){
          this.swapElement(i,j,list)        
        }
      }
    }


    return list
  
    
  }

  swapElement(i,j,arr){

    let temp=arr[j]
    arr[j]=arr[i]
    arr[i]=temp
    
  }

  
}


module.exports={
  Sorting
}