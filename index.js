const {problemSolving,findIndex}=require('./problems.js');
const {LinkedList}=require('./linkedList.js');



let myLinkList= new LinkedList(10);

myLinkList.append(9);
myLinkList.append(8);
let a =myLinkList.insert(1,8.5)
a =myLinkList.insert(2,10)
console.log(a)