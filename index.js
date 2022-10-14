const { EasyArrays } = require('./arrays.js');
const {Graph}=require('./graphs.js')
const {Solution}=require('./two_pointer.js')
const {LinkedList}=require('./linkedList.js')


// let directed=new Graph()

// for (let i=0;i<6;i++){
//   b=directed.addVertex(i)
// }

// b=directed.addEdge(0,1)
// b=directed.addEdge(1,0)
// console.dir(b)


// let a=[9,4,-7,2,3,7]
// let t1=new Date()
// let tets=  new Solution().subArray_zeroSum(a,a.length)
// let t2=new Date()
// console.log(tets)


let ab=new LinkedList(0)


for(let i=1;i<5;i++){

  ab.append(i)

}

result=ab.kthNode(10)
console.log( result)

 

