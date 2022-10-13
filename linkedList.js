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


  //this method reverses the linked list in the opposite direction.
  reverse() {


    console.log(this.head);

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


  insert_middle(val) {


    

    }


  getLength ( ){
    i=-1
    temp=this.head
    while(temp){
      i++
      temp=temp.next
    }

    return i
  }






  

  }













module.exports = {
  LinkedList
}