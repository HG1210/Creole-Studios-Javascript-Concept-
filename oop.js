//Class can be declared only once otherwise it will throw an error
//class expression allow us to re-declare the same classes more than once
//=> var emp=class{}
class student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  details() {
    document.write("<br><b>Student Details </b>");
    document.write("<br>", this.id + " " + this.name);
  }
}
var s1 = new student(12, "Harsh Gandhi");
var s2 = new student(20, "Intern At Creole Studios");
s1.details();
s2.details();

document.write("<br><b>We can define Object in 3 ways</b>");
//object literals
var emp = { id: 7017, name: "@|HG|", status: "Intern" };
document.write("<br>", emp.id + " " + emp.name + " " + emp.status);

//Using New Objects
var stud = new Object();
stud.id = "20";
stud.name = "Intern";
stud.age = "21";
stud.salary = "250000";
document.write("<br>", stud.id + " " + stud.name + " " + stud.age);

//Using this Keyword
function emp12(car, age) {
  this.car = car;
  this.age = age;
}
var st1 = new emp12("BMW", 21);
document.write("<br>", st1.car + " " + st1.age);

//Using Prototypes in javascript(New Methods & New Properties)
function Intern(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
Intern.prototype.fullname = function () {
  return this.firstname + " " + this.lastname;
};
Intern.prototype.language = "English";
var Int1 = new Intern("|HG|", "|CS|");
document.write("<br>", Int1.fullname() + "" + Int1.language);

//Basic Constructor Methods
class Students {
  constructor() {
    this.company = "CS";
  }
}
var st = new Students();
document.write("<br>", st.company);

//super keyword(Used to call the parent class)
class emp1 {
  constructor() {
    this.id = 7017;
  }
}
class temp extends emp1 {
  constructor(car, price) {
    super();
    this.car = car;
    this.price = price;
  }
}
var em = new temp("Range Rover", "8500000");
document.write("<br><b>",em.id+" "+ em.car + " " + em.price,"</b>");


//Error-Solve methods
let t1 = (/harsh/ig);
let t2 = "Harsh Gandhi Harsh";
let t3 = t2.match(t1);
document.write("<br>",t3);

//Static Methods
class test{
    static disp1(){
        return "HG|@|INTERN";
    }
}
document.write("<br>",test.disp1());

//Static Methods invoked more than once
class Test  
{  
  static display1()  
  {  
    
    return "😀"  
  }  
  static display2()  
  {  
    return "🔥"
  }  
}  
document.write("<br>",Test.display1()+" "+Test.display2());  
 
//Encapsulation(binding of data in the objects)
//We have to use variable, getter and setters
//Abstraction is used for hiding the complexity and will display only the essentials details
//Polymorphism:- Perform single action in different ways
class student1{ //Encapsulation
    constructor(){
        var name;
        var status;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getstatus(){
        return this.status;
    }
    setstatus(status){
        this.status=status;
    }
}
var subject=new student1();
subject.setName("|Harsh Gandhi|");
subject.setstatus("Intern");
document.write("<br>",subject.getName()+" "+subject.getstatus());

//Polymorphism:- Perform single action in different ways
class test16
  {
 	show()
	{
  	document.writeln("<br>|HG|Creole");
	}
  }
class cs extends test16
  {
  }
var cs1=new cs();
cs1.show();

//Using Regex Methods
var v1=/^([A-Z0-9.'-]+\w+@+[A-Z0-9.]+\w+\.[A-Z]{2,3})$/gi;
document.write("<br>This will check the following email address(True/False):-",v1.test(prompt("Enter the Email Address:-")));

//Using credit card number
var c1=/^(\d.{14,15})$/g;
document.write("<br>This will check the following Credit Card Numbers(True/False):-",c1.test(prompt("Enter the CC Numbers:-")));