// The foreach method is used to give Key And Value
// let student=["Harsh","Gandhi","Intern"];
// student.forEach(myFunction)

// function myFunction(Value,Key){
//     document.write(" "+Value+" "+Key+" ");

// }
// //Function
// function intern()
// {
//     document.write("Creole Studios");

// }
// document.write("<br>");
// intern();

// //Function passing arguments
// function intern(n1)
// {
//     document.write("Creole Studio Intern" +" "+n1+ " ");
// }
// document.write("<br>");
// let n1=prompt("Enter the elements:-");
// intern(n1);

//Function add
function add(v1, v2) {
  document.write("The output will:-", v1 + v2);
}
document.write("<br>");
var v1 = parseInt(prompt("Enter the 1st Numbers:-"));
var v2 = parseInt(prompt("Enter the 2nd Numbers:-"));
add(v1, v2);
document.write("<br>");

// //function multiply
// function mul(x){
//     document.write("Will Display:-",x*x)
// }
// document.write("<br>");
// let x=prompt("Enter the Value for Multiplication:-");
// mul(x);

function multiply(a, b) {
  return a * b;
}
document.write("<br>");
var a = parseInt(prompt("Enter the 1st values:-"));
var b = parseInt(prompt("Enter the 2nd Values:-"));
var c1 = multiply(a, b) + 2;
document.write("The final Answer will be:-", c1);
document.write("<br>");

//Function Parameter
function sum1(x, y = 10) {
  return x + y;
}
let x = prompt("Enter the values:-");
document.write("Output Will be:-");
sum1(x);

//Invoking the funciton as a  methods
var myobj = {
  firstname: "Harsh",
  lastname: "Gandhi",
  Status: "Intern",
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};
document.write("This Will Print:-", myobj.fullname());

//Function using function Constructor
function myfunc(arg1, arg2) {
  this.firstname = arg1;
  this.lastname = arg2;
}
const myobject = new myfunc(prompt("Enter the Names:-"));
document.write("<br>");
document.write(myobject.firstname);

//Call Methods
// const c1 = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName: "Harsh",
//   lastName: "Gandhi"
// }
// const person2 = {
//   firstName: "Intern",
//   lastName: "Creole Studios"
// }
// document.write(Object.values(person1));

//Apply Methods
const c12 = {
  fullName: function (city, country) {
    return this.firstname + " " + this.lastname + " ," + city + " ," + country;
  }
}
const person1 = {
  firstname: "Intern",
  lastname: "Creole Studios",
};
document.write("<br>");
document.write(c12.fullName.apply(person1, ["AMD", "India"]));

//call Methods
const c11 = {
  halfname: function () {
    return this.status + " " + this.age;
  }
}
const person5 = {
  status: "Javascript Creole Studios",
  age: "25",
};
const person8 = {
  status: "Script..",
  age: "20",
};
document.write("<br>");
document.write(c11.halfname.call(person8));
document.write("<br>");

//The Difference between call & apply function
//The call methods takes the arguments separately & the apply function takes the array arguments

//Sample Code
function function1(a, b) {
  return a + b;
}
var c3 = function1(10, 5);
document.write("<br>");
document.write(c3);

//math.max using apply methods
var a = prompt("Enter the elements:-");
var b = prompt("Enter the elements:-");
var c = prompt("Enter the elements:-");
document.write("<br>");
document.write(
  "The Highest elements will be:-",
  Math.max.apply(" ", [a, b, c])
);
document.write("<br>");

//Global And Local Variable
let p4 = "Creole Harsh Gandhi";
function mylife() {
  document.write(p4);
}
mylife();

//1)Global & Local
var t = "Life At Creole Studios";
function CS() {
  let v = "Harsh Gandhi";
  document.write(t + v);
}
document.write("<br>");
CS();

//The values are being incremented/
let counter = 0;
function count() {
  counter += 1;
}
count();
count();
count();
document.write("<br>");
document.write("The values are being incremented:-", counter);

//Callbacks function is a function that is passed as an argument to another function
function mine(name, callbacks) {
  document.write("", name);
  callbacks();
}
function CallMe() {
  document.write("Intern At CS." + " ");
}
document.write("<br>");
document.write(mine("Harsh Gandhi(HG)", CallMe));

//Javascript Async Task
//settimeout

// setTimeout(myfun, 10000);
// function myfun() {
//   document.write("<br>");
//   document.write("<b>Harsh Gandhi");
//   document.write("<br>");
// }

// setTimeout(function () {
//   myfunction("Intern At Creole Studios");
// }, 10000);

// function myfunction(values) {
//   document.write(values);
//   document.write("<br>");
// }

//Promise makes use of myresolve and myreject
//We make use of "then" to check whether the following values are success or Failure
// function mydisplay(anything) {
//   document.write(anything);
// }
// let myPromise = new Promise(function (MyResolve, MyReject) {
//   let x = prompt("Enter the values related to promise:-");
//   if (x == 0) {
//     document.write("<br>");
//     MyResolve("The following values Matches:-Yess..");
//     document.write("<br>");
    
//   } else {
//     document.write("<br>");
//     MyReject("The following values Matches:-Noo..");
//     document.write("<br>");
//   }
// });
// myPromise.then(
//   function (values) {
//     mydisplay(values);
//   },
//   function (error) {
//     mydisplay(error);
//   }
// );

//async makes the function return promises
// function myprint(rand){
//     document.write(rand);
// }
// async function myfunct(){
//     document.write("<br>");
//     return "Workplace Life";
// }
// document.write("<br>");

// myfunct().then(
//     function(values) {myprint(values);},
//     function(error)  {myprint(error);}
// );

// async function myway(){
//     let promise=new Promise(function(Resolve,Reject){
//     Resolve("Javascript Intership");
//     }); 
   
//     document.write("<br>",await promise);
// }
// myway();
// document.write("<br>");

//Json Modify 
const mod={name:"Harsh",last:"Gandhi",age:'30'};
mod.name="Javascriptttt";
document.write("<br>");
document.write("This will modify the name:-",mod.name);
document.write("<br>");

//Json.parse(becomes an javascript objects)
//Converting into javascript Obj
const car='{"name":"Harsh","age":21}';
const obj=JSON.parse(car);
document.write(obj.name+" "+obj.age);
document.write("<br>");

//Accessing Obj Values in Json
const myJson='{"name":"Harsh","Status":"Intern","Age":"21"}';
const myfile=JSON.parse(myJson);
x=myfile.name;
document.write("<br>");
document.write("Accessing Obj Values:-",x);
document.write("<br>");

//Looping through object using for-in loop
var p='{"name":"Intern","company":"Creole Studios"}';
var myfl=JSON.parse(p);
var text=" ";
for(var v in myfl ){
  text+=v+" ,";
}
document.write("<br>");
document.write("Looping through object using for-in loop:-",text);

//Arrays in Object
var p2='{"name":"Harsh","age":"21","cars" :["Audi","BMW","Range Rover"]}';
var hg=JSON.parse(p2);
var k=hg.cars[0];
document.write("<br>");
document.write("Json Arrays in object:-",k);

//converting javascript obj into Json
const con1={"car":"Audi","status":"Intern"};
const cons=JSON.stringify(con1);
document.write("<br>");
document.write("Converting javascript obj into json:-",cons);

//Using for loop accessing json
const f1='{"Status":"Job Seeker","age":25,"bike":["Ducati","BMW"]}';
const f2=JSON.parse(f1);
let text2=" ";
for(var j=0;j<f2.bike.length;j++){
  text2+=f2.bike[j]+" ";
}
document.write("<br>");
document.write("Using For Loop:-",text2);

//setInterval Methods
// const myinterval= setInterval(mydisk,3000);
// function mydisk(){
//   document.write("<br>","JS & CS");
// }
// function stopexecution(){
//   clearinterval(myinterval);
// }

function add1(a,b) {
  return a+b;
}
var a=parseInt(prompt("Enter the 1st elements for addition:-"));
var b=parseInt(prompt("Enter the 2nd elements for addition:-"));
document.write("<br>");
var c4= add1(a, b);
document.write(c4);

//padStart() & padEnd()
// let text56="5";
// document.write("<br>",text56.padStart(4,"0"));