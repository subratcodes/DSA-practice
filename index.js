// const {problemSolving,findIndex}=require('./problems.js');
// const {DoubleLinkList}=require('./doublyLinkedList.js');
// const {cyclicRoation}=require('./rotation.js');
// const stringProblems=require('./strings.js');
// const {LinkedList} =require('./linkedList.js');
 const { EasyArrays } = require('./arrays.js');
// const { Stack, arayStack, queue, ParenthesisChecker } = require('./stacks.js');
 const {BinaryTree}=require('./trees.js')
 let easyArrayProblems=new EasyArrays();

// easyArrayProblems.printAlternateElements([1,2,3,4,5,6,7,8,9,10],10)

let a=[396,603,176,591,339,743,912,792,67,516,706,804,998,521,755,560,45,641,78,797,718,364,526,838,993,222,946,793,347,826,174,617,121,159,369,288,600,208,459,210,677,655,273,245,798,840,733,696,483,689,355,202,94,693,699,604,771,646,134,393,434,705,338,635,299,454,24,822,536,629,440,60,183,773,869,99,943,738,498,965,216,403,839,101,926,634,29,987,218,69,141,308,780,14,686,732,389,940,262,305,922,847,73,81,26,366,759,148,493,807,754,492,556,156,938,478,927,275,146,643,149,665,863,1000,166,249,123,445,270,475,378,385,173,282,234,719,449,546,290,933,33,494,903,986,616,555,30,967,292,465,145,8,103,915,372,832,551,502]

let bc=[2, 4 ,1, 3, 5];

let b=easyArrayProblems.thirdLargest(a,a.length);
console.log(b);