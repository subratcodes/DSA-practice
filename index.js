const {problemSolving,findIndex}=require('./problems.js');
const {LinkedList,DoubleLinkList}=require('./doublyLinkedList.js');



const dLinkList=new DoubleLinkList(10);
let a= dLinkList.append(9)

let b=dLinkList.prepend(11);
 console.log(b)
a=dLinkList.printlist();

console.log(a)