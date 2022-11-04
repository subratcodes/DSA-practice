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





// let b_sort=new Sorting()
// let a=[2,34,1,34,0]
//  let result= b_sort.selectionSort(a)
// console.log(result)

let a=[86,93,82,78,35,94,91,17,12,51,90]
console.log(sortIt(a,a.length))

 function sortIt(arr,n){
        //code here
          arr=arr.sort()
       let result=[]
        
        //running from right to left
        for(let i=n-1;i>=0;i--){
            
            if(arr[i]%2!=0) result.push(arr[i])
        }
        
        
        for(let i=0;i<n;i++){
            if(arr[i]%2==0) result.push(arr[i])
        }
        
        return result
        
        
    }



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
