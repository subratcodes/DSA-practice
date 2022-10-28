const { EasyArrays } = require('./arrays.js');
const {Graph}=require('./graphs.js')
const {Solution}=require('./two_pointer.js')
const {LinkedList}=require('./linkedList.js')
const testcase=require('./TestCases/array.js')
const {BinaryTree, BinaryTreeQuestions}=require('./trees.js')
const {Sorting}=require('./sorting.js')



// let test=new LinkedList(2)
// test.append(2)
// test.append(2)
// test.append(2)

// console.log(test.removeDuplicates())






let b_sort=new Sorting()
let a=[2,34,1,34,0]
 let result= b_sort.selectionSort(a)
console.log(result)







// let solve=new EasyArrays()
//  b=solve.duplicateElements(testcase.a,testcase.a.length)
// console.log(b)

 
// let Btree=new BinaryTree()
// Btree.insert(2)
// Btree.insert(3)
// Btree.insert(4)
// let a=Btree.insert(1)


// let ques=new BinaryTreeQuestions()


// console.log(ques.count_no_leaf(a))
