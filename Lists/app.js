/* Lists are one of the most common organizing tools people use in their day-to-day lives.
We have to-do lists, grocery lists, top-ten lists, bottom-ten lists, and many other types.
Our computer programs can also use lists, particularly if we only have a few items to
store in list form. Lists are especially useful if we don’t have to perform searches on the
items in the list or put them into some type of sorted order. When we need to perform
long searches or complex sorts, lists become less useful, especially with more complex
data structures.
This chapter presents the creation of a simple list class. We start with the definition of
a list abstract data type (ADT) and then demonstrate how to implement the ADT. We
wrap up the chapter with some problems that are best solved with lists.

A List ADT
In order to design an ADT for a list, we have to provide a definition of the list, including
its properties, as well as the operations performed on it and by it.
A list is an ordered sequence of data. Each data item stored in a list is called an element.
In JavaScript, the elements of a list can be of any data type. There is no predetermined
number of elements that can be stored in a list, though the practical limit will be
the amount of memory available to the program using the list.
A list with no elements is an empty list. The number of elements stored in a list is called
the length of the list. Internally, the number of elements in a list is kept in a listSize
variable. You can append an element to the end of a list, or you can insert an element
into a list after an existing element or at the beginning of a list. Elements are deleted
from a list using a remove operation. You can also clear a list so that all of its current
elements are removed.

The elements of a list are displayed using either a toString() operation, which displays
all the elements, or with a getElement() operation, which displays the value of the
current element.
Lists have properties to describe location. There is the front of a list and the end of a list.
You can move from one element of a list to the next element using the next() operation,
and you can move backward through a list using the prev() operation. You can also
move to a numbered position in a list using the moveTo(n) operation, where n specifies
the position to move to. The currPos property indicates the current position in a list.
The List ADT does not specify a storage function for a list, but for our implementation
will use an array named dataStore.
Table 3-1 shows the complete List ADT.
Table 3-1. ADT List
listSize (property)     Number of elements in list
pos (property)          Current position in list
length (property)       Returns the number of elements in list
clear (function)        Clears all elements from list
toString (function)     Returns string representation of list
getElement (function)   Returns element at current position
insert (function)       Inserts new element after existing element
append (function)       Adds new element to end of list
remove (function)       Removes element from list
front (function)        Sets current position to first element of list
end (function)          Sets current position to last element of list
prev (function)         Moves current position back one element
next (function)         Moves current position forward one element
currPos (function)      Returns the current position in list
moveTo (function)       Moves the current position to specified position

A List Class Implementation
A List class implementation can be taken straight from the List ADT we just defined.
We’ll start with a definition of a constructor function, though it is not part of the ADT: */
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // initializes an empty array to store list elements
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
}
// Append: Adding an Element to a List
function append(element) {
  this.dataStore[this.listSize++] = element;
}
// Find: Finding an Element in a List
function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}
// Remove: Removing an Element from a List
function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}
// Length: Determining the Number of Elements in a List
function length() {
  return this.listSize;
}
// toString: Retrieving a List’s Elements
function toString() {
  return this.dataStore;
}
//
var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());

// Insert: Inserting an Element into a List
function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}
// Clear: Removing All Elements from a List
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}
// Contains: Determining if a Given Value Is in a List
function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}
/* Traversing a List
            This final set of functions allows movement through a list, and the last function,
getElement(), displays the current element in a list: */
function front() {
  this.pos = 0;
}
function end() {
  this.pos = this.listSize - 1;
}
function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}
function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos;
  }
}
function currPos() {
  return this.pos;
}
function moveTo(position) {
  this.pos = position;
}
function getElement() {
  return this.dataStore[this.pos];
}
// Let’s create a new list of names to demonstrate how these functions work:
var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

// Now let’s move to the first element of the list and display it:
names.front();
console.log(names.getElement()); // displays Clayton

// Next, we move forward one element and display the element’s value:
names.next();
console.log(names.getElement()); // displays Raymond

// Now we’ll move forward twice and backward once, displaying the current element to
// demonstrate how the prev() function works:
names.next();
names.next();
names.prev();
console.log(names.getElement()); // displays Cynthia
