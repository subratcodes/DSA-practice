// const {problemSolving,findIndex}=require('./problems.js');
// const {DoubleLinkList}=require('./doublyLinkedList.js');
// const {cyclicRoation}=require('./rotation.js');
// const stringProblems=require('./strings.js');
// const {LinkedList} =require('./linkedList.js');
 const { EasyArrays } = require('./arrays.js');
// const { Stack, arayStack, queue, ParenthesisChecker } = require('./stacks.js');
 const {BinaryTree,BinaryTreeQuestions}=require('./trees.js')
 let easyArrayProblems=new EasyArrays();


let subTree=new BinaryTree()
let a=subTree.insert(2)
a=subTree.insert(1)
a=subTree.insert(3)
a=subTree.insert(4)
console.log(a)


let ques=new BinaryTreeQuestions();
let b=ques.countLeaves(a)
console.log(b)