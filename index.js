const {problemSolving,findIndex}=require('./problems.js');
const{LinkedList,DoubleLinkList}=require('./doublyLinkedList.js');
const {cyclicRoation}=require('./rotation.js');





// const triplets=new problemSolving
//  let a =triplets.findTriplets([6 ,56 ,93 ,-12 ,26 ,78 ,79 ,58 ,53 ,52 ,51 ,55 ,77 ,-2, 61 ,-26 ,91, 16 ,100 ,-8 ,72])
// console.log(a)


let arr=[1,2,3,4,5]

let rotations=new cyclicRoation(); 
 let a=rotations.clockwise(arr,arr.length)

console.log(a)