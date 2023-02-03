
class Car{
    constructor(name,model){
    this.name=name;
    this.model=model;
    }
}
const myCar= new Car("Audi","R8");
document.write(myCar.name+" "+myCar.model);
document.write("<br>");

class Polygon{
    constructor(){
        this.name="polygon";
    }
}
const poly=new Polygon();
document.write("The ans will be:-",poly.name);

class Person{
    constructor(name){
        this.pname=name;
    }
    present(){
        return "My name is:-"+this.pname;
    }
}
class Model extends Person{
    constructor(name,mod){
    super(name);
    this.model=mod;
    }
    show(){
        return this.present()+" "+this.model;
    }
}
let showtime=new Model("Creole Studios","Ford");
document.write("<br>",showtime.show());

class Intern{
    constructor(status){
        this.status=status;
    }
    company(){
        return "Current Status:-"+this.status;
    }
}
class DOB extends Intern{
    constructor(status,age){
        super(status);
        this.year=age;
    }
    present(){
        return this.company()+" "+this.year;
    }
}
let represent=new DOB("Joinee",'21');
document.write("<br>",represent.present());

//Getters & Setters
const s10={
    firstname:"Intern At Creole Studios",

    get getname() {
        return this.firstname;
    }   
};
document.write("<br>");
document.write("<b>Print Directly</b>:-",s10.firstname);
document.write("<br>");
document.write("<b>Print Using Get Methods</b>:-",s10.getname);

//Using Set Methods
var r1={
    firstname:"Intern At Creole",

    set changename1(newName){
        this.firstname=newName;
    }
}
document.write("<br>");
document.write("Default Name:-",r1.firstname);
r1.changename1="Harsh Gandhi";
document.write("<br>");
document.write("Updated Name:-",r1.firstname);
document.write("<br>");

//Using Static Methods
class bike{
    constructor(name){
        this.name=name;
    }
    static bikes(x){
        return "Your Bike:-"+" "+x.name;
    }
}
let mybikes=new bike("Ducati");
document.write(bike.bikes(mybikes));

function displayDate(){
 document.write("<b>"+Date()+"</b>");
}