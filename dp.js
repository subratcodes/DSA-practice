class Solution {

  fibo_recursive(n) {
    if (n < 2) return n
    console.log(this.fibo_recursive(n - 1) + this.fibo_recursive(n - 2))
    return this.fibo_recursive(n - 1) + this.fibo_recursive(n - 2)
  }


  
  fibo_dp() {
    let cache = {}
    let result=[]
    return function fib(n) {
      if(n in cache){
        return cache[n]
      }else{
        if(n<2) return n
        else{
         cache[n]=fib(n-1)+fib(n-2)
         result.push(cache[n])
          return result
        }
      }
    }

  }


  gridRows(m,n){
    //find the number of ways where we can find the grid trav
  }

  


  
}


module.exports = {
  dp: Solution
}

