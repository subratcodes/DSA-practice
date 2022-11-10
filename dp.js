class Solution {

  fibo_recursive(n) {
    if (n < 2) return n
    console.log(this.fibo_recursive(n - 1) + this.fibo_recursive(n - 2))
    return this.fibo_recursive(n - 1) + this.fibo_recursive(n - 2)
  }


  
  fibo_dp() {
    let cache = {}
    return function fib(n) {
      if(n in cache){
        return cache[n]
      }else{
        if(n<2) return n
        else{
         cache[n]=fib(n-1)+fib(n-2)
        return cache[n]
        }
      }
    }

  }


}


module.exports = {
  dp: Solution
}

