
const { EasyArrays } = require('./arrays.js');
const {Graph}=require('./graphs.js')

let directed=new Graph()

for (let i=0;i<6;i++){
  b=directed.addVertex(i)
}

b=directed.addEdge(0,1)
b=directed.addEdge(1,0)
console.dir(b)