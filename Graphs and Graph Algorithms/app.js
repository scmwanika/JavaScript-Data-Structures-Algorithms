// The Graph class:
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
}
function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}
function showGraph() {
  for (var i = 0; i < this.vertices; ++i) {
    console.log(i + " -> ");
    for (var j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] != undefined) console.log(this.adj[i][j] + " ");
    }
    console.log();
  }
}

// Here is a test program that demonstrates how to use the Graph class:
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();

/* The output from this program is:
0 -> 1 2
1 -> 0 3
2 -> 0 4
3 -> 1
4 -> 2
The output shows that vertex 0 has edges to vertices 1 and 2; vertex 1 has edges to vertices
0 and 3; vertex 2 has edges to vertices 0 and 4; vertex 3 has an edge to vertex 1; and vertex
4 has an edge to vertex 2. Of course, there is some redundancy in this display, as an edge
between 0 and 1, for example, is the same as an edge between 1 and 0. For just display
purposes this is fine, but we will need to modify this output when we start exploring
the paths found in a graph.
Searching a Graph
Determining which vertices can be reached from a specified vertex is a common activity
performed on graphs. We might want to know which roads lead from one town to other
towns on the map, or which flights can take us from one airport to other airports.
These operations are performed on a graph using a search algorithm. There are two
fundamental searches we can perform on a graph: the depth-first search and the breadthfirst
search. In this section we examine both algorithms. */

/* Depth-First Search
Depth-first search involves following a path from the beginning vertex until it reaches
the last vertex, then backtracking and following the next path until it reaches the last
vertex, and so on until there are no paths left. Here we are not “searching” for a particular
item, but instead searching to see what paths we can follow in a graph.
The algorithm for performing a depth-first search is relatively simple—visit a vertex
that has not already been visited, mark it as having been visited, then recursively visit
the other unvisited vertices that are in the original vertex’s adjacency list.
To make this algorithm work, we will need to add an array to our Graph class that stores
visited vertices and initialize it to all false values. Here is a code fragment from the
Graph class showing this new array and its initialization:
A program that demonstrates the depthFirst() function, along with the complete
Graph class definition, is shown below: */
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.bfs = bfs; // added this for bfs
  this.marked = [];
  this.edgeTo = []; // added this for bfs
  this.pathTo = pathTo; // added this for path
  this.hasPathTo = hasPathTo; // added this for path

  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
}
function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}
function showGraph() {
  for (var i = 0; i < this.vertices; ++i) {
    console.log(i + " -> ");
    for (var j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] != undefined) console.log(this.adj[i][j] + " ");
    }
    console.log();
  }
}
function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
    console.log("Visited vertex: " + v);
  }
  for (var w in this.adj[v]) {
    if (!this.marked[w]) {
      this.dfs(w);
    }
  }
}
// program to test dfs() function:
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0);
/* The output from this program is:
0 -> 1 2
1 -> 0 3
2 -> 0 4
3 -> 1
4 -> 2
Visited vertex: 0
Visited vertex: 1
Visited vertex: 2 */

/* Breadth-First Search
A breadth-first search starts at a first vertex and tries to visit vertices as close to the first
vertex as possible. In essence, this search moves through a graph layer by layer, first
examining layers closer to the first vertex and then moving down to the layers farthest
away from the starting vertex. Figure 11-5 demonstrates how breadth-first search works.
The algorithm for breadth-first search uses a queue abstraction instead of an array
abstraction for storing visited vertices. The algorithm works as follows:
1. Find an unvisited vertex that is adjacent to the current vertex, add it to the list of
visited vertices, and add it to the queue.
2. Take the next vertex, v, from the graph and add it to the list of visited vertices.
3. Add all unmarked vertices that are are adjacent to v and add them to the queue.
Here is the definition for the breadth-first search function: */
function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s); // add to back of queue
  while (queue.length > 0) {
    var v = queue.shift(); // remove from front of queue
    if (v != undefined) {
      console.log("Visited vertex: " + v);
    }
    for (var w in this.adj[v]) {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}
// program to test bfs() function:
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0);
/* The output from this program is:
0 -> 1 2
1 -> 0 3
2 -> 0 4
3 -> 1
4 -> 2
Visited vertex: 0
Visited vertex: 1
Visited vertex: 2 */

/* Finding the Shortest Path
One of the most common operations performed on graphs is finding the shortest path
from one vertex to another. Consider the following example: for vacation, you are going
to travel to 10 major-league cities to watch baseball games over a two-week period. You
want to minimize the number of miles you have to drive to visit all 10 cities using a
shortest-path algorithm. Another shortest-path problem involves creating a network of
computers, where the cost could be the time to transmit data between two computers
or the cost of establishing and maintaining the connection. A shortest-path algorithm
can determine the most effective way to build the network.

Breadth-First Search Leads to Shortest Paths
When we perform a breadth-first search, we are automatically finding the shortest paths
from one vertex to another connected vertex. For example, when we want to find the
shortest path from vertex A to vertex D, we first look for any one-edge paths from A to
D, then two-edge paths from A to D, and so on. This is exactly the way breadth-first
search works, so we can easily modify the breadth-first search algorithm to find shortest
paths.

Determining Paths
To find the shortest path, we need to modify the breadth-first search algorithm so that
it records the paths that lead from one vertex to another vertex. This requires a few
modifications to the Graph class.
First, we need an array that keeps track of edges from one vertex to the next. We’ll name
this array edgeTo. As we work through the breadth-first search function, every time we
come across a vertex that is not marked, besides marking it, we will add an edge to that
vertex from the vertex that we are exploring in the adjacency list.

Now we need a function that can show us the paths that connect the different vertices
of a graph. This function, pathTo(), creates a stack that stores all the vertices that have
edges in common with a specified vertex. Here is the code for the function, along with
a simple helper function: */
function pathTo(v) {
  var source = 0;
  if (!this.hasPathTo(v)) {
    return undefined;
  }
  var path = [];
  for (var i = v; i != source; i = this.edgeTo[i]) {
    path.push(i);
  }
  path.push(s);
  return path;
}
function hasPathTo(v) {
  return this.marked[v];
}

/* With this function, all we have to do is write some client code to show the shortest path
  from the source to a particular vertex. This program creates a graph and shows the 
  shortest path for a specified vertex. */
// Finding the shortest path for a vertex
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
var vertex = 4;
var paths = g.pathTo(vertex);
while (paths.length > 0) {
  if (paths.length > 1) {
    console.log(paths.pop() + "-");
  } else {
    console.log(paths.pop());
  }
}
// The output from this program is: 0-2-4 which is the shortest path from the source vertex 0 to vertex 4.

/* Topological Sorting
Topological sorting puts the vertices of a directed graph into an order such that all the
directed edges point from a vertex earlier in the order to a vertex later in the order. For
example, Figure 11-6 shows a directed-graph model of a typical computer science curriculum. */