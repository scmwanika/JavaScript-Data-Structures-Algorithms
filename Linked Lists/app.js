/* Shortcomings of Arrays
There are several reasons arrays are not always the best data structure to use for organizing
data. In many programming languages, arrays are fixed in length, so it is hard to
add new data when the last element of the array is reached. Adding and removing data
from an array is also difficult because you have to move array elements up or down to
reflect either an addition or a deletion. However, these problems do not come up with
JavaScript arrays, since we can use the split() function without having to perform
additional array element accesses.
The main problem with using JavaScript arrays, however, is that arrays in JavaScript are
implemented as objects, causing them to be less efficient than arrays built in languages
such as C++ and Java (see Crockford, Chapter 6).
When you determine that the operations performed on an array are too slow for practical
use, you can consider using the linked list as an alternative data structure. The
linked list can be used in almost every situation where a one-dimensional array is used,
except when you need random access to the elements of a list. When random access is
required, an array is the better data structure to use.

Linked Lists Defined
A linked list is a collection of objects called nodes. Each node is linked to a successor
node in the list using an object reference. The reference to another node is called a link.
An example of a linked list is shown in Figure 6-1. */

// A complete listing of the Node class, the LList class, and our test program:
// 1- Singly Linked Lists:

// The Node class:
function Node(element) {
  this.element = element;
  this.next = null;
}
// The LList class:
function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
}
function remove(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}
function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) && currNode.next.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}
function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}
function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}
function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}
// invoke the functions:
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();

// // 2- Doubly Linked Lists:
// The Node class:
// function Node(element) {
//   this.element = element;
//   this.next = null;
//   this.previous = null;
// }
// The LList class:
// function LList() {
//   this.head = new Node("head");
//   this.find = find;
//   this.insert = insert;
//   this.display = display;
//   this.remove = remove;
//   this.findLast = findLast;
//   this.dispReverse = dispReverse;
// }
// function dispReverse() {
//   var currNode = this.head;
//   currNode = this.findLast();
//   while (!(currNode.previous == null)) {
//     console.log(currNode.element);
//     currNode = currNode.previous;
//   }
// }
// function findLast() {
//   var currNode = this.head;
//   while (!(currNode.next == null)) {
//     currNode = currNode.next;
//   }
//   return currNode;
// }
// function remove(item) {
//   var currNode = this.find(item);
//   if (!(currNode.next == null)) {
//     currNode.previous.next = currNode.next;
//     currNode.next.previous = currNode.previous;
//     currNode.next = null;
//     currNode.previous = null;
//   }
// }
// function display() {
//   var currNode = this.head;
//   while (!(currNode.next == null)) {
//     console.log(currNode.next.element);
//     currNode = currNode.next;
//   }
// }
// function find(item) {
//   var currNode = this.head;
//   while (currNode.element != item) {
//     currNode = currNode.next;
//   }
//   return currNode;
// }
// function insert(newElement, item) {
//   var newNode = new Node(newElement);
//   var current = this.find(item);
//   newNode.next = current.next;
//   newNode.previous = current;
//   current.next = newNode;
// }
// var cities = new LList();
// cities.insert("Conway", "head");
// cities.insert("Russellville", "Conway");
// cities.insert("Carlisle", "Russellville");
// cities.insert("Alma", "Carlisle");
// cities.display();
// console.log();
// cities.remove("Carlisle");
// cities.display();
// console.log();
// cities.dispReverse();

/* 3- Circularly Linked Lists:
A circularly linked list is similar to a singly linked list and has the same type of nodes.
The only difference is that a circularly linked list, when created, has its head node’s next
property point back to itself. This means that the assignment:
head.next = head
is propagated throughout the circularly linked list so that every new node has its next
property pointing to the head of the list. In other words, the last node of the list is always
pointing back to the head of the list, creating a circular list, as shown in Figure 6-7.
Figure 6-7. A circularly linked list
The reason you might want to create a circularly linked list is if you want the ability to
go backward through a list but don’t want the extra overhead of creating a doubly linked
list. You can move backward through a circularly linked list by moving forward through
the end of the list to the node you are trying to reach.
To create a circularly linked list, change the constructor function of the LList class to
read: */

function LList() {
  this.head = new Node("head");
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
}

/* This is the only change we have to make in order to make a singly linked list into a
circularly linked list. However, some of the other linked list functions will not work
correctly unmodified. For example, one function that needs to be modified is dis
play(). As written, if the display() function is executed on a circularly linked list, the
function will never stop. The condition of the while loop needs to change so that the
head element is tested for and the loop will stop when it gets to the head.
Here is how the display() function is written for a circularly linked list: */

function display() {
  var currNode = this.head;
  while (!(currNode.next == null) && !(currNode.next.element == "head")) {
    print(currNode.next.element);
    currNode = currNode.next;
  }
}

/* Seeing how to modify the display() function, you should be able to modify other
functions from a standard linked list to make them work with a circularly linked list. */
