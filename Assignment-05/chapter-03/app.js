//Task 01
var age = 15
function task01(){
    alert("I'm " + age + " years old");
}

//Task 02
var n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
}
else{
    n++;
}
localStorage.setItem("on_load_counter", n);
document.getElementById('count').innerHTML = n;


//Task 03
var birthYear = 1994;
document.getElementById("birth").innerHTML = "My birth year is " + birthYear + "<br/>" + "Data Type of declare variable is " + typeof(birthYear);

//Task04
var vname;
var pname;
var qty;
function task04(){
    vname = prompt("Please Enter Your name");
    pname = prompt("Enter Product Name");
    qty = parseInt(prompt("Enter the quantity you want to buy"));

    document.getElementById("task04").innerText = "Thank You! " + vname + " for shopping " + qty + "quantity of " + pname;
}

//Task05
var vname;
var pname;
var qty;
function task04(){
    vname = prompt("Please Enter Your name");
    pname = prompt("Enter Product Name");
    qty = parseInt(prompt("Enter the quantity you want to buy"));

    document.getElementById("task04").innerText = "Thank You! " + vname + " for shopping " + qty + "quantity of " + pname;
}