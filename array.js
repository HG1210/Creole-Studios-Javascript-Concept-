// alert("Intern At Creole Studios");

// // The array contains length, Shift, Push, Splice and Slice

// // Arrays (User Input)
// var input_arr=[];
// var num=5;
// for(var k=0;k<num;k++)
//  {
// input_arr[k]=prompt("Enter The Names");
//  }
//  document.write(input_arr);

// const a1 = ["Stanza", "Avd", "Hostel"];
// document.write("Original Statements:-", a1);
// document.write("<br>");
// a1[0] = "The Boys";
// document.write("Replaced Statements", a1);
// document.write("<br>");

// // User Input And To replace the first Position of the Array
// var a2_arr = [];
// var count = 3;
// for (var i = 0; i < count; i++) {
//   a2_arr[i] = prompt("Original Statements");
// }
// document.write("<br>");
// document.write("1) Original Statements:-", a2_arr);
// document.write("<br>");
// document.write(
//   "2) The 1st position to be replaced:-",
//   (a2_arr[0] = "The Boys")
// );
// document.write("<br>");
// document.write("3) The element to be pushed:-", a2_arr.push("The Intern"));
// document.write("<br>");
// document.write("4) The Deleted Elements:-",delete a2_arr[1]);
// document.write("<br>");
// document.write("5) Total Length:-", a2_arr.length);
// document.write("<br>");
// document.write("6) Final Statements:-", a2_arr);
// document.write("<br>");

// // Merge Two Elements
// var c1_arr= [];
// for (var j=0;j<3;j++)
// {
//     c1_arr[j]=prompt("Enter The Name");
// }
// document.write("Will Display The Names:-",c1_arr);
// document.write("<br>");

// var c4_arr=[];
// for (var n=0;n<3;n++)
// {
//     c4_arr[n]=prompt("Enter Your Age");
// }
// document.write("Will Display the Ages:-",c1_arr);
// document.write("<br>");

// var v4= c1_arr.concat(c4_arr);
// document.write("We Will Merge Two Elements:-",v4);


// // splice:- We will add new elements into the array
// // splice:-(1st parameter): The position where new element is going to be inserted
// // (2nd parameter):The element being removed from the array
// var a5_arr=[];
// for(var t=0;t<4;t++)
// {
//     a5_arr[t]=prompt("Enter the Names of Cars");
// }
// document.write("The following are the names:-",a5_arr);
// document.write("<br>");
// document.write("The reverse Elements are:-",a5_arr.reverse());
// document.write("<br>");
// a5_arr.splice(1, 1,"Lincoln");
// document.write("Splice Statements:-",a5_arr);
// document.write("<br>");
// var v5=a5_arr.slice(2);
// document.write("The slice Elements:-",v5);
// document.write("<br>");
// a5_arr.sort();
// document.write("The Sorted Elements are:-",a5_arr);
// document.write("<br>");


// var text=[];
// for(p=0;p<3;p++)
// {
//     text[p]=prompt("Enter the Values:-");
// }
// document.write("The Following Elements Are:-",text);
// document.write("<br>");
// var v6=Math.max(null, 1,2,3);
// document.write("The Max Element:-",v6);
// document.write("<br>");


// var v1=["BMW","Ford","Toyota","Benz"];
// var v3=v1.slice(2,3);
// document.write("Slice Elements:-",v3);

// const v10=parseInt(prompt("Enter the values"));
// document.write("The Value will be:-",v10.toString(2));
// document.write("<br>");

// const v11=parseFloat(prompt("Enter the Float values"));
// document.write("The Float Value will be:-",v11.toString(2));
// document.write("<br>");


// // Filter Function
// var text12=[];
// for(var w=0;w<5;w++)
// {
//     text12[w]=prompt("Enter the value:-");
// }
// document.write("The following list will be displayed:-",text12);
// document.write("<br>");
// function clg1(enroll)
// {
//     return enroll>15;
// }
// document.write("The filter elements will be displayed:-",text12.filter(clg1));
// document.write("<br>");

// //reduce- Will merge the entire function into an single value
// //There are total 4 arguments in reduce function
// const numbers = [10, 25, 10, 15, 35];
// document.write("The Values are:-",numbers);
// document.write("<br>");
// let sum1 = numbers.reduce(myFunction);
// document.write("The Following value will be:-",sum1);
// document.write("<br>");
// function myFunction(total, value, index, array) {
//   return total + value;
// }
// //reduceright it will work from right to left 

// const number1=[60,25];
// document.write("The following values are being subtracted:-",number1);
// document.write("<br>");
// let sum2=number1.reduceRight(Myfunc);
// document.write("(The values subtracted are:-)",sum2);
// function Myfunc(total,values,index,array){
//   return total-values;
// }

let arr = ["intern","harsh","creole"];
for (let i = 0; i < arr.length; i++) {
    document.write("<br>");
    document.write("The Elements are:-",arr[i]);
}






