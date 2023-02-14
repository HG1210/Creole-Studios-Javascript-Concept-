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
const st2 = "I am an example string";
document.write(
  "<br>The final String will be:-",
  st2.substring(0, 1) + " " +st2.substring(3, 4) +" " +st2.substring(5, 6) +" " +st2.substring(8, 9) +" " +st2.substring(11, 21)
);

//12)
const a12 = {
  name1: "The unexamined life is not worth living",
  sign: "-",
  author1: "Socrates",
};
const b3 = JSON.stringify(a12.name1 + "," + " " + a12.author1);
document.write("<br>The Output will be:-", b3);

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

//Shuffle and sort

