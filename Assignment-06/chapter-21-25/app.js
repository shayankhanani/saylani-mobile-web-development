//Task 01
var fstName, lstName, fullName;
function task01(){
    fstName = prompt("Enter your First Name");
    lstName = prompt("Enter your Last Name");
    fullName = fstName +" "+ lstName;
    alert("Welcome " + fullName);
}

//Task 02
var fvtCell, fvCLength;
function task02(){
    fvtCell = prompt("Enter your Favorite Cell Phone");
    fvCLength = fvtCell.length;

    document.getElementById('task02').innerHTML += " My Favorite Cell phone is "+ fvtCell + "<br/>";
    document.getElementById('task02').innerHTML += "Length of the string is "+ fvCLength; 
}

//Task 03
var nationality = "Pakistani" ;
function task03(){
    
    document.getElementById('task03').innerHTML += " String is "+ nationality + "<br/>";
    document.getElementById('task03').innerHTML += "Index of n is "+ nationality.indexOf('n'); 
}

//Task 04
var greet = "Hello World" ;
function task04(){
    
    document.getElementById('task04').innerHTML += " String is "+ greet + "<br/>";
    document.getElementById('task04').innerHTML += "Index of n is "+ greet.lastIndexOf('l'); 
}
//Task 05
function task05(){
    
    document.getElementById('task05').innerHTML += " String is "+ nationality + "<br/>";
    document.getElementById('task05').innerHTML += "Index of n is "+ nationality.charAt(3); 
}

//Task 06
function task06(){
    fstName = prompt("Enter your First Name");
    lstName = prompt("Enter your Last Name");
    fullName = fstName.concat(" "+ lstName);
    alert("Welcome " + fullName);
}

//Task 07
var city = "Hyderabad"
function task07(){
    
    document.getElementById('task07').innerHTML += " City: "+ city + "<br/>";
    document.getElementById('task07').innerHTML += "After Replacing "+ city.replace('Hyder','Islam'); 
}

//Task 08
var message = "Ali and Sami are best friends. They play cricket and football together."
function task08(){
    
    document.getElementById('task08').innerHTML += " Message: <em>"+ message + "</em><br/>";
    document.getElementById('task08').innerHTML += "After Replacing "+ message.replace(/and/g,'&amp;'); 
}

//Task 09
var strNum = '472';
var numStr = Number(strNum);
function task09(){
    
    document.getElementById('task09').innerHTML += " Value "+ strNum + " <br/> Type: " + typeof(strNum) + "<br/>";
    document.getElementById('task09').innerHTML += "Value "+ numStr+ " <br/> Type: " + typeof(numStr) + "<br/>"; 
}

//Task 10
var convertUpper;
function task10(){
    convertUpper = prompt("Any word in small case")
    document.getElementById('task10').innerHTML += "<br/> User Input "+ convertUpper + " <br/>";
    document.getElementById('task10').innerHTML += "Uppercase "+ convertUpper.toUpperCase(); 
}

//Task 11
var tCase;
function task11(){
    tCase = prompt("Your favorite programming language");
    document.getElementById('task11').innerHTML += "<br/> User Input: "+ tCase + " <br/>";
    tCase = tCase.toLowerCase().split(" ");
    for(var i = 0; i < tCase.length; i++){
        tCase[i] = tCase[i][0].toUpperCase() + tCase[i].slice(1);
    }
    document.getElementById('task11').innerHTML += "Title case:  "+ tCase.join(" "); 
}
//Task 12
var num2str,strN;
num2str = 35.36;

function task12(){
    document.getElementById('task12').innerHTML += "<br/> Number:  "+ num2str + " <br/>";
    strN = num2str.toString().replace('.','');
    console.log(strN);
    document.getElementById('task12').innerHTML += "Result:  "+ strN + " Type of " + strN + " is " + typeof(strN); 
}
//Task 13
var username;
function task13(){
    username = prompt("Enter your username");
    if((username.includes('@') || username.includes('!')) || (username.includes(',') || username.includes('.'))){
        document.getElementById('task13').innerHTML += "<br/> Enter valid username ";
    }
    else{
        document.getElementById('task13').innerHTML += "<br/> Good username ";
    }
}

//Task 14
var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
function task14(){
    var user_input = prompt("Enter bakery item");
    user_input = user_input.toLowerCase();
    var flag = false;
    for(var i = 0; i < a.length ; i++){
        if(user_input === a[i]){
            flag = true;
        }
    }

    if(flag){
        document.getElementById('task14').innerHTML += "<br/> " + user_input + " is available at index " + a.indexOf(user_input)+ " in our bakery";
    }
    else{
        document.getElementById('task14').innerHTML += "<br/> We are sorry " + user_input + " is not available in our bakery";
        
    }

}

//Task 15
var pass = '';
function task15(){
    var pass = prompt("Enter password");
    if(pass.length > 6){
        if ((pass.charCodeAt(0) >= 48 && pass.charCodeAt(0) <=57)){
            document.getElementById('task15').innerHTML += "<br/>Entered Password " + pass + " can not begin with a number";   
        }
        else{
            console.log(pass.charCodeAt(0));
            var status = true;
            for(var i = 0; i < pass.length ; i++){
                if(
                    (pass.charCodeAt(i) >= 0 && pass.charCodeAt(i) <=47) || 
                    (pass.charCodeAt(i) >= 58 && pass.charCodeAt(i) <=64) ||
                    (pass.charCodeAt(i) >= 91 && pass.charCodeAt(i) <=96) ||
                    (pass.charCodeAt(i) >= 123 && pass.charCodeAt(i) <=126)
                ){
                    status = false 
                    console.log(pass.charCodeAt(i));
                }
            }
            
            if(status === false){
                document.getElementById('task15').innerHTML += "<br/>Entered Password " + pass + " contains special characters";
                document.getElementById('task15').innerHTML += "<br/>Entered Password " + pass + " should contains alphabet and numbers";
                document.getElementById('task15').innerHTML += "<br/>Entered Password " + pass + " is invalid";
            }
            else{
                document.getElementById('task15').innerHTML += "<br/>Entered Password " + pass + " is Perfect"; 
            }
        }
    }

    else{
        document.getElementById('task15').innerHTML += "<br/>Entered Password " + pass + " is too small";
    }

}

//Task 16
var university = 'University of Karachi';
function task16(){
    university = university.split('');
    document.getElementById('task16').innerHTML += "<br/>";
    for(var i = 0; i< university.length; i++)
    document.getElementById('task16').innerHTML +=  university[i] + "<br/>";
    

}

//Task 17
var last_char ;
function task17(){
    last_char = prompt("Enter any input");
    document.getElementById('task17').innerHTML += "<br/>User input: " + last_char ;
    document.getElementById('task17').innerHTML += "<br/>Last character of User input: " + last_char.charAt(last_char.length-1);
}

//Task 18
var sentence = 'The quick brown fox jumps over the lazy dog'
var noThe ;
function task18(){
    noThe = sentence.toLowerCase().match(/the/g).length;
    console.log(noThe);
    document.getElementById('task18').innerHTML += "<br/>Text: " + sentence ;
    document.getElementById('task18').innerHTML += "<br/>There are " + noThe + " of word the";
}

