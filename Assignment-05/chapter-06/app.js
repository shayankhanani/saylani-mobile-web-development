//Task 01
var num, result, op;
function operation(){
    num = parseInt(prompt("Enter your favourite number"));
    result = "Result \n The value of num is: " + num + "\n\n ----------------------------- \n";
    op = ++num;
    result += "\n The value of ++num is: " + op + "\n Now the value of num is: " + num + "\n";
    op = num++;
    result += "\n The value of num++ is: " + op + "\n Now the value of num is: " + num + "\n";
    op = --num;
    result += "\n The value of --num is: " + op + "\n Now the value of num is: " + num + "\n";
    op = num--;
    result += "\n The value of num-- is: " + op + "\n Now the value of num is: " + num + "\n";
    
    document.getElementById('result01').innerText = result;
}

//Task 02
var a, b, t2_result, display, sub_r;
a = 2; 
b = 1;
function operation2(){
    t2_result = --a - --b + ++b + b--;
    display = "Result of --a - --b + ++b + b-- is: "+ t2_result;
    display += "\n\n Explaination";
    a = 2; b =1;
    sub_r = --a;
    display += "\n The value of --a is: " + sub_r + "\n" + "\n The value of a is: " + a + "\n The value of b is: " + b + "\n \n";
    sub_r = a - --b;
    display += "\n The value of --a - --b is: " + sub_r + "\n" + "\n The value of a is: " + a + "\n The value of b is: " + b + "\n \n";
    sub_r = sub_r + ++b;
    display += "\n The value of --a - --b + ++b is: " + sub_r + "\n" + "\n The value of a is: " + a + "\n The value of b is: " + b + "\n \n";
    sub_r = sub_r + b--;
    display += "\n The value of --a - --b + ++b + b-- is: " + sub_r + "\n" + "\n The value of a is: " + a + "\n The value of b is: " + b + "\n \n";

    document.getElementById('result02').innerText = display;
}

//Task 03
var name;
function operation3(){
    name = prompt("Enter your name please")
    document.getElementById('result03').innerText = "Welcome " + name;
}

//Task 04
var t_num,t3_result;
t3_result = "";
function operation4(){
    t_num = parseInt(prompt("Enter the number to get its multiplication table"));
    for(var i = 1; i <=10; i++){
        t3_result += t_num + " x " + i + " =" + (t_num* i) + "\n";  
    }
    document.getElementById('result04').innerText = t3_result;
}