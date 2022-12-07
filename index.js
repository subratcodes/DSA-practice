const { EasyArrays } = require('./arrays.js');
const { Graph } = require('./graphs.js')
const { Solution } = require('./search.js')
const { LinkedList } = require('./linkedList.js')
const testcase = require('./TestCases/array.js')
const { BinaryTree, BinaryTreeQuestions } = require('./trees.js')
const { Sorting } = require('./sorting.js')
const { sortStack } = require('./stacks.js')
const{dp}=require('./dp.js')
const {DoubleLinkList}= require('./doublyLinkedList')




let b_search=new Solution()
let r=b_search.runBinary(0,5,3,[1,2,3,4,5,6])
console.log(r)



















// let test=new LinkedList(9)
// test.append(1)
// test.append(3)
// test.append(5)
// test.append(9)
// test.append(4)
// test.append(10)
// test.append(1)

// console.log(test.delete_n_after_m(2,1))
// // console.log(test.removeDuplicates())


// let b_sort=new Sorting()
// let a=[2,34,1,34,0]
//  let result= b_sort.selectionSort(a)
// console.log(result)



// let solve=new EasyArrays()
//  b=solve.duplicateElements(testcase.a,testcase.a.length)
// console.log(b)


// let Btree=new BinaryTree()
// Btree.insert(2)
// Btree.insert(3)
// Btree.insert(4)
// let a=Btree.insert(1)



// let ques=new BinaryTreeQuestions()


//  console.log(ques.recursiveBFS([a],[]))
