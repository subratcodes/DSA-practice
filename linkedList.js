class LinkedList {

  constructor(value) {
    this.head = {
      value: value,
      next: null
    }

    this.tail = this.head;
    this.length = 1;
  }

  //appending allows it to be addded in the back.
  append(value) {
    const newNode = {
      value: value,
      next: null
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }



  //prepending allows it to be added in the front.
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }

    return array;

  }
  //inserting into the linked list with a specific 

  insert(index, value) {

    if (index > this.length) throw new Error('Wrong Index added.')


    //creating a new node.
    const newNode = {
      value: value,
      next: null
    }

    const leader = this.traverseToIndex(index - 1);
    //holding a pointer for the other part of list
    const holdingPoint = leader.next;

    leader.next = newNode;
    newNode.next = holdingPoint;


    this.length++;


    return this.printList()

  }

  traverseToIndex(index) {
    if (index > this.length) throw new Error('Wrong Index added.')
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;

  }

  delete(index, value) {
    if (index > this.length) throw new Error('Index is out of bound');
    let leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next;
    leaderNode.next = unwantedNode.next;
    this.length--;

    return this.printList();



  }

  deleteMiddle() {
    //deletes the middle element by slow and fast pointer approach
    let prev_ele = null
    //your code here
    let temp = this.head
    let fast_p = temp
    let slow_p = temp
    let prev_p = null
    while (fast_p && fast_p.next) {
      prev_p = slow_p
      slow_p = slow_p.next
      fast_p = fast_p.next.next
    }

    console.log(slow_p)

    if (fast_p) {
      //the list is odd
      prev_p.next=slow_p.next
      

    }else{
      //list is even.
      prev_p.next=slow_p.next
      
    }


    return this.printList()



  }
 


  //this method reverses the linked list in the opposite direction.
  reverse() {
    if (this.head == null) return -1

    head = this.head
    newHead = null
    while (head != null) {
      let nextNode = head.next;
      // set the current node's next to point backwards 
      head.next = newHead;
      // store the current node, to be used as the new next later
      newHead = head;
      // the previously right-side node is now processed
      head = nextNode;


    }
  }

  getMiddle(node) {
    //your code here
    if (!node) return -1
    let temp = head
    let slow_pnt = temp
    let fast_pointer = temp

    while (fast_pointer) {
      if (fast_pointer.next == null) {
        return slow_pnt.data
      }


      if (fast_pointer.next.next == null) fast_pointer = fast_pointer.next
      else fast_pointer = fast_pointer.next.next
      slow_pnt = slow_pnt.next

    }
    return -1


  }

  //inserts in the middle of the algo using a tortoise and hare algorithim
  insert_middle(val) {

    let temp = this.head
    let fast = temp.next.next
    let slow = temp


    while (fast != null) {
      fast = fast.next
      slow = slow.next
    }

    //slow will  be the middle pointer element
    let node = {
      value: val,
      next: null
    }
    node.next = slow.next
    slow.next = node

    return this.printList()



  }

  //gets the length of linked list
  getLength() {
    let i = 0
    let temp = this.head
    while (temp) {
      i++
      temp = temp.next
    }

    return i
  }


  isEven_odd() {
    let length = this.getLength()
    console.log(length)
  }


  //funds the Kn th node 
  kthNode(value) {
    if (this.head == null) return -1
    let count = this.getLength()

    // gets the count
    let index = parseInt(count / value)
    let temp = this.head

    //runs to the index of the loop.
    if (index == 0) return temp.value

    let i = 1

    while (i != index) {

      temp = temp.next
      i++
    }


    return temp.value

  }

  sum_lastNode(value) {

    if (value <= 0) return -1

    let fast_p = this.head
    let slow_p = this.head
    let sum = 0


    for (let i = 0; i < value; i++) {
      sum += fast_p.value
      fast_p = fast_p.next

    }





    while (fast_p != null) {

      sum -= slow_p.value
      sum += fast_p.value
      slow_p = slow_p.next
      fast_p = fast_p.next

    }


    this.print(sum)





  }


  removeDuplicates() {
    // nIave appraoch 0(n^2)
    if (!this.head) return this.head
    let store = new Set()

    let temp = this.head
    let previousLink = null

    while (temp) {

      var data = temp.value

      if (store.has(data)) {
        previousLink.next = temp.next

      } else {
        store.add(data)
        previousLink = temp
      }
      temp = temp.next

    }
    return this.printList()




  }


  pairWiseSwapElemnet() {
    let curr = this.head
    let dumb_Node = null
    while (curr.next != null) {
      current.next = curr

    }



  }




  print(value) {
    console.log(value)
  }


}













module.exports = {
  LinkedList
}