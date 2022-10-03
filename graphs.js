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
}



module.exports = {
  Graph
}