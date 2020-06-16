//Task 01
var std_names = [];
//Task 02
var std_name = {};
//Task 03
var str_array = ['Star','Sun','Earth'];
//Task 04
var num_array = [34, 23, 98];
//Task 05
var bool_array = [false, true, true, false];
//Task 06
var mix_array = [1,'Shayan',true];
//Task 07
var edu_level_pak = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
var display = "<ol>"
for(var i = 0; i < edu_level_pak.length; i++){
    display += "<li>"+ edu_level_pak[i] +"</li>"
}
display += "</ol>";
document.getElementById('task07').innerHTML += display;

//Task 08
var std_name = [];
var std_score = [];
var render = "";

function task08(){
    for(var i = 0; i < 3; i++){
        std_name.push(prompt("Enter Student Name"));
        std_score.push(prompt("Enter Student Score"));

        render += "<p>Score of "+ std_name[i] + " is " + std_score[i] + ". Percentage: " + ((std_score[i]/500) * 100) + "</p>";
    }
    document.getElementById('task08').innerHTML += render;
}

//Task 09
var color = ['red', 'yellow', 'green'];

for(var i = 0; i < color.length; i++){
    document.getElementById('task09').innerHTML += '<span width="200px" height"200px" style="background-color:' + color[i] + '; padding: 2em; ">'+ color[i] + '</span>';
}

function rerender(){
    for(var i = 0; i < color.length; i++){
        document.getElementById('task09').innerHTML += '<span width="200px" height"200px" style="background-color:' + color[i] + '; padding: 2em; ">'+ color[i] + '</span>';
    } 
}

//Task 09 - 1

function task09A(){

    color.unshift(prompt("Enter color name to add in the beginning"));
    document.getElementById('task09').innerHTML = " ";
    document.getElementById('task09').innerHTML += "<p>Task 09</p>";
    rerender();
}

//Task 09 - 2

function task09B(){
    
    color.push(prompt("Enter color name to add in the end"));
    document.getElementById('task09').innerHTML = " ";
    document.getElementById('task09').innerHTML += "<p>Task 09</p>";
    rerender();
}

//Task 09 - 3

function task09C(){
    
    color.unshift(prompt("Enter color name to add in the beginning"));
    color.unshift(prompt("Enter another color name to add in the beginning"));
    document.getElementById('task09').innerHTML = " ";
    document.getElementById('task09').innerHTML += "<p>Task 09</p>";
    rerender();
}

//Task 09 - 4

function task09D(){
    
    color.shift(alert("This will remove first color"));
    document.getElementById('task09').innerHTML = " ";
    document.getElementById('task09').innerHTML += "<p>Task 09</p>";
    rerender();
}

//Task 09 - 5

function task09E(){
    
    color.pop(alert("This will remove last color"));
    document.getElementById('task09').innerHTML = " ";
    document.getElementById('task09').innerHTML += "<p>Task 09</p>";
    rerender();
}


//Task 09 - 7

function task09F(){
    var a = parseInt(prompt("Enter the position number at which you want to add new color"));
    var b = prompt("Enter color name");
    color.splice(a - 1,0,b);
    document.getElementById('task09').innerHTML = " ";
    document.getElementById('task09').innerHTML += "<p>Task 09</p>";
    rerender();
}


//Task 09 - 8

function task09G(){
    var a = parseInt(prompt("Enter the position number of color you want to remove"));
    alert("This will remove color at position " + a);
    color.splice(a - 1,1);
    document.getElementById('task09').innerHTML = " ";
    document.getElementById('task09').innerHTML += "<p>Task 09</p>";
    rerender();
}

//Task 10
var stud_score = [35,69,81,21,12,31,45,1,33];
function sort_stud(){
    document.getElementById('task10').innerHTML += "Student Scores: " + stud_score + "<br/>";
    stud_score.sort();
    document.getElementById('task10').innerHTML += "Ordered Student Scores: " + stud_score;
}

//Task 11
var cities = ['Karachi','Lahore','Islamabad','Peshawar'];
var selected_c; 
function copy_city(){
    document.getElementById('task11').innerHTML += "Cities List: " + cities + "<br/>";
    selected_c  = cities.slice(1);
    document.getElementById('task11').innerHTML += "Selected Cities: " + selected_c;
}



//Task 12
var arr = ['This','is','my','cat'];
function join_sentence(){
    document.getElementById('task12').innerHTML += "Array: " + arr + "<br/>";
    document.getElementById('task12').innerHTML += "Sentence: " + arr.join(" ");
}

//Task 13
var devices = [];
function fifo(){
    for(var i = 0; i < 4; i++){
        devices.push(prompt("Enter devices you have"))
    }

    document.getElementById('task13').innerHTML += "Devices: " + devices.join(". ") + "<br/>";
    document.getElementById('task13').innerHTML += "FIFO Application <br/>";
    for(var i = 0; i < 4; i++){
        document.getElementById('task13').innerHTML += "Out " + devices.shift() + "<br/><br/>";
    }
}

//Task 14
var web = [];
function lifo(){
    for(var i = 0; i < 4; i++){
        web.unshift(prompt("Enter webs you visit"));
    }

    document.getElementById('task14').innerHTML += "Webs: " + web.join(". ") + "<br/>";
    document.getElementById('task14').innerHTML += "LIFO Application";
    for(var i = 0; i < 4; i++){
        document.getElementById('task14').innerHTML += "Out " + web.pop() + "<br/><br/>";
    }
}

//Task 14
var cell = [];
function populate(){
    for(var i = 0; i < 4; i++){
        cell.push(prompt("Enter Mobile Companies"));
    }
    document.write("<select>");
    for(var i = 0; i < 4; i++){
        document.write("<option>"+ cell[i] +"</option>");
    }
    
    document.write("</select>");
}