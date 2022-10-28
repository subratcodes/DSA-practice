class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {
    };
  }
  addVertex(node) {
    if (!this.adjacentList.hasOwnProperty(node)) {
      this.adjacentList[node] = []
      this.numberOfNodes++
      return this.adjacentList
    } else throw 'Node has already been added'

  }
  //adds the edges from node 1 to node 2
  //this is an implementation of undirected acyclic graph
  addEdge(node1, node2) {

    try {

      if (this.validateNodesConnections(node1, node2)) throw Error('Nodes already added')
      this.adjacentList[node1].push(node2)
      this.adjacentList[node2].push(node1)
      return this.adjacentList

    } catch (err) {
      console.log(err)
    }

  }
  validateNodesConnections(node1, node2) {
    let arr = this.adjacentList[node2]
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

  runBFS(root) {

    if (!root) throw Error('No root found')
    let visited = []
    let queue = [root]
    while (queue.length != 0) {

      vertex = queue.shift()

      visited.push(vertex)








    }




  }

  fetch_vertex(){
    
    temp=Object.keys(this.adjacentList)
    return temp.length
    
  }
  
  motherVertex(root) {
    //A Mother Vertex is a vertex through which we can reach all the other vertices of the Graph.

    //swill store the nodes count.
    total_vertex=this.fetch_vertex()
    if(total_vertex==0) return null
    
    
   nodes_count={

     
   } 





  }



}



module.exports = {
  Graph
}