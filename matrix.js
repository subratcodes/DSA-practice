function sum(n,m,grid){
   let sum=0
       for (let i=0;i<N;i++){
           for(let j=0;j<M;j++){
               sum+=Grid[i][j]
           }
       }
       return sum
}

function multiply(a,b){


  let rows=calculateRows(a)
  let columns=calculateColumns(a)
  

 var rslt = Array(a.length).fill(0).map(()=>new 
   Array(b.length).fill(0));


  console.log(rslt)
  
}


function diagonalSum(matrix){

  



  
}



//calculates left diagnonal.
function leftDiagnonal(matrix,n){
  let sum=0
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      if(i==j){
        sum+=matrix[i][j]
      }
    }
  }

  return sum
}


function rightDiagonal(matrix,n){
  
}

function calculateRows(matrix){
  return matrix[0].length
}

function calculateColumns(matrix){
  return matrix.length
}


module.exports={
  sum
}