/* A set is a collection of unique elements. The elements of a set are called members. The
two most important properties of sets are that the members of a set are unordered and
that no member can occur in a set more than once. Sets play a very important role in
computer science but are not considered a data type in many programming languages.
Sets can be useful when you want to create a data structure that consists only of unique
elements, such as a list of each unique word in a text. This chapter discusses how to
create a Set class for JavaScript.

Fundamental Set Definitions, Operations, and Properties
A set is an unordered collection of related members in which no member occurs more
than once. A set is denoted mathematically as a list of members surrounded by curly
braces, such as {0,1,2,3,4,5,6,7,8,9}. We can write a set in any order, so the previous set
can be written as {9,0,8,1,7,2,6,3,5,4} or any other combination of the members such
that all the members are written just once.

Set Definitions
Here are some definitions you need to know to work with sets:
• A set containing no members is called the empty set. The universe is the set of all
possible members.
• Two sets are considered equal if they contain exactly the same members.
• A set is considered a subset of another set if all the members of the first set are
contained in the second set.

Set Operations
The fundamental operations performed on sets are:
(i) Union
A new set is obtained by combining the members of one set with the members of
another set.
(ii) Intersection
A new set is obtained by adding all the members of one set that also exist in a second
set.
(iii) Difference
A new set is obtained by adding all the members of one set except those that also
exist in a second set.

The Set Class Implementation
The Set class implementation is built around an array for storing the data. We also create
functions for each of the set operations outlined above. Here is the definition for the
constructor function: */
function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.contains = contains;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
}
function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}
function remove(data) {
  var pos = this.dataStore.indexOf(data);
  if (pos > -1) {
    this.dataStore.splice(pos, 1);
    return true;
  } else {
    return false;
  }
}
function size() {
  return this.dataStore.length;
}
function union(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    tempSet.add(this.dataStore[i]);
  }
  for (var i = 0; i < set.dataStore.length; ++i) {
    if (!tempSet.contains(set.dataStore[i])) {
      tempSet.dataStore.push(set.dataStore[i]);
    }
  }
  return tempSet;
}
function intersect(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}
function subset(set) {
  if (this.size() > set.size()) {
    return false;
  } else {
    for (var member in this.dataStore) {
      if (!set.contains(member)) {
        return false;
      }
    }
  }
  return true;
}
function difference(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}
function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else {
    return false;
  }
}
function show() {
  return this.dataStore;
}
//
// Using the Set class
var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
  console.log("Mike added");
} else {
  console.log("Can't add Mike, must already be in set");
}
console.log(names.show());
var removed = "Mike";
if (names.remove(removed)) {
  console.log(removed + " removed.");
} else {
  console.log(removed + " not removed.");
}
names.add("Clayton");
console.log(names.show());
removed = "Alisa";
if (names.remove("Mike")) {
  console.log(removed + " removed.");
} else {
  console.log(removed + " not removed.");
}
/* The output from Example 9-1 is:
Can't add Mike, must already be in set
David,Jennifer,Cynthia,Mike,Raymond
Mike removed.
David,Jennifer,Cynthia,Raymond,Clayton
Alisa not removed. */
//
// Computing the union of two sets:
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
var it = new Set();
it = cis.union(dmp);
console.log(it.show());
//displays Mike,Clayton,Jennifer,Raymond,Cynthia,Jonathan
//
// Computing the intersection of two sets:
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Bryan");
var inter = cis.intersect(dmp);
console.log(inter.show()); // displays Raymond
//
// Computing the subset of two sets:
var it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
var dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");
if (dmp.subset(it)) {
  console.log("DMP is a subset of IT.");
} else {
  console.log("DMP is not a subset of IT.");
}
//
// Computing the difference of two sets:
var cis = new Set();
var it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
var diff = new Set();
diff = cis.difference(it);
console.log(
  "[" + cis.show() + "] difference [" + it.show() + "] -> [" + diff.show() + "]"
);
