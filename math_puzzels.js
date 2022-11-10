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
}