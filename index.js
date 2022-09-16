// const {problemSolving,findIndex}=require('./problems.js');
// const {DoubleLinkList}=require('./doublyLinkedList.js');
// const {cyclicRoation}=require('./rotation.js');
// const stringProblems=require('./strings.js');
// const {LinkedList} =require('./linkedList.js');
const { EasyArrays } = require('./arrays.js');
const { Stack, arayStack, queue, ParenthesisChecker } = require('./stacks.js');

// let easyArrayProblems=new EasyArrays();

// easyArrayProblems.printAlternateElements([1,2,3,4,5,6,7,8,9,10],10)


const { Solution } = require('./search.js');

let checker = new EasyArrays();
let a = checker.missingNoFromArray([1,2,3,5], 5)

console.log(a)