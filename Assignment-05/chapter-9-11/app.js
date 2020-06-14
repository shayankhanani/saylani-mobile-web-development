//Task 01
var city;
function welcome(){
    city = prompt("Enter your city");
    city = city.toUpperCase();
    if(city === "KARACHI"){
        alert("Welcome to City of Lights")
    }
}
//Task 02
var gender;
function greet(){
    gender = prompt("Enter your gender");
    gender = gender.toUpperCase();
    console.log(gender);
    if(gender === "MALE"){
        alert("Good Morning Sir!");
    }
    else{
        alert("Good Morning Madam!");
    }
}

//Task 03
var signal;
function traffic(){
    signal = prompt("Enter signal light color");
    signal = signal.toUpperCase();
    if(signal === "RED"){
        alert("Must Stop!");
    }
    else if(signal === "YELLOW"){
        alert("Ready to move!");
    }
    else if( signal === "GREEN"){
        alert("Move now!");
    }
    else{
        alert("Wrong Input")
    }
}

//Task 04
var fuel;
function fuel_alert(){
    fuel = parseFloat(prompt("Enter remaining fuel"));
    if(fuel === 0.25){
        alert("Please refill the fuel in your car");
    }
    else{
        alert("Fuel is enough")
    }
}

//Task 05
function run(){
    var a = 4;
    if (++a === 5){ 
        alert("given condition for variable a is true"); 
    }

    var b = 82;
    if (b++ === 83){ 
        alert("given condition for variable b is true");
    }

    var c = 12;
    if (c++ === 13){
        alert("condition 1 is true");
    }
    if (c === 13){
        alert("condition 2 is true");
    }
    if (++c < 14){
        alert("condition 3 is true");
    }
    if(c === 14){
        alert("condition 4 is true");
    }

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
        alert("The cost equals");
    }

    if (true){
        alert("True");
    }
    if (false){
        alert("False");
    }

    if("car" < "cat"){
        alert("car is smaller than cat");
    }
}