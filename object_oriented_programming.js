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
