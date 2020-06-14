//Task 01
var num1,num2,result;
function sum(){
    num1 = parseInt(prompt("Enter your favourite number"));
    num2 = parseInt(prompt("Enter your another favourite number"));
    result = num1 + num2;
    alert("Sum of your favourite numbers " + num1 + " and " + num2 + " is : " + result);
    document.getElementById('result01').innerText = "Sum of your favourite numbers " + num1 + " and " + num2 + " is : " + result;
}
//Task 02
function multi(){
    num1 = parseInt(prompt("Enter your favourite number"));
    num2 = parseInt(prompt("Enter your another favourite number"));
    result = num1 * num2;
    alert("Multiplication of your favourite numbers " + num1 + " and " + num2 + " is : " + result);
    document.getElementById('result02').innerText = "Multiplication of your favourite numbers " + num1 + " and " + num2 + " is : " + result;
}

function divi(){
    num1 = parseInt(prompt("Enter your favourite number"));
    num2 = parseInt(prompt("Enter your another favourite number"));
    result = num1 / num2;
    alert("Division of your favourite numbers " + num1 + " and " + num2 + " is : " + result);
    document.getElementById('result02').innerText = "Division of your favourite numbers " + num1 + " and " + num2 + " is : " + result;
}

function sub(){
    num1 = parseInt(prompt("Enter your favourite number"));
    num2 = parseInt(prompt("Enter your another favourite number"));
    result = num1 - num2;
    alert("Subtraction of your favourite numbers " + num1 + " and " + num2 + " is : " + result);
    document.getElementById('result02').innerText = "Subtraction of your favourite numbers " + num1 + " and " + num2 + " is : " + result;
}

//Task 03
var num;
document.getElementById('task3').innerText = "The value of num after declaration is " + num;

num = 3;
document.getElementById('task3-a').innerText = "Initial value " + num;
num++;
document.getElementById('task3-b').innerText = "Value after Increment " + num;
num += 7;
document.getElementById('task3-c').innerText = "After addition " + num;
num--;
document.getElementById('task3-d').innerText = "Value after decrement " + num;
document.getElementById('task3-e').innerText = "The remainder is when dividing by 3 is " + num % 3;

//Task 04
var ticket = 600;
var no = 5;
document.getElementById('task4').innerText = "Total cost to buy "+ no + " of tickets is " + no * ticket; 

//Task05

for(var i = 1; i <= 10; i++){
    document.getElementById('task5').innerHTML += "4 x " + i + " = " + (4 * i) + "<br/>";
}

//Task06
var cel = 27;
var frn = 68;
var toF, toCel, f;

document.getElementById('c').innerHTML = "Celsius to Farenheit "+ (cel * (9/5) + 32);
document.getElementById('f').innerHTML = "Farenheit to Celsius :"+ ((frn - 32) * (5/9));

//Task 07
var item1,item2,qty1,qty2,price1,price2,total,result;
price1 = 250;
price2 = 350;
var shipping = 100;

function task07(){
    item1 = prompt("Enter Item no. 1");
    alert("The Price of Item no. 1 is " + price1);
    result = "The Price of Item no. 1 is " + price1;
    qty1 = parseInt(prompt("Enter purchasing quantity of Item no. 1"));
    result += "\n The Quantity of Item No.1 is " + qty1;

    item2 = prompt("Enter Item no. 2");
    alert("The price of Item no. 2 is " + price2);
    result += "\nThe price of Item no. 2 is " + price2;
    qty2 = parseInt(prompt("Enter purchasing quantity of Item no. 2"));
    result += "\n The Quantity of Item No.2 is " + qty2;
    result += "\n Shipping Charges are " + shipping;

    total = (qty1 * price1) + (qty2 * price2);

    result += "\n\n Total cost of your order is " + total;
    document.getElementById('cart').innerText = result;
}

//Task 08
var ttl,std_result,score;


function task08(){
    ttl = parseInt(prompt("Enter Total Marks"));
    std_result = "Total Marks: " + ttl;
    score = parseInt(prompt("Enter Student Score"));
    std_result += "\n Student Score: " + score;
    std_result += "\n\n Percentage: " + Math.round((score/ttl) * 100);

    document.getElementById('result').innerText = std_result;
}

//Task 09

var pkr,sr,usd, cnv_usd, cnv,sr;
usd = 10;
sr = 25;
cnv_usd = 104.80;
cnv_sr = 28; 

function task09(){
    pkr = (usd * cnv_usd) + (sr * cnv_sr);
    document.getElementById('pkr').innerText = "Total currency in PKR: " + pkr;
}

//Task 10

var anum = 7;
var ops;
function task10(){
    ops = ((anum + 5) * 10)/2;
    document.getElementById('ops').innerText = "Result: " + ops;
}

//Task 11

var ryear = 2020;
var byear;
var calc_age;
function task11(){
    byear = parseInt(prompt("Enter your birth year"));
    calc_age = ryear-byear;
    document.getElementById('ops').innerText = "Current Year : " + ryear + "\n Your Birth Year: " + byear + "\n Your age is:" + calc_age;
}

//Task 12

var rad;
var circumference;
var c_area;
function task12(){
    rad = parseInt(prompt("Enter Radius of a Circle"));
    circumference = 2 * Math.PI * ryear;
    c_area = Math.PI * Math.pow(rad,2);
    document.getElementById('g_result').innerText = "Radius of Circle : " + rad + "\n The circumference is: " + circumference + "\n The area is:" + c_area;
}

//Task 13

var snack, s_c_age, s_l_age, e_amount, consm;
function task13(){
    snack = prompt("Enter your favourite snack");
    s_c_age = parseInt(prompt("Enter your current age"));
    s_l_age = parseInt(prompt("Enter your age limit for supply"));
    e_amount = parseInt(prompt("Enter the ammount of your consumption"));
    consm = (s_l_age - s_c_age) * e_amount;
    document.getElementById('c_result').innerText = "You will need " + consm + " " + snack + "to last you until the ripe old age of " + s_l_age;
}