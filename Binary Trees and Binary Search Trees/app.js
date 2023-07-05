// The BST and Node classes
// The Node class:
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}
function show() {
  return this.data;
}
// The BST class:
function BST() {
  this.root = null;
  this.insert = insert;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  //this.inOrder = inOrder;
}
function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

/* Traversing a Binary Search Tree
We now have the beginnings of the BST class, but all we can do is insert nodes into the
tree. We need to be able to traverse the BST so that we can display the data in different
orders, such as numeric or alphabetic order.
There are three traversal functions used with BSTs: inorder, preorder, and postorder. An
inorder traversal visits all of the nodes of a BST in ascending order of the node key
values. A preorder traversal visits the root node first, followed by the nodes in the subtrees
under the left child of the root node, followed by the nodes in the subtrees under
the right child of the root node. A postorder traversal visits all of the child nodes of the
left subtree up to the root node, and then visits all of the child nodes of the right subtree
up to the root node.
Although it’s easy to understand why we would want to perform an inorder traversal,
it is less obvious why we need preorder and postorder traversals. We’ll implement all
three traversal functions now and explain their uses in a later section.

The inorder traversal is best written using recursion. Since the function visits each node
in ascending order, the function must visit both the left node and the right node of each
subtree, following the subtrees under the left child of the root node before following the
subtrees under the right child of the root. If you are unsure about using recursion,
Chapter 1 discusses how to write a recursive function.
Here is the code for the inorder traversal function: */
function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

// The definition of the preorder traversal function is:
function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}
/* You’ll notice that the only difference between the inOrder() and preOrder() functions
is how the three lines of code inside the if statement are ordered. The call to the show()
function is sandwiched between the two recursive calls in the inOrder() function, and
the call to show() is before the two recursive calls in the preOrder() function. */

// Here is the implementation of the postOrder() function:
function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
}

// invoke the function:
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("inOrder traversal: ");
inOrder(nums.root);
console.log("preOrder traversal: ");
preOrder(nums.root);
console.log("postOrder traversal: ");
postOrder(nums.root);

/* We will demonstrate some practical programming examples using BSTs that make use
of these traversal functions later in the chapter.

BST Searches
There are three types of searches typically performed with a BST:
1. Searching for a specific value
2. Searching for the minimum value
3. Searching for the maximum value
We explore these three searches in the following sections.

Searching for the Minimum and Maximum Value
Searches in a BST for the minimum and maximum values stored are relatively simple
procedures. Since lower values are always stored in left child nodes, to find the minimum
value in a BST, you only have to traverse the left edge of the BST until you get to the last
node.
Here is the definition of a function, getMin(), that finds the minimum value of a BST: */
function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

/* The function travels down the left link of each node in the BST until it reaches the left
end of the BST, which is defined as:
current.left = null;
When this point is reached, the data stored in the current node must be the minimum
value.
To find the maximum value stored in a BST, the function must simply traverse the right
links of nodes until the function reaches the right end of the BST. The value stored in
this node must be the maximum value.
The definition for the getMax() function is below: */
function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

// Testing getMin() and getMax()
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
var min = nums.getMin();
console.log("The minimum value of the BST is: " + min);
console.log("\n");
var max = nums.getMax();
console.log("The maximum value of the BST is: " + max);

/* Searching for a Specific Value
Searching for a specific value in a BST requires that a comparison be made between the
data stored in the current node and the value being searched for. The comparison will
determine if the search travels to the left child node, or to the right child node if the
current node doesn’t store the searched-for value.
We can implement searching in a BST with the find() function, which is defined here: */
function find(data) {
  var current = this.root;
  while (current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current == null) {
      return null;
    }
  }
  return current;
}
/* This function returns the current node if the value is found in the BST and returns null
if the value is not found.
A program to test the find() function. */
// Using find() to search for a value
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);
console.log("\n");
console.log("Enter a value to search for: ");
var value = parseInt(23);
var found = nums.find(value);
if (found != null) {
  console.log("Found " + value + " in the BST.");
} else {
  console.log(value + " was not found in the BST.");
}

/* Removing Nodes from a BST
The most complex operation on a BST is removing a node. The complexity of node
removal depends on which node you want to delete. If you want to remove a node with
no children, the removal is fairly simple. If the node has just one child node, either left
or right, the removal is a little more complex to accomplish. The removal of a node with
two children is the most complex removal operation to perform.
To aid in managing the complexity of removal, we remove nodes from a BST recursively.
The two functions we will define are remove() and removeNode().
The first step to take when removing a node from a BST is to check to see if the current
node holds the data we are trying to remove. If so, remove that node. If not, then we
compare the data in the current node to the data we are trying to remove. If the data we
want to remove is less than the data in the current node, move to the left child of the
current node and compare data. If the data we want to remove is greater than the data
in the current node, move to the right child of the current node and compare data.
The first case to consider is when the node to be removed is a leaf (a node with no
children). Then all we have to do is set the link that is pointing to the node of the parent
node to null.
When the node we want to remove has one child, then the the link that is pointing to
the node to be removed has to be adjusted to point to the removed node’s child node.
Finally, when the node we want to remove has two children, the correct solution is to
either find the largest value in the subtree to the left of the removed node, or to find the
smallest value in the subtree to the right of the removed node. We will choose to go to
the right.
We need a function that finds the smallest value of a subtree, which we will then use to
create a temporary node containing that smallest value. We copy that value into the
position of the node we are replacing, and we delete the temporary node to complete
the operation. Figure 10-7 illustrates this scenario. 

The node removal process consists of two functions. The remove() function simply
receives the value to be removed and calls the second function, removeNode(), which
does all the work. The definitions of the two functions are shown here: */
function remove(data) {
  root = removeNode(this.root, data);
}
function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node.data) {
    // node has no children
    if (node.left == null && node.right == null) {
      return null;
    }
    // node has no left child
    if (node.left == null) {
      return node.right;
    }
    // node has no right child
    if (node.right == null) {
      return node.left;
    }
    // node has two children
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

/* Counting Occurrences
One use of a BST is to keep track of the occurrences of data in a data set. For example,
we can use a BST to record the distribution of grades on an exam. Given a set of exam
grades, we can write a program that checks to see if the grade is in the BST, adding the
grade to the BST if it is not found, and incrementing the number of occurrrences of it
if the grade is found in the BST.
To solve this problem, we need to modify the Node object to include a field for keeping
track of the number of occurrences of a grade in the BST, and we need a function for
updating a node so that if we find a grade in the BST, we can increment the occurrences
field.
Let’s start by modifying our definition of the Node object to include a field for keeping
track of grade occurrences: */
function Node(data, left, right) {
  this.data = data;
  this.count = 1;
  this.left = left;
  this.right = right;
  this.show = show;
}
