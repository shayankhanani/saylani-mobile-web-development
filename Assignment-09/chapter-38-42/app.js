var res = 1;
function cal_power(a, b) {
    if (b > 0) {

        for (var i = 2; i <= b; i++) {
            if (res === 1) {
                res = a * a;
            }
            else {
                res *= a;
            }
        }

        alert("The answer is: " + res)
    }

    else {
        alert("The answer is: 1")
    }
}

function task01() {
    var num = parseInt(prompt("Enter the number!"));
    var powr = parseInt(prompt("Enter the power to calculate"));


    cal_power(num, powr);
    num, powr, res = 1

}

// task02
function checkLeap(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

function task02() {
    var yearToCheck = parseInt(prompt("Enter the number!"));
    checkLeap(yearToCheck) ? alert("The year " + yearToCheck + " is Leap ") : alert("The year " + yearToCheck + " is not Leap ")

}

// task03
var s, a, b, c;
function areaT() {
    return s * (s - a) * (s - b) * (s - c);
}
function calcS() {
    s = (a + b + c) / 2;
    return areaT();
}



function task03() {
    a = parseInt(prompt("Enter side 1 of triangle"));
    b = parseInt(prompt("Enter side 2 of triangle"));
    c = parseInt(prompt("Enter side 3 of triangle"));
    d = calcS();
    alert("Area of Triangle is " + d);

}

//task 04
var s1, s2, s3, avg, prcage;

function calc_avg() {
    return (s1 + s2 + s3) / 3;
}

function calc_prcage() {
    return ((s1 + s2 + s3) / 225) * 100;
}

function task04() { //main function
    s1 = parseInt(document.getElementById('sub01').value.toString());
    s2 = parseInt(document.getElementById('sub02').value.toString());
    s3 = parseInt(document.getElementById('sub03').value.toString());
    avg = calc_avg();
    prcage = calc_prcage();
    document.getElementById('summary').innerHTML = "Average is " + avg.toFixed(2) + "<br/> Percentage is " + prcage.toFixed(2) + "<br/>";
}

//task05

function indexOF(a, b) {
    
        var k = a.split("");
        for (var i = 0; i < a.length; i++) {
            if (a[i] === b) {
                return i;
                break;
            }
        }
        return -1
    
}

function task05(){
    var input = prompt("Enter string");
    var f = prompt("Enter character to find");

    alert(indexOF(input,f))
}

//task 06

function deleteVowels(str) {
    if(str.length === 25){
        return str.replace(/[aeiou]/ig,'');
    }

    else{
        alert("String Length is greater than 25")
    }
}

function task06(){
    var input = prompt("Enter string");
    
    alert("String withour Vowels: "+ deleteVowels(input));
}

//task 08

function km2m(dist) {
    return dist * 1000
}

function km2ft(dist) {
    return dist * 3280.84
}

function km2in(dist) {
    return dist * 39370.1
}

function km2cm(dist) {
    return dist * 100000
}



function task08(){
    var input = document.getElementById('distance').value;
    document.getElementById('conversion').innerHTML = "Distance in Meters(m) " + km2m(input).toFixed(2) + "<br/> Distance in Feet(ft) " + km2ft(input).toFixed(2) + "<br/>" + "Distance in Inches(in) " + km2in(input).toFixed(2) + "<br/>" + "Distance in Centimeters(cm) " + km2cm(input).toFixed(2);
}

//task 09

function overtime(i){
    if(i > 40){
        return "Overtime Pay is : " + (i - 40) * 12;
    }
    else{
        return "No Overtime!"
    }
}

function task09(){
    var input = document.getElementById('work').value;
    document.getElementById('overtime').innerHTML = overtime(input);
}

//task 10
var n100, n50, n10, remAmt;
function notes(amt){
    if(amt >= 100){
        n100 = Math.floor(amt / 100);
        remAmt = amt - (n100 * 100);
        if(remAmt > 0){
            if(remAmt >= 50){
                n50 = Math.floor(remAmt / 50);
                remAmt = remAmt - (n50 * 50);
                if(remAmt >= 10){
                    n10 = Math.floor(remAmt / 10);
                }
                else{
                    n10 = 0
                }
            }
            else{
                n50 = 0;
                n10 = Math.floor(remAmt / 10);
            }
            
        }

        else{
            n50 = 0;
            n10 = 0;
        }
    }

    else if(amt >= 50){
        n100 = 0
        n50 = Math.floor(amt / 50);
        remAmt = amt - (n50 * 50);
        if(remAmt > 0){
            if(remAmt >= 10){
                n10 = Math.floor(remAmt / 10);
            }
            else{
                n10 = 0;
            }
        }
        else{
            n10 = 0
        }
    }

    else if(amt >= 10){
        n100 = 0;
        n50 = 0;
        n10 = Math.floor(amt / 10);
    }

    else{
        return "Invalid Amount!"
    }

    return "You will have " + n100 + " hundred notes, " + n50 + " fifty notes and " + n10 + " ten notes";  

}

function task10(){
    var input = document.getElementById('denom').value;
    document.getElementById('Notes').innerHTML = notes(input);
}
