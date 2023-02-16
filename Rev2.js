//Reverse that string
let str1 = "I am a string"
for(i=str1.length-1; i>0; i--)
{
document.write(str1[i])
}

//Verify the email Address
var v1 = /^([A-Z0-9.'-]+\w+@+[A-Z0-9.]+\w+\.[A-Z]{2,3})$/gi;
document.write(
  "<br>This will check the following email address(True/False):-",
  v1.test(prompt("Enter the Email Address:-"))
);

// Remove specific characters from a string
// What’s the most efficient way to strip specific characters from a string? Without using replace().
const st3 = "I am an example string";
  const myarr=st3.split("a");
  const myarr1=myarr.join("");
  const myarr2=myarr1.split("x");
  const myarr3=myarr2.join(" ");
  document.write("<br>The following element 'a' and 'x' is removed:-",myarr3);

//12)
const a14 = `The unexamined life is not worth living. - Socrates`;
let arr= a14.split("-");
document.write("<br>",arr);

//Capitalize the first letter of each word. Write a function to capitalize the first letter of each word in the provided string.
// var str1="i am a string";
// var str2=str1.split(",");
// for(var i=0;i<str2.length;i++){
//     str2[i]=str2[i].charAt(0).toUpperCase();
// }

// var str3=str2.join(",");
// document.write(str3);

//nth vowel or a consonant
var v2 = "Apple";
var v3 = v2.charAt(v2.length - 1);
if (v3 == "a" || v3 == "e" || v3 == "i" || v3 == "o" || v3 == "u") {
  document.write("<br>It is a vowels");
} else {
  document.write("<br>Consonant");
}

//9)
var str = prompt("Enter The Value For Matching 'cat'");
var cat = "cat";

if (str.startsWith(cat)) {
  document.write("<br>", true);
} else if (str == "cat") {
  document.write("<br>", true);
} else if (str.endsWith(cat)) {
  document.write("<br>", true);
} else {
  document.write("<br>", false);
}

//6)Sort the string alphabetically.
function sort(str)
  {
return str.split('').sort().join('');
  }
document.write("<br>The sorted elements are:-",sort("bacd"));

//11)Alternatetext Caps
function alternatetext(s){
    var a10 =s.toLowerCase().split("");
    for(var i=0;i<a10.length;i=i+2){
        a10[i]=a10[i].toUpperCase();
    }
    return a10.join("");
}
document.write("<br>",alternatetext("harsh gandhi"));

//Shuffle the string
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }
  function shuffle(s) {
    var arr = s.split('');           
    var n = arr.length;              
    for(var i=0 ; i<n-1 ; ++i) {
      var j = getRandomInt(n);       
      
      var temp = arr[i];             
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    s = arr.join('');                
    return s;                        
  }
  var s = 'Harsh';
  s = shuffle(s);
  document.write("<br>",s);
