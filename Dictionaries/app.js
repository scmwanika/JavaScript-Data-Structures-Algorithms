/* A dictionary is a data structure that stores data as key-value pairs, such as the way a
phone book stores its data as names and phone numbers. When you look for a phone
number, you first search for the name, and when you find the name, the phone number
is found right next to the name. The key is the element you use to perform a search, and
the value is the result of the search.
The JavaScript Object class is designed to operate as a dictionary. In this chapter we’ll
use the features of the Object class to build a Dictionary class that simplifies working
with a dictionary-type object. You can perform the same functions shown in this chapter
using just JavaScript arrays and objects, but creating a Dictionary class makes doing
the work easier and more fun. For example, it’s a lot easier to use () to reference keys
rather than having to use [] notation. There is also, of course, the advantage of being
able to define functions for performing collective operations, such as displaying all
entries in a dictionary, rather than having to write loops in the main program to perform
the same operations.

The Dictionary Class
The basis for the Dictionary class is the Array class rather than the Object class. Later
in this chapter we are going to want to sort the keys of a dictionary, and JavaScript can’t
sort the properties of an Object. Keep in mind, though, that everything in JavaScript is
an object, so an array is an object. */

// Dictionary class:
function Dictionary() {
  this.add = add;
  this.datastore = new Array();
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}
function add(key, value) {
  this.datastore[key] = value;
}
function find(key) {
  return this.datastore[key];
}
function remove(key) {
  delete this.datastore[key];
}
// sort the Dictionary Class
function showAll() {
  for (var key of Object.keys(this.datastore).sort()) {
    console.log(key + " -> " + this.datastore[key]);
  }
}
function count() {
  var n = 0;
  for (var key of Object.keys(this.datastore)) {
    ++n;
  }
  return n;
}
function clear() {
  for (var key of Object.keys(this.datastore)) {
    delete this.datastore[key];
  }
}
// invoke the functions:
var pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.showAll();
//pbook.clear();
console.log("Number of entries: " + pbook.count());
pbook.remove("David");
pbook.showAll();
