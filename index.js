// const {problemSolving,findIndex}=require('./problems.js');
// const {DoubleLinkList}=require('./doublyLinkedList.js');
// const {cyclicRoation}=require('./rotation.js');
// const stringProblems=require('./strings.js');
// const {LinkedList} =require('./linkedList.js');
// const { EasyArrays } = require('./arrays.js');
// const { Stack, arayStack, queue, ParenthesisChecker } = require('./stacks.js');
 const {BinaryTree}=require('./trees.js');
// let easyArrayProblems=new EasyArrays();

// easyArrayProblems.printAlternateElements([1,2,3,4,5,6,7,8,9,10],10)

let BTree=new BinaryTree();

let a=BTree.insert(2);
BTree.insert(1);
a=BTree.insert(3);
a=BTree.insert(4);
a=BTree.remove(3);
a=BTree.remove(4);

console.log(a)
