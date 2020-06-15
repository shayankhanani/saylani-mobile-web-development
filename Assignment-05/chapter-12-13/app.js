//Task 01
var inputChars;
function checkInput(){
    inputChars = prompt("Enter the Character");
    if (inputChars.charCodeAt(0) >= 65 && inputChars.charCodeAt(0) <= 90){
        alert("The input character is Capitalcase Alphabet")
    }

    else if (inputChars.charCodeAt(0) >= 97 && inputChars.charCodeAt(0) <= 122){
        alert("The input character is Smallcase Alphabet")
    }

    else if (inputChars.charCodeAt(0) >= 48 && inputChars.charCodeAt(0) <= 57){
        alert("The input character is Digit")
    }
}

//Task 02
var inputNums01, inputNums02;
function checkNumbers(){
    inputNums01 = parseInt(prompt("Enter any Number your choice."));
    inputNums02 = parseInt(prompt("Enter anyother Number your choice."));
    if(inputNums01 < inputNums02){
        alert("The Number 02. " + inputNums02 + " is greater than " + inputNums01)
    }

    else if (inputNums01 > inputNums02){
        alert("The Number 01. " + inputNums01 + " is greater than " + inputNums02)
    }

    else{
        alert("Both Numbers are equal");
    }
}

//Task 03
var inputNums03;
function checkNumbersPNZ(){
    inputNums03 = parseInt(prompt("Enter any Number your choice."));
    if(inputNums03 < 0){
        alert("The Number is negative")
    }

    else if (inputNums03 > 0){
        alert("The Number is Positive")
    }

    else{
        alert("Number is 0");
    }
}

//Task 04
var inputChars02;
function checkVowels(){
    inputChars02 = prompt("Enter any single alphabet of your choice.");
    inputChars02 = inputChars02.toLowerCase();
    if(inputChars02.length === 1 && inputChars02 === 'a' ||  inputChars02 === 'e' || inputChars02 === 'i' || inputChars02 === 'o' || inputChars02 === 'u'){
        alert("The character is a vowel")
    }
    else{
        alert("The character is not a vowel");
    }
}

//Task 05
var inputPass,validPass;

function checkPassword(){
    inputPass = prompt("Enter your Password");
    validPass = prompt("Re-enter your Password");
    if(inputPass === "" && validPass === ""){
        alert("Please enter and verify your password")
    }
    else if(inputPass === validPass){
        alert("Correct! The password you entered matches the original password")
    }
    else{
        alert("The Incorrect password");
    }
}

//Task 06
//Fixed Code
var greeting;
var hour = 13;
if (hour < 18){
    greeting = "Good day";
}
else{
    greeting = "Good evening";
} 

//Task 07

var time;
function checkTime(){
    time =  prompt("Enter time in 24-hour format");
    if(time >= 00 && time < 1200){
        alert("Good Morning!");
    }
    else if(time >= 1200 && time < 1700){
        alert("Good Afternoon!");
    }
    else if(time >= 1700 && time < 2100){
       alert("Good Evening");
    }
    else if(time >= 2100 && time < 2359){
        alert("Good Night")
    }
    else{
        alert("Wrong Input")
    }
}

 