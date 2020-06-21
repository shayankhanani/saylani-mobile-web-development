//Task01
dt = new Date();
function task01(){
    document.getElementById('task01').innerHTML += "<br/> " +  dt;
}
//Task02
function displayName(fname, lname){
    alert("Hello! " + fname +" " + lname);
}
function task02(){
    var a = prompt("Enter your First Name");
    var b = prompt("Enter your Last Name");
    displayName(a,b);
}
//Task03
function sumNum(i, j){
    alert(i + j);
}
function task03(){
    var a = parseInt(prompt("Enter your First Number"));
    var b = parseInt(prompt("Enter your Second Number"));
    sumNum(a,b);
}
//Task04
function calc(i, j, k, operation){
    if(operation === '+'){
        alert(i + j + k)
    }
    else if(operation === '-'){
        alert(i - j - k)
    }
    else if(operation === '*'){
        alert(i * j * k)
    }
    else if(operation === '/'){
        alert(i / j / k)
    }
    else{
        alert("Invalid Operation")
    }
    
}
function task04(){
    var a = parseInt(prompt("Enter your First Number"));
    var b = parseInt(prompt("Enter your Second Number"));
    var c = parseInt(prompt("Enter your Third Number"));
    var op = prompt("Enter your desired operation");
    calc(a,b,c,op);
}

//Task05
function square(k){
    alert("Square of the input number is " + Math.pow(k,2));
}
function task05(){
    var a = parseInt(prompt("Enter your Number"));
    square(a);
}

//Task06
var result = 1;
function factorial(k){
    for(k; k> 1; k--){
        result *= k 
    }
    alert("factorial of the input number is " + result);
    result = 1;
}
function task06(){
    var a = parseInt(prompt("Enter your Number"));
    factorial(a);
}

//Task07
function disp_count(k,m){
    for(k; k <= m; k++){
        document.getElementById('task07').innerHTML += '<br/>' + k; 
    }
}
function task07(){
    var s = parseInt(prompt("Enter the Starting Number"));
    var e = parseInt(prompt("Enter the Ending Number"));
    disp_count(s,e);
}

//Task08
function pythagorean(k,m){
    var h;
    return h = k + m;
}

function calcSquare(n){
    return Math.pow(n,2)
}
function task08(){
    var b = parseInt(prompt("Enter the Base of RA Triangle"));
    var p = parseInt(prompt("Enter the Perpendicular of RA Triangle"));
    var hyp = pythagorean(calcSquare(b),calcSquare(p));
    alert("Hypotenuse is = " + hyp);
}
//Task 09
function calcArea(w,h){
    return w * h;
}
function task09(){
    var e = parseInt(prompt("Enter the Width of Rectangle"));
    var s = parseInt(prompt("Enter the Height of Rectangle"));
    var area = calcArea(e,s)
    alert("Area of Rectangle by passing arguments as variables is: " + area);

    area = calcArea(3,8);
    alert("Area of Rectangle by passing arguments as values 3 and 8 respectivel as width and height will give us: " + area);
}

//Task 10
function checkPalindrome(s){
    var r = s.split('');
    r = r.join('');
    if(s === r){
        alert("String is Palindrome");
    }
    else{
        alert("Not a Palindrome");
    }
}
function task10(){
    var str = prompt("Enter the string to check palindrome");
    checkPalindrome(str)
}

//Task 11
function titleCase(s){
    var r = s.split(' ');
    for (var i = 0; i < r.length; i++){
        r[i] = r[i][0].toUpperCase() + r[i].slice(1);
    }
    r = r.join(' ');
    return r;
}
function task11(){
    var str = prompt("Enter the string to change into title case");
    alert("Title Case: " + titleCase(str));
}

//Task 12
function checkWord(s){
    var r = s.split(' ');
    var l = r[0].length;
    var s = r[0];
    for (var i = 0; i < r.length; i++){
        if(l <= r[i].length){
            l = r[i].length;
            s = r[i];
        }
    }

    return s;
    
}
function task12(){
    var str = prompt("Enter the string to find the longest word in it");
    alert("Longest word in string: " + checkWord(str));
}


//Task 13
function checkCharacter(s,f){
    var r = s.split('');
    var counter = 0;
    for (var i = 0; i < r.length; i++){
        if(s[i] === f){
            counter +=1;
        }
    }

    return counter;
    
}
function task13(){
    var str = prompt("Enter the string");
    var find = prompt("Enter the character to find in the string");
    alert("No. of " + find + "'s in the string " + str + "is: " + checkCharacter(str,find));
}

//Task 14
function calcCircumference(r){
    var circumference = (2 * Math.PI * r).toFixed(2);
    return circumference;
    
}

function calcArea(r){
    var area = (Math.PI * Math.pow(r,2)).toFixed(2);
    return area;
}
function task14(){
    var radius = Number(prompt("Enter the radius"));
    alert("Circumference of the circle with radius " + radius + " is: " + calcCircumference(radius));
    alert("Area of the circle with radius " + radius + " is: " + calcArea(radius));
}