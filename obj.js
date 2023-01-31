alert("Intern At Creole Studios");

// //Javascript is all about objects
// //There are total 3 ways to create obj
// //1) Literals
document.write("<br>");
const person = {
  firstname: "Harsh",
  lastname: " Gandhi",
  age: " 21",
  Intern: "Creole Studios",
  fullName: function () {
    //Using this keyword
    return this.firstname + this.lastname + this.age;
  },
};
document.write(person.fullName());
document.write("<br>");
document.write(
  person.firstname + person.lastname + " is working at " + person.Intern + ".."
);
document.write("<br>");

// //By creating new obj
const joinee = new Object();
joinee.id = " 7017";
joinee.name = " Harsh Gandhi";
joinee.Intern = " CS";
document.write(
  "The " + joinee.id + joinee.name + " is working at " + joinee.Intern + ".."
);
document.write("<br>");

let x = this;
document.write(x);
document.write("<br>");

// //Adding new elements in obj
const cars = {
  name: " Harsh Gandhi",
  own1: " BMW",
  own2: " Ford",
};
document.write(cars.name + cars.own1);
document.write("<br>");
cars.area = " Dubai";
document.write(
  "The updated list will also display the area:-",
  cars.own1 + cars.area
);
document.write("<br>");
delete cars.own1;
document.write(
  "The deleted list will also display the area:-",
  cars.own1 + cars.area
);

const ob12 = {
  firstname: " Harsh",
  lastname: " Gandhi",
  age: " 21",
  Intern: " Creole Studios",
  cars: "Range Rover",
  fullName: function () {
    return (this.firstname + this.lastname).toUpperCase();
  },
};
document.write(
  "My name is: " + ob12.fullName() + "& working at" + ob12.Intern.toUpperCase()
);
document.write("<br>");

// //Javascript obj converted into array
const bike = {
  owner: " Creole Studios",

  name1: "Ducati",
  name2: "BMW",
  name3: "Ninja",
  age: 25,
};
document.write("List of bikes:-", bike.owner + bike.name1);
document.write("<br>");
const b1 = Object.values(bike);
document.write("Javascript object will be into array values:-", b1);
document.write("<br>");
//Javascript Object converted into string
const b3 = JSON.stringify(bike);
document.write("Javascript Obj will be converted into String:-", b3);
document.write("<br>");

// //Using Gettter and Setter
const hg = {
  firstname: "Harsh GAndhi",

  get getname() {
    return this.firstname;
  },
};
document.write("Using Getter:-", hg.getname);
document.write("<br>");
const ch = {
  firstname: "Harsh Gandhi",
  set modifyname(newname) {
    this.firstname = newname;
  },
};
document.write("-------------------------------------------");
document.write("<br>");
document.write("Using Setter:-", ch.firstname);
document.write("<br>");
ch.modifyname = "Intern";
document.write("The modified name:-", ch.firstname);
document.write("<br>");
document.write("-------------------------------------------<br>");

//Using constructor
function Person1(first, last, age, car) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.car = car;
  this.DOB = " (12-10-2001)";
  this.changename = function (name) {
    this.lastname = name;
  };
}
var my1 = new Person1(prompt("Enter The First Name:-"));
document.write("My name is: ", my1.firstname + my1.DOB);
document.write("<br>");
const m1 = new Person1("Creole", "Studios", "9", "BMW");
document.write(
  "The Original Statements:-",
  m1.firstname + " " + m1.lastname + " " + m1.age
);
document.write("<br>");
m1.lastname = "CS";
document.write(
  "The Updated Statements:-",
  m1.firstname + " " + m1.lastname + " " + m1.age
);
document.write("<br>");

//Prototype(Allow You To Add new Properties and New Methods)
function Creole(Id, name, age, status) {
  this.Id = Id;
  this.name = name;
  this.age = age;
  this.status = status;
}
Creole.prototype.Car = "Audi";
var m12 = new Creole("7017", "Harsh", "21", "Intern");
document.write(
  "We have add new properties with the help of prototype:-",
  m12.Id + " " + m12.name + " " + m12.status + " " + m12.Car
);
document.write("<br>");

//Sets Methods (Adding Methods)
var set1=new Set();
var a1=[];
for(var k=0;k<3;k++){
a1[k]=set1.add(prompt("Enter the elements:-"));
}
for(var item of set1)
document.write(" "+item+" ");
document.write("<br>");

// clear Methods
const set2=new Set();
set2.add("Web Development");
set2.add("12");
document.write("The Following will print the total size:-",set2.size);
document.write("<br>");
set2.clear();
document.write("The Following will display '0' as we are using clear methods:-",set2.size);
document.write("<br>");

// const set3= new Set();
var j1=[];
for(var k=0;k<3;k++){
    j1[k]=set3.add(prompt("Enter the values:-"));
}
for(item1 of set3)
document.write(item1.size);
set3.clear();
document.write(item1.size);

//Entries Methods will return new iterator()
const set4= new Set();
const a2=set4.add(prompt("Enter the names"));
const iterator=set4.entries();
for (const pro of iterator)
document.write("Entries Methods:-"," "+pro+" ");
document.write("<br>");

//has methods will return true or false for the particular statements
const set5=new Set([1,2,3,4,5]);
document.write(set5.has(1));
document.write("<br>");
document.write(set5.has(3));
document.write("<br>");
document.write(set5.has(0));
document.write("<br>");
