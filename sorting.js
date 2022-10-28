

class Sorting {


  bubble_sort(list) {


    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (list[j] > list[j + 1]) {
          this.swapElement(i, j, list)
        }
      }
    }


    return list


  }

  swapElement(i, j, arr) {

    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp

  }


  selectionSort(arr) {



    for (let i = 0; i < arr.length; i++) {

      let second_index = i

      for (let j = i + 1; i < arr.length; j++) {
        if (arr[j] < arr[second_index]) {
          second_index = j
        }
      }

      console.log(second_index)
      let temp = arr[second_index]
      arr[second_index] = arr[i]
      arr[i] =temp
    }

    return arr
  }

  insertionSort(arr){
    
    
  }


  
}


module.exports = {
  Sorting
}