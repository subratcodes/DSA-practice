class cyclicRoation {


  //you need to rotate an array clockwise.
  clockwise(arr, n) {

    if (n == 0) throw ' cannot rotate an array ';
    let temp = arr[n - 1];

    
    for (let j = n - 1; j>0; j--) {
       arr[j]=arr[j-1];
    }

    arr[0] = temp;

    return arr;

  }















}


module.exports = {
  cyclicRoation
}