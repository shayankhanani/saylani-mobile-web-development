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

//Task 06
var marks, percentage, result, grade, remarks, display;
marks = 0;
var total = 100;
function result_calc(){
    for(var i = 1; i <=3; i++){
        marks += parseInt(prompt("Enter marks obtained in Subject No. " + i + " out of 100"));
    }

    percentage = Math.round((marks / (total * 3)) * 100);

    if(percentage >= 80){
        grade = "A1";
        remarks= "Excellent";
        display = "Total Marks: " + total * 3 + "\n Marks Obtained: " + marks + "\n Percentage: " + percentage + " \n Grade: " + grade + "\n Remarks: " + remarks;
    }
    else if(percentage >= 70){
        grade = "A";
        remarks= "Good";
        display = "Total Marks: " + total * 3 + "\n Marks Obtained: " + marks + "\n Percentage: " + percentage + " \n Grade: " + grade + "\n Remarks: " + remarks;
    }
    else if(percentage >= 60){
        grade = "B";
        remarks= "You need to improve";
        display = "Total Marks: " + total * 3 + "\n Marks Obtained: " + marks + "\n Percentage: " + percentage + " \n Grade: " + grade + "\n Remarks: " + remarks;
    }
    else{
        grade = "Fail";
        remarks= "Sorry"
        display = "Total Marks: " + total * 3 + "\n Marks Obtained: " + marks + "\n Percentage: " + percentage + " \n Grade: " + grade + "\n Remarks: " + remarks;
    }

    document.getElementById('result').innerHTML = display;
}

//Task 07
var secret_num, prompt_num;


function guess(){
    secret_num = Math.round(Math.random() * 10);
    console.log(secret_num);
    prompt_num = parseInt(prompt("Guess the number form 1 to 10"));
    if(prompt_num === secret_num){
        alert("Bingo!!!");
    }
    else if( prompt_num === secret_num + 1){
        alert("Close enough to the correct answer");
    }
    else{
        alert("Sorry! Try Again!")
    }
}

//Task 08
var d_num;

function check_d(){
    
    d_num = parseInt(prompt("Enter the number to check"));
    if(d_num % 3 === 0){
        alert("The number is divisible by 3");
    }
    
    else{
        alert("The number is not divisible by 3")
    }
}

//Task 09
var p_num;
function check_p(){
    p_num = parseInt(prompt("Enter the number to check if it is even or odd")); 
    if(p_num % 2 === 0){
        alert("The number is Even");
    }
    else{
        alert("The number is odd");
    }
}

//Task 10
var t_num;
function check_t(){
    t_num = parseInt(prompt("Enter the temperature of outside")); 
    if(t_num > 40){
        alert("It is too hot outside");
    }
    else if(t_num > 30){
        alert("The Weather today is Normal");
    }
    else if(t_num > 20){
        alert("Today’s Weather is cool");
    }
    else{
        alert("OMG! Today’s weather is so Cool.");
    }
}

//Task 11
var f_num,s_num,calc,op_calc;
function check_c(){
    f_num = parseInt(prompt("Enter the First Number")); 
    s_num = parseInt(prompt("Enter the Second Number")); 
    calc = prompt("Enter Operation + , - , * or /"); 
    if(calc === "+"){
        op_calc = f_num + s_num;
        alert("The result of the operation " + f_num + calc + s_num + " is: " +  op_calc);
    }
    else if(calc === "-"){
        op_calc = f_num - s_num;
        alert("The result of the operation " + f_num + calc + s_num + " is: " +  op_calc);
    }
    else if(calc === "*"){
        op_calc = f_num * s_num;
        alert("The result of the operation " + f_num + calc + s_num + " is: " +  op_calc);
    }
    else if(calc === "/"){
        op_calc = f_num / s_num;
        alert("The result of the operation " + f_num + calc + s_num + " is: " +  op_calc);
    }
    else{
        alert("Invalid Operation")
    }
}