//Task 01
var md_array = [
    [1,'Ali','React'],
    [2,'Joe','Angular'],
    [3,'Mikkel','Django']
];

//Task 02
var matrix = [
    [0,1,2,3],
    [1,0,2,3],
    [1,2,0,3]
]

//Task 03
function printNums(){
    for(var i = 1; i <= 10; i++){
        document.getElementById('task03').innerHTML += i + "<br/>";
    }
}

//Task 04
function multiTable(){
    var num = parseInt(prompt("Enter the number of which you want its multiplication table"))
    var limit = parseInt(prompt("Enter the limit of multiplication table"))
    for(var i = 1; i <= limit; i++){
        document.getElementById('task04').innerHTML += "<p>"+ num + " x " + i + " = " + (num * i) + "</p>";
    }
}

//Task 05
var fruits = ['apple','banana','mango','orange','strawberry']
function arrPrint(){
    for(var i = 0; i < fruits.length; i++){
        document.getElementById('task05').innerHTML += "<p>Element at index "+ i + " is " + fruits[i] + "</p>" ;
    }
}

//Task 06
function operations(){
    document.getElementById('task06').innerHTML += "<p><strong>Counting:</strong></p>";
    for(var i = 0; i < 16; i++){
        document.getElementById('task06').innerHTML += i + " ";
    }
    document.getElementById('task06').innerHTML += "<p><strong>Reverse Counting:</strong></p>";
    for(var i = 11; i > 0; i--){
        document.getElementById('task06').innerHTML += i + " ";
    }
    document.getElementById('task06').innerHTML += "<p><strong>Even:</strong> </p>";
    for(var i = 0; i <=20; i+=2){
        document.getElementById('task06').innerHTML += i + " ";
    }
    document.getElementById('task06').innerHTML += "<p><strong>Odd:</strong></p>";
    for(var i = 1; i <=20; i+=2){
        document.getElementById('task06').innerHTML += i + " ";
    }
    document.getElementById('task06').innerHTML += "<p><strong>Series:</strong></p>";
    for(var i = 1; i <=20; i+=2){
        document.getElementById('task06').innerHTML += i+"k" + " ";
    }
}

//Task 07
var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
function search(){
    var search = prompt("Enter bakery item to search")
    for(var i = 0; i <= a.length; i++){
        if(a[i] === search.toLowerCase()){
            document.getElementById('task07').innerHTML += a[i] + " is available at index " + i + " in our bakery";
            break;
        }
        else{
            document.getElementById('task07').innerHTML += "Sorry the item " + search + " not found.";
            break;
        }
        
    }
}

//Task 08
var b = [24, 53, 78, 91, 12];
var large = 0;
function largeNum(){
    document.getElementById('task08').innerHTML += "Numbers are " + b.join(', ') + "<br/>";

    for(var i = 0; i <= b.length; i++){
        if(b[i] > large){
            large = b[i];
        }
    }
    document.getElementById('task08').innerHTML += "Larger Number is " + large;

}

//Task 09
var b = [24, 53, 78, 91, 12];
var small = b[0];
function smallNum(){
    document.getElementById('task09').innerHTML += "Numbers are " + b.join(', ') + "<br/>";

    for(var i = 0; i <= b.length; i++){
        if(b[i] < small){
            small = b[i];
        }
    }
    document.getElementById('task09').innerHTML += "Smaller Number is " + small;

}

//Task 10

function multiple5(){
    for(var i = 1; i <= 100; i+=5){
        document.getElementById('task10').innerHTML += i + ", ";
    }
}

