// alert("Harsh Gandhi");
//Write a JavaScript program to check two given numbers and return true if one of the number
//is 50 or if their sum is 50
var v1 = 25;
var v2 = 25;
if (v1 == 50 || v2 == 50 || v1 + v2 == 50) {
  document.write("<br>True");
} else {
  document.write("<br>False");
}

//two integer one is positive and another onr is negative
// var v3 = prompt("Enter the numbers to check the positive value or negative");
// if (v3 > 0) {
//   document.write("<br>Positive");
// } else {
//   document.write("<br>negative");
// }
// document.write("<br>");

//Pattern
// var n = prompt("Enter the value for the pattern");
// for (var i = 1; i < n; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write("* ");
//   }
//   document.write("<br>");
// }

//Write a JavaScript program to compute the sum of the two given integers. If the two values
//are same, then returns triple their sum
var v4 = parseInt(prompt("Enter the value for additions:"));
var v5 = parseInt(prompt("Enter the values for addition;-"));
if (v4 == v5) {
  document.write("<br> If the sum of the two integer is same triple their value:-",3*(v4+v5));
} else {
  document.write("<br>",v4+v5);
}

//Write a JavaScript program that accept two integers and display the larger
var c1=prompt("Enter the numbers for the largest value:-");
var c2=prompt("Enter the numbers for the largest value:-");
if(c1>c2){
    document.write("<br> The largest value will be:- ",c1);
}
else{
    document.write("<br>The largest value will be:-",c2)
}

// Write a simple JavaScript program to join all elements of the following array into a string.
//Sample array : myColor = ["Red", "Green", "White", "Black"];
const myColor = ["Red", "Green", "White", "Black"];
document.write("<br>",myColor);
document.write("<br>",myColor.join("+"));

//Write a JavaScript to find the largest . Display an alert 
//box to show the result.
let numb = [-78, -85, -20, 0, -25, -14];
let largest_array = numb.filter(function (values) {
  return values >= 0;
});
document.write("<br>");
document.write("Largest Number will be print:-", largest_array);


// Write a JavaScript function that accepts a string as a parameter and find the longest word 
// within the string.
let string = "Web Development Tutorial";

let string1=string.substring(4,15);s
let string2=string.substring(0,3);
let string3=string.substring(16,24);
largeststring(string1,string2,string3);
function largeststring(string1,string2,string3){
    if(string1.length>string2.length || string1.length>string3.length){
        document.write("<br>",string1);
    }else if(string2.length>string3.length || string2.length>string1.length){
        document.write("<br>",string2);
    }else{
        document.write("<br>",string3);
    }
}

