const { EasyArrays } = require('./arrays.js');
const {Graph}=require('./graphs.js')
const {Solution}=require('./two_pointer.js')
const {LinkedList}=require('./linkedList.js')
const testcase=require('./TestCases/array.js')
const {BinaryTree, BinaryTreeQuestions}=require('./trees.js')


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





// let solve=new EasyArrays()
//  b=solve.duplicateElements(testcase.a,testcase.a.length)
// console.log(b)

 
let Btree=new BinaryTree()
Btree.insert(2)
Btree.insert(3)
Btree.insert(1)
let b =Btree.insert(5)


let ques=new BinaryTreeQuestions()

result=ques.getSize(b)
console.log(result)
return result