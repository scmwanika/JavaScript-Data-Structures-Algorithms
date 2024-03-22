/* Object
   Create Person */
const personDetails = function (person) {
  return person;
};
// invoke the function
var person = { name: "Mwanika", gender: "M", age: 40 };
console.log(personDetails(person));

/* Object Oriented Programming
Abstraction
Encapsulation
Inheritance
Polymorphism */
class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  greet() {
    return `Hello, ${this.fname} ${this.lname}`;
  }
}
// invoke the function
var person = new Person("Stephen", "Mwanika");
console.log(person.greet());

// Class definition using "Prototype"
const createPerson = function (fname, lname) {
  (this.fname = fname),
    (this.lname = lname),
    (createPerson.prototype.greet = function () {
      return `Hello, ${this.fname} ${this.lname}`;
    });
};
// invoke the function
var person1 = new createPerson("Stephen", "Mwanika");
var person2 = new createPerson("Stephen", "Mwanika");
console.log(person1.greet());
console.log(person2.greet());
console.log(person2.fname);
console.log(person2.fname, person2.lname);
console.log(`${person2.fname} ${person2.lname}`);

// Class definition using "Object Factory"
const createPerson1 = function (fname, lname) {
  return {
    fname: fname,
    lname: lname,
    greet() {
      return `Hello, ${this.fname} ${this.lname}`;
    },
  };
};
// invoke the function
var person1 = createPerson1("Stephen", "Mwanika");
var person2 = createPerson1("Stephen", "Mwanika");
console.log(person1.greet());
console.log(person2.greet());

// Abstraction
const persons = function (fname, lname) {
  let hideDetails = function () {
    return `fname: ${fname} lname: ${lname}`;
  };
  this.accessDetails = function () {
    return `fname: ${fname} lname: ${lname}`;
  };
};
// invoke the function
var person = new persons("Stephen", "Crispin");
console.log(person.hideDetails); // undefined
console.log(person.accessDetails); // [Function (anonymous)]

// Shopping Cart -> method 1
class ShoppingCart1 {
  // Encapsulate class methods
  setAttr(total, items) {
    this.total = total;
    this.items = items;
  }
  add_item(item_name, quantity, price) {
    this.total += quantity * price;
    this.items += quantity;
    console.log(this.total);
    console.log(this.items);
  }
  remove_item(item_name, quantity, price) {
    this.total -= quantity * price;
    this.items -= quantity;
    console.log(this.total);
    console.log(this.items);
  }
  checkout(cash_paid) {
    const balance = cash_paid - this.total;
    if (cash_paid < this.total) console.log("Cash paid not enough");
    else console.log(balance);
  }
}
// class Shop1 inherits class ShoppingCart1
class Shop1 extends ShoppingCart1 {
  setAttr(quantity) {
    this.quantity = quantity;
  }
  // Polymorphism
  // Override the method "remove_item"
  remove_item() {
    const quantity = this.quantity;
    this.quantity -= 1;
    console.log(this.quantity);
  }
}
// invoke the function
var item1 = new ShoppingCart1();
item1.setAttr(0, 0);
item1.add_item("rice", 5, 2500);
item1.remove_item("rice", 3, 2500);
item1.checkout(4000);

var item2 = new Shop1();
item2.setAttr(100);
item2.remove_item();

// Shopping Cart -> method 2
class ShoppingCart2 {
  // Encapsulate class methods
  constructor(total, items) {
    this.total = total;
    this.items = items;
  }
  add_item(item_name, quantity, price) {
    this.total += quantity * price;
    this.items += quantity;
    console.log(this.total);
    console.log(this.items);
  }
  remove_item(item_name, quantity, price) {
    this.total -= quantity * price;
    this.items -= quantity;
    console.log(this.total);
    console.log(this.items);
  }
  checkout(cash_paid) {
    const balance = cash_paid - this.total;
    if (cash_paid < this.total) console.log("Cash paid not enough");
    else console.log(balance);
  }
}
// class Shop2 inherits class ShoppingCart2
class Shop2 extends ShoppingCart2 {
  constructor(quantity) {
    super();
    this.quantity = quantity;
  }
  // Polymorphism
  // Override the method "remove_item"
  remove_item() {
    const quantity = this.quantity;
    this.quantity -= 1;
    console.log(this.quantity);
  }
}
// invoke the function
var item3 = new ShoppingCart2(0, 0);
item3.add_item("rice", 5, 2500);
item3.remove_item("rice", 3, 2500);
item3.checkout(4000);

var item4 = new Shop2(100);
item2.remove_item();

/* ------------------------------------------------------------------------------------ */

/* OBJECT STORE -> Dictionary Sorting Objects */
var employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

// SORT THE OBJECT BY SALARY (ASCENDING SORT)
var sortEmployeesBySalary = function (employees) {
  employees.sort((obj1, obj2) => {
    if (obj1.salary > obj2.salary) return 1;
    return -1;
  });
  return employees;
};
// invoke the function
console.table(sortEmployeesBySalary(employees));
/*
┌─────────┬─────────┬────────┬─────────────────────┐
│ (index) │  name   │ salary │      hireDate       │
├─────────┼─────────┼────────┼─────────────────────┤
│    0    │ 'David' │ 75000  │  'August 15, 2009'  │
│    1    │ 'David' │ 75000  │  'August 15, 2009'  │
│    2    │  'Ana'  │ 80000  │ 'December 12, 2011' │
│    3    │  'Ana'  │ 80000  │ 'December 12, 2011' │
│    4    │ 'John'  │ 90000  │   'July 1, 2010'    │
│    5    │ 'John'  │ 90000  │   'July 1, 2010'    │
└─────────┴─────────┴────────┴─────────────────────┘
*/

// // EXTRACT THE VALUES OF A GIVEN PROPERTY FROM AN ARRAY OF OBJECTS
// // extract (names, salaries) from employees array
// var extractValues = (arr, prop1, prop2) => {
//   let output = [];

//   arr.forEach((item) => {
//     output.push(item[prop1], item[prop2]);
//   });

//   return output;
// };
// // invoke the function
// //console.log(extractValues(employees, "name", "salary"));
// /*
// [
//   'John', 90000, 'David',
//   75000,  'Ana', 80000,
//   'John', 90000, 'David',
//   75000,  'Ana', 80000
// ] */

// Keys, Values, Entries:
let myKeys = Object.keys(employees);
console.log(myKeys); // ['0', '1', '2']

let myValues = Object.values(employees);
console.log(myValues);
/*
[
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' }
]
*/

let myEntries = Object.entries(employees);
console.log(myEntries);
/*
[
  [
    '0',
    { name: 'David', salary: 75000, hireDate: 'August 15, 2009' }
  ],
  [
    '1',
    { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' }
  ],
  [ '2', { name: 'John', salary: 90000, hireDate: 'July 1, 2010' } ]
]
*/

// same as
let output = Object.keys(employees).map((key) => [String(key), employees[key]]);
console.log(output);
/*
[
  [
    '0',
    { name: 'David', salary: 75000, hireDate: 'August 15, 2009' }
  ],
  [
    '1',
    { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' }
  ],
  [ '2', { name: 'John', salary: 90000, hireDate: 'July 1, 2010' } ]
]
*/

// Object.entries + Destructuring:
let myObjArr = [];

myEntries.forEach(([key, val]) => {
  myObjArr.push(key);
  myObjArr.push(val);
});
console.log(myObjArr);
/*
[
  '0',
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  '1',
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
  '2',
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' }
]
*/

// Converting an array to an object:
let newObj = Object.fromEntries(myEntries);
console.log(newObj);
/*
{
  '0': { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  '1': { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
  '2': { name: 'John', salary: 90000, hireDate: 'July 1, 2010' }
}
*/

// EXTRACT THE VALUES OF A GIVEN PROPERTY FROM AN ARRAY OF OBJECTS
// extract (names, salaries) from employees array
const extractValues = (arr, prop1, prop2) => {
  let output = [];

  arr.forEach((item) => {
    output.push(item[prop1], item[prop2]);
  });

  return output;
};
// invoke the function
console.log(extractValues(employees, "name", "salary"));
/*
[
  'John', 90000, 'David',
  75000,  'Ana', 80000,
  'John', 90000, 'David',
  75000,  'Ana', 80000
] */

// Lists as Objects -> push()
// Return an array that holds the indexes of the enumerable properties of an obj.
const propIndexes = (employees) => {
  if (typeof employees !== "object") throw TypeError(); // Object argument required
  var [props, indexes] = [[], []]; // Return these arrays
  for (var prop of employees) {
    props.push(prop); // add it to the array.
  }

  for (var prop in props) {
    indexes.push(prop); // add it to the array.
  }
  return { indexes, props }; // Return indexes.
};
// invoke the function
console.log(propIndexes(employees));
/*
{
  indexes: [ '0', '1', '2' ],
  props: [
    { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
    { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
    { name: 'John', salary: 90000, hireDate: 'July 1, 2010' }
  ]
}
*/

// Invert Key Value of an Object:
const flipKeyValue = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
console.log(flipKeyValue({ x: 1, y: 2 })); // { '1': 'x', '2': 'y' }

// Object transformations:
let obj = { a: 1, b: 2, c: 3 };
obj = Object.fromEntries(
  Object.entries(obj).map(([key, val]) => [key, val * val])
);
console.log(obj); // { a: 1, b: 4, c: 9 }

// OBJECT UTILITY FUNCTIONS THAT ENUMERATE PROPERTIES

o = { name: "Stephen", age: "40", dob: "1982", career: "software engineering" };
p = { name: "Jerome", age: "15", dob: "2007", school: "St. Maria Goreti S.S" };

/* Copy the enumerable properties of p to o, and return o.
   If o and p have a property by the same name, o's property is overwritten. */
function extend(o, p) {
  for (prop in p) {
    // For all props in p.
    o[prop] = p[prop]; // Add the property to o.
  }
  return o;
}
// invoke the function
console.log(extend(o, p));

/* Copy the enumerable properties of p to o, and return o.
   If o and p have a property by the same name, o's property is left alone. */
function merge(o, p) {
  for (prop in p) {
    // For all props in p.
    if (o.hasOwnProperty[prop]) continue; // Except those already in o.
    o[prop] = p[prop]; // Add the property to o.
  }
  return o;
}
// invoke the function
console.log(merge(o, p));

/* Remove properties from o if there is not a property with the same name in p.
   Return o. */
function restrict(o, p) {
  for (prop in o) {
    // For all props in o
    if (!(prop in p)) delete o[prop]; // Delete if not in p
  }
  return o;
}
// invoke the function
console.log(restrict(o, p));

/* For each property of p, delete the property with the same name from o.
   Return o. */
function subtract(o, p) {
  for (prop in p) {
    // For all props in p
    delete o[prop]; // Delete from o (deleting a
    // nonexistent prop is harmless)
  }
  return o;
}
// invoke the function
console.log(subtract(o, p));

/* Return a new object that holds the properties of both o and p.
   If o and p have properties by the same name, the values from o are used. */
function union(o, p) {
  return extend(extend({}, o), p);
}
// invoke the function
console.log(union(o, p));

/* Return a new object that holds only the properties of o that also appear
   in p. This is something like the intersection of o and p, but the values of
   the properties in p are discarded */
function intersection(o, p) {
  return restrict(extend({}, o), p);
}
// invoke the function
console.log(intersection(o, p));