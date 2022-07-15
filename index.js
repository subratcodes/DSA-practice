const {problemSolving,findIndex}=require('./problems.js');
const {LinkedList}=require('./linkedList.js');



let myLinkList= new LinkedList(10);

myLinkList.append(9);
myLinkList.append(8);
myLinkList.append(7)


//deleting callback;
 let a= myLinkList.delete(1)
a=myLinkList.delete(2)
console.log(a)