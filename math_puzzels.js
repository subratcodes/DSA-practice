class Solution{
  //find the middle element wihtout less comparisons.
    middle(A, B, C){
        //code here
        if(A>B &&A<C) return A
        else if(A>C &&A<B) return A
        
        if(B>A&&B<C) return B
        else if(B>C && B<A) return B
        
         if(C>A && C<B) return C
         else if(C<A && C>B) return C
    }

   
  


  happy_Number(n){

    
    
    
  }

  power_2(n){
    if (n<=0) return false
    while(n%2==0) n=parseInt(n/2)
    return true
  }


  sum_square_digits(n){
    let result=0
    while(n!=0){
      result+=(n%10) *n(n%10)
      n=n/10
    }
    return result
  }
}


