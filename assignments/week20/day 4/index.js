class Queue extends Array{

    constructor(){
      super()
    }
    enqueue(item){
      this.push(item);
    }
  
    dequeue(){
      return this.shift();
    }
  
    peek(){
      return this[0];
    }
  
    isEmpty(){
      return this.length === 0;
    }
  }
  
  
  // The below example shows a framework of Graph class. We define two private variable i.e noOfVertices to store the number of vertices in the graph and AdjList, which stores a adjacency list of a particular vertex. We used a Map Object provided by ES6 in order to implement Adjacency list. Where key of a map holds a vertex and values holds an array of an adjacent node
  
  // create a graph class 
  class Graph { 
      // defining vertex array and 
      // adjacent list 
      constructor(noOfVertices) 
      { 
        this.noOfVertices = noOfVertices; 
        this.AdjList = new Map(); 
      }
    
      // addVertex(v) – It adds the vertex v as key to adjList and initialize its values with an array.
      addVertex(v) 
      { 
        // initialize the adjacent list with a 
        // null array 
        this.AdjList.set(v, []); 
      } 
  
      // addEdge(src, dest) – It adds an edge between the src and dest. 
      addEdge(v, w) 
      { 
        // get the list for vertex v and put the 
        // vertex w denoting edge between v and w 
        this.AdjList.get(v).push(w); 
  
        // Since graph is undirected, 
        // add an edge from w to v also 
        this.AdjList.get(w).push(v); 
      }
  
      // Prints the vertex and adjacency list 
      printGraph() 
      { 
        // get all the vertices 
        var get_keys = this.AdjList.keys(); 
      
        // iterate over the vertices 
        for (var i of get_keys)  
          { 
            // great the corresponding adjacency list 
            // for the vertex 
            var get_values = this.AdjList.get(i); 
            var conc = ""; 
      
            // iterate over the adjacency list 
            // concatenate the values into a string 
            for (var j of get_values) 
                conc += j + " "; 
      
            // print the vertex and its adjacency list 
            console.log(i + " -> " + conc); 
          } 
      } 
  
      bfs(startNode){
        var visited = [];
        visited[startNode] = true;
        var q = new Queue();
        q.enqueue(startNode);
  
        while(!q.isEmpty()){
          var element = q.dequeue();
          console.log(element);
          var neighbours = this.AdjList.get(element);
  
          for (var i in neighbours){
            var node = neighbours[i];
            if(!visited[node]){
              visited[node] = true;
              q.enqueue(node);
            }
          }
        }
      }
  
      dfsUtil(node, visited){
        visited[node] = true;
        console.log(node);
  
        let neighbours = this.AdjList.get(node);
        for( var i in neighbours){
          let neighbour = neighbours[i];
  
          if(!visited[neighbour]){
            this.dfsUtil(neighbour, visited);
          }
        }
      }
  
      dfs(startNode){
        var visited = [];
        this.dfsUtil(startNode, visited);
      }
  
      
  
  }
  
  // Using the above implemented graph class 
  var g = new Graph(6); 
  var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
    
  // adding vertices 
  for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
  }
    
  // adding edges 
  g.addEdge('A', 'B'); 
  g.addEdge('A', 'C'); 
  g.addEdge('B', 'D'); 
  g.addEdge('B', 'E'); 
  g.addEdge('D', 'E'); 
  g.addEdge('D', 'F'); 
  g.addEdge('E', 'F'); 
    
  // prints all vertex and 
  // its adjacency list 
  g.printGraph();
  
  
  // console.log("BFS"); 
  // g.bfs('1'); 
  
  
  console.log("DFS"); 
  g.dfs('A');
  
  // O(number of vertices + no of edges)
  