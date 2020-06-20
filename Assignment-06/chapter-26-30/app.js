//Task 01
var pos_num;
function task01(){
    pos_num = Number(prompt("Enter any Number"));
    if(Math.sign(pos_num) === 1 || Math.sign(pos_num) === 0){
        document.getElementById('task01').innerHTML += "<br/>Number is " + pos_num + "<br/>";
        document.getElementById('task01').innerHTML += "<br/>Number round-off value is " + Math.round(pos_num) + "<br/>";
        document.getElementById('task01').innerHTML += "<br/>Number Floor value is " + Math.floor(pos_num) + "<br/>";
        document.getElementById('task01').innerHTML += "<br/>Number Ceil value is " + Math.ceil(pos_num)  + "<br/>";
    }
    else{
        document.getElementById('task01').innerHTML += "<br/> Input number is not positive<br/>";
    }
}
//Task 02
var neg_num;
function task02(){
    neg_num = Number(prompt("Enter any Number"));
    if(Math.sign(neg_num) === -1 || Math.sign(neg_num) === 0){
        document.getElementById('task02').innerHTML += "<br/>Number is " + neg_num + "<br/>";
        document.getElementById('task02').innerHTML += "<br/>Number round-off value is " + Math.round(neg_num) + "<br/>";
        document.getElementById('task02').innerHTML += "<br/>Number Floor value is " + Math.floor(neg_num) + "<br/>";
        document.getElementById('task02').innerHTML += "<br/>Number Ceil value is " + Math.ceil(neg_num)  + "<br/>";
    }
    else{
        document.getElementById('task02').innerHTML += "<br/> Input number is not negative<br/>";
    }
}
//Task 03
var absVal;
function task03(){
    absVal = Number(prompt("Enter any Number"));
    document.getElementById('task03').innerHTML += "<br/> The absolute value of number " + absVal + " is " + Math.abs(absVal);
}
//Task 04
var dice;
function task04(){
    dice = Math.floor((Math.random() * 6) + 1);
    document.getElementById('task04').innerHTML += "<br/> The value of dice is " + dice;
}
//Task 05
var coin;
function task05(){
    coin = Math.floor((Math.random() * 2) + 1);
    if (coin === 1){
        document.getElementById('task05').innerHTML += "<br/> The coin side is " + coin + " and its a Tails" ;
    }
    else{
        document.getElementById('task05').innerHTML += "<br/> The coin side is " + coin + " and its a Heads";
    }
    
}
//Task 06
var random100;
function task06(){
    random100 = Math.floor((Math.random() * 100) + 1);
    document.getElementById('task06').innerHTML += "<br/> Random Number between 1 to 100 is " + random100;
    
}

//Task 07
var weight;
function task07(){
    weight = prompt("Enter you weight in Kilograms");
    weight = weight.match(/\d+/g);
    if(weight.length > 0){
        document.getElementById('task07').innerHTML += "<br/> Weight is " + Number(weight.join('.')) + " Kilograms";
    }
    else{
        document.getElementById('task07').innerHTML += "<br/> Weight is " + Number(weight) + " Kilograms"
    }
    
}

//Task 08
var secret_n;
function task08(){
    secret_n = Number(prompt("Enter secret number from 1 to 10"));
    var selectedSecret = Math.floor((Math.random() * 10) + 1);
    console.log(selectedSecret)
    if(secret_n === selectedSecret){
        document.getElementById('task08').innerHTML += "<br/> Congratulatio the secret number is " + selectedSecret;
    }
    else{
        document.getElementById('task08').innerHTML += "<br/> Sorry you are wrong, the number was " + selectedSecret;
    }
    
}