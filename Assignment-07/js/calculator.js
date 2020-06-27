function invertSign(){
    var checkSign = Number(document.getElementById('current').value);
    if(Math.sign(checkSign) === 1){
        document.getElementById('current').value = - Math.abs(checkSign);
    }
    else{
        document.getElementById('current').value =  Math.abs(checkSign);
    }
}

function partofOne(){
    var getNumber = Number(document.getElementById('current').value);
    if(getNumber > 0){
        document.getElementById('current').value = 1 / getNumber;
    }

    else{
        alert("Error: Cannot divide by zero")
    }
}

function power(){
    var getNumber = Number(document.getElementById('current').value);
    document.getElementById('current').value = Math.pow(getNumber,2);
}

function root(){
    var getNumber = Number(document.getElementById('current').value);
    document.getElementById('current').value = Math.sqrt(getNumber);
}

function evaluate(){
    var getExpression = document.getElementById('current').value;
    console.log(getExpression);
    var result = eval(getExpression);
    if(result === Infinity ){
        alert("The Result is infinity. Lets start again!");
        
        document.getElementById('current').value = 0;
    }

    else{
        document.getElementById('current').value = result;
    }
}

document.getElementById("evaluate").addEventListener("click", evaluate());