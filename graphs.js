class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {
    }; 
  } 
  addVertex(node)  {
    if(!this.adjacentList.hasOwnProperty(node)){
    this.adjacentList[node]=[]
    this.numberOfNodes++
    return this.adjacentList
    }else throw 'Node has already been added'
    
  } 
  addEdge(node1, node2) { 

    try{
    //undirected Graph
    //if(node1 || !node2) throw Error('Please enter correct parameters')
    //we cannnot add a undirected graph
    if(this.validateNodesConnections(node1,node2)) throw  'Cannot be an directed graph'
    else {
      console.log('true')
     let temp=this.adjacentList[node1]
     
      temp.push(node2)
      this.adjacentList[node1]=temp
      return this.adjacentList
    }   
    }catch(err){
      console.log(err)
    }
   
         
  } 

  validateNodesConnections(node1,node2){
   let arr=this.adjacentList[node2]
    return arr.includes(node1)
  }
  showConnections() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
} 
} 



module.exports={
  Graph
}