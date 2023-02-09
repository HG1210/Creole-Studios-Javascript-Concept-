// alert("Intern At Creole Studios");
// const d = new Date();
// document.write("<br> Display the current Dates:-", d);

// //Total 7 numbers specify(year,month, day, hour, min, sec, & millisec)
// const d1 = new Date(2023, 1, 14, 10, 30, 30, 0);
// document.write("<br>", d1);

// let d2 = new Date();
// document.write("<br>", d2.toUTCString());

// let d3 = new Date();
// document.write("<br>", d3.toISOString());

// //Date.parse will return no of milli-secs
// let d4 = Date.parse("01 Jan 1970 00:00:00 GMT");
// let d5 = Date.parse("07 Dec 2022 12:12:12 GMT");
// document.write("<br>This will not display anything:-", d4);
// document.write("<br>", d5);

// //date.now() will return in current date/time millisec
// const date1 = Date.now();
// document.write("<br>Will return in current date/time millisec:-", date1);

// //Will get the current Date
// var birthday = new Date(prompt('Enter the Date"(YYYY-MM-DD)"'));
// document.write("<br><b>The Date Mentioned:-</b>", birthday);
// document.write("<br>Will Display the Date:-", birthday.getDate());
// document.write("<br>Will Display the Day(+1):-", birthday.getDay() + 1);
// document.write("<br>Will Display the Full Year:-", birthday.getFullYear());

// //Set Methods
// const s1 = new Date();
// s1.setDate(15);
// s1.setHours(20);
// document.write("<br>", s1);

// //Math Has Some Various features
// const s12 = prompt("Enter the Numbers:-");
// const s10 = Math.round(s12); // Will round up to 5
// document.write("<br>This will round the give value:-", s10);
// const s9 = Math.ceil(s12);
// document.write("<br>This will ceil up the value:-", s9);
// const s11 = Math.floor(s12);
// document.write("<br>This will round down:-", s11);
// //Will return the integer part (18.9)=18
// const s13 = Math.trunc(s12);
// document.write("<br>This will return the trunc:-", s13);
// //Will return the Square root of the number
// const s15 = Math.sqrt(prompt("Enter the Number:-"));
// document.write("<br>Square root of the numbers:-", s15);

// //Regular Expression
// //i=Case Insensitive Matching
// //g=Global Match
// let text = "Intern At Creole Studios";
// let text1 = text.search(/creole/i);
// document.write("<br>", text1);
// let text2 = text.replace(/creole studios/i, "CS");
// document.write("<br>", text2);
// let t2 = "is this all over is";
// let result = t2.match(/is/g);
// document.write("<br>", result);

// let match12 = "Is that place here";
// let match13 = match12.match(/[h]/g);
// document.write("<br>", match13);

// let m = "123456789";
// let res = m.match(/[1-9]/g);
// document.write("<br>", res);

// //Arrow Function(without Arror function)
// let result12 = "";
// let firstname = "Harsh Gandhi";
// let lastname = "Intern";
// result12 = function () {
//   return firstname + " " + lastname;
// };
// document.write("<br>", result12());

// //With Arrow function
// let res1 = "";
// let status1 = "Intern";
// let age = "21";
// res1 = () => {
//   return status1 + " " + age;
// };
// document.write("<br>", res1());

// const materials = ["Bikes", "Cars", "Music"];
// document.write(
//   "<br>",
//   materials.map((material) => material.length)
// );

// //Promises
// // const p1=Promise.resolve(3);
// // const p2=21;
// // const p3= new Promise((resolve, reject) => {
// //     setTimeout(resolve, 1000, 'Harsh Gandhi');
// // });
// // Promise.all([p1,p2,p3]).then((values) =>{
// //     document.write("<br>",values);
// // }
// // );

// // //Promise Race
// // const prom1=new Promise((resolve, reject) => {
// //         setTimeout(resolve,800,"quicker");
// // });
// // const prom2=new Promise((resolve,reject) => {
// //     setTimeout(resolve,500,"easy");
// // });
// // Promise.race([prom1,prom2]).then((values) => {
// //     document.write(values);
// // });

// //Promise(Reject)
// function resolved(result2) {
//   document.write("Resolved");
// }
// function rejected(result2) {
//   document.write("<br>", result2);
// }
// Promise.reject(new Error("fail")).then(resolved, rejected);

// //Resolved
// const prom4 = Promise.resolve();
// Promise.then((values) => {
//   document.write(values);
// });

// //Basic promise
// const p10 = true;
// let countvalue = new Promise(function (resolve, reject) {
//   if (p10) {
//     resolve("count value present");
//   } else {
//     reject("count values not present");
//   }
// });
// document.write(countvalue);

//Cookies
// function setCookie() {
//   document.cookie = "intern= Harsh Gandhi";
// }
// function getCookie() {
//   if (document.cookie.length != 0) {
//     var array = document.cookie.split("=");
//     console.log(array)
//     console.log("Name=" + array[0] + " " + "Value=" + array[1]);
//   } else {
//     console.log("No cookie available");
//   }
// }

//Type Conversion(String, Numbers, Boolean)
document.write(
  '<br>Implicit Conversion to string "(Convert One datatype to another)"'
);
let v1 = "12" + 4;
document.write("<br>", v1);
let v2 = "Harsh" + undefined;
document.write("<br>", v2);
let v3 = "12" + null;
document.write("<br>", v3);

document.write("<br>Implicit Conversion to Numbers");
let res10;
res10 = "4" * "2";
document.write("<br>", res10);
res10 = "8" - "4";
document.write("<br>", res10);

document.write("<br>Implicit boolean Conversion");
let res11;
res11 = 5 + true;
document.write("<br>", res11);
res11 = 7 - false;
document.write("<br>", res11);

document.write("<br>Null Conversion:-");
let res9;
res9 = 12 + null;
document.write("<br>", res9);

//Boolean to Numbers
let res = Number(true);
document.write("<br>", res);
let res1 = Number(false);
document.write("<br>", res1);

//Using parseint, parsefloat and math.floor
let t1;
t1 = parseFloat("25.21");
document.write("<br>Parse_Float:-", t1);
t1 = parseInt("25.26");
document.write("<br>Parse_Int;-", t1);
t1 = Math.floor("20.14");
document.write("<br>Math_floor:-", t1);

//
let rs;
rs = Boolean("");
document.write("<br>", rs);
rs = Boolean(" ");
document.write("<br>", rs);

//try and catch
//This will print error as "a" has not been defined
const num = 1000,
  den = 10;
try {
  document.write("<br>", num / den);
  document.write(a);
} catch (error) {
  document.write("<br>Error Caught");
  document.write("<br>The error Function:", error);
} finally {
  document.write("<br>'Finally' Will execute each & everytime");
}

//
const sym = Symbol("HG");
document.write("<br>", typeof sym);

document.write("try catch & throw");
const n12 = prompt("Enter the number:-");
try {
  if (n12 > 50) {
    document.write("<br>Success");
  } else {
    throw new ReferenceError("<br>The number is small");
  }
  //if throw an error this part will not be executed
  document.write("<br>Harsh Gandhi");
} catch (Error) {
  document.write("<br>Error Caught");
  document.write("<br>The error function:-", Error);
}

//Async and Awaits
// let promise=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("Promise Resolved")},2000);
// });
// async function asyncFunc(){
//     let result3=await promise;
//     document.write(result3);
//     document.write("Harsh Gandhi");
// }
// document.write(asyncFunc());
function sq(a, b) {
  return Math.sqrt(a * a + b * b);
}
document.write(sq(5, 5));

//Promise
let count= false;
let countvalue=new Promise(function(Resolve, Reject){
   
    if (count) {
        document.write("<br>Count value is present");
    } else {
        document.write("<br>Count value is not present");
    }
});
document.write("<br>",countvalue);

//then condition
let countvalue1=new Promise(function(resolve,reject){
resolve("Promise resolved")
});
//will only execute if the promise is resolved Successfully
countvalue1
.then(function successvalue(){
    document.write("<br> can call multiple function this way");
})

//then-catch methods
let countvalue2=new Promise(function(resolve,reject){
    resolve("Promise Resolved");
});
countvalue2
.then(function successvalues1(result){
    document.write("<br>",result);
})
.catch(function errorvalues(result){
    document.write("<br>",result);
});

//finally Methods
let countval=new Promise(function (resolve,reject){
    //could be resolved and rejected
    resolve("Resolved|HG|");
});
countval
.finally(function fulfill(){
    document.write("<br>Executed");
});

