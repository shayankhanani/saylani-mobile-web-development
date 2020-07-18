//task01
function task01(){
    alert("Hello! From the link you clicked")
}

//task02
function task02(){
    alert("Thanks for purchasing from us")
}
//task03
function task03() {
    var td = event.target.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}
//task04
function task04(img) {
    document.getElementById('phone').src = img;
}

//task05
var counter = 0
function task05a(img) {
    counter++
    document.getElementById('counter').innerText = counter;
}

function task05b(img) {
    counter--
    document.getElementById('counter').innerText = counter;
}