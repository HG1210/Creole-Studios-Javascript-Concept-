alert("Harsh Gandhi");

let p1 = prompt("Enter the values:-");
if (p1 < 18) {
  document.write("Life is good.");
  document.write("<br>");
} else {
  document.write("Life is boring.");
  document.write("<br>");
}

//switch case
let grade = prompt("Enter the 'A' or 'B' :-");
switch (grade) {
  case "A":
    document.write("Smarty ");
    document.write("<br>");
    break;
  case "B":
    document.write("Pretty Good");
    document.write("<br>");
    break;
  default:
    document.write("Work Hard Dream Big..");
    document.write("<br>");
    break;
}

//for loop
document.write("-------------------------------------------------");
document.write("<br>");
var text = "";
for (var i = 0; i < 5; i++) {
  text += "The numbers are:-" + i + "<br>";
}
document.write(text);
document.write("<br>");
document.write("-------------------------------------------------");
document.write("<br>");
//The difference between of & in
//'In' can work with array & object whereas 'of' works with array,maps,set
//The major difference between is that "'in' iterates over property name"
//"of iterates over property values"
document.write("*******************************");
document.write("<br>");
const var10 = ["10", "14", "15"];
for (var key in var10) {
  document.write("This will print the key elements:-", key);
  document.write("<br>");
}
for (var values of var10) {
  document.write("This will print the values:-", values);
  document.write("<br>");
}
document.write("*******************************");
document.write("<br>");

//do-while loop
document.write("-------------------------------------------------");
document.write("<br>");
let z = 0;
do {
  document.write("The number will be incremented:", z++);
  document.write("<br>");
} while (z < 5);
document.write("-------------------------------------------------");
document.write("<br>");

//While loop
document.write("*******************************");
document.write("<br>");
let n = 0;
while (n < 5) {
  document.write("The Elements are:-", n++);
  document.write("<br>");
}
document.write("*******************************");
document.write("<br>");



