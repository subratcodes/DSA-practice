function sum(n,m,grid){
   let sum=0
       for (let i=0;i<N;i++){
           for(let j=0;j<M;j++){
               sum+=Grid[i][j]
           }
       }
       
       return sum

  
}


module.exports={
  sum
}