//Task01
function task01(){
    document.getElementById('task01').innerHTML += "<br/> " +  Date();
}

//Task02
var months = ['January','Ferburary','March','April','May','June','July','August','September','October','November','December'];
var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var dt = new Date();
function task02(){
    alert("Current Month is: " + months[dt.getDay()]);
}
//Task03
function task03() {
    alert("Today is: "+day[dt.getDay()].slice(0,3));    
}
//Task04
function task04(){
    if(dt.getDay() === 0 || dt.getDay() === 6){
        alert("Its Fun day");
    }
    else{
        alert("Its Working day");
    }
}
//Task05
function task05(){
    if(dt.getDate() < 15){
        alert("First fifteen days of the Month");
    }
    else{
        alert("Last fifteen days of the Month");
    }
}
//Task06
var specificMS = dt.getTime();
function task06(){
    document.getElementById('task06').innerHTML += '<br/> Current Date:' + dt;
    document.getElementById('task06').innerHTML += '<br/> Elapsed milliseconds since January 1, 1970:' + specificMS;
    document.getElementById('task06').innerHTML += '<br/> Elapsed Minutes since January 1, 1970:' + specificMS / (100 * 60);
}
//Task07
var decideAMPM = dt.getHours();
function task07(){
    if(decideAMPM < 12){
        alert("It's AM");
    }
    else{
        alert("It's PM");
    }
}
//Task08
var laterDate = new Date("December 31, 2020");
function task08(){
    alert(laterDate);
}

var ramadanDate = new Date("April 25, 2020");
function task09(){
    var days = Math.round((dt.getTime() - ramadanDate.getTime())/(1000 * 60 * 60 * 24));
    document.getElementById('task09').innerHTML += '<br/>Ramdan Date : ' + ramadanDate + ', ';
    document.getElementById('task09').innerHTML += '<br/>' + days + ' Days have passed since 1st Ramadan.';
}

//Task10
function task10(){
    var specDate = new Date('December 05, 2015 22:50:16');
    var specDateBeginningYear = new Date('January 01, 2015 00:00:00');
    var secs = Math.round((specDate.getTime() - specDateBeginningYear.getTime())/(1000 * 60));
    document.getElementById('task10').innerHTML += '<br/>On Reference Date : ' + specDate + ', ';
    document.getElementById('task10').innerHTML += secs + ' seconds had passed since beginning of 2015';
}

//Task11
function task11(){
    var d = new Date();
    document.getElementById('task11').innerHTML += '<br/>Current Date: ' + d + '</br>';
    d.setHours(d.getHours() + 1);
    document.getElementById('task11').innerHTML += '<br/>Hour Ahead Date: ' + d + '</br>';
}

//Task12
function task12(){
    var back = new Date();
    document.getElementById('task12').innerHTML += '<br/>Current Date: ' + back + '</br>';
    back.setFullYear(back.getFullYear() - 100);
    document.getElementById('task12').innerHTML += '<br/>100 years Back Date: ' + back  + '</br>';
}

//Task13
var age,b_year;
function task13(){
    age = Number(prompt("Enter your age"));
    b_year = parseInt(dt.getFullYear()) - age;
    console.log(b_year);
    alert("Your birth year is: " + b_year);
}

//Task14
var custName, cur_month, num_units, chrg_units, net_amt, lt_amt, grs_amt;
function task14(){
    custName = prompt("Enter your name");
    cur_month = months[dt.getMonth()]
    num_units = Math.round((Math.random() * 300) + 1);
    chrg_units = 11.98;
    net_amt = num_units * chrg_units;
    lt_amt = 350;
    grs_amt = net_amt + lt_amt;

    document.getElementById('task14').innerHTML += '<br/><h3>KE Bill for the Month ' + cur_month + '</h3>';
    document.getElementById('task14').innerHTML += '<p>Customer Name: ' + custName + '</p>';
    document.getElementById('task14').innerHTML += '<p>Billing Month: ' + cur_month + '</p>';
    document.getElementById('task14').innerHTML += '<p>Number of Units: ' + num_units + '</p>';
    document.getElementById('task14').innerHTML += '<p>Unit Charges: ' + chrg_units + '</p>';
    document.getElementById('task14').innerHTML += '<p>Net Amount Payable (within Due Date): ' + net_amt + '</p>';
    document.getElementById('task14').innerHTML += '<p>Late payment surcharge: ' + lt_amt + '</p>';
    document.getElementById('task14').innerHTML += '<p>Gross Amount Payable (after Due Date): ' + grs_amt + '</p>';

}

