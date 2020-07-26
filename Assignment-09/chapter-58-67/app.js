var mainContent;
//task 01-1
function task01(){
    mainContent =  document.getElementById('main-content').childNodes;
    console.log(mainContent);
    alert("Check Console")
}

if(mainContent === ''){
    mainContent = document.getElementById('main-content').childNodes;
}
//task 01-2
function task02(){
    for(var i = 0; i < mainContent.length; i++){
        if(mainContent[i].nodeType === 1 ){
            console.log(mainContent[i]);
            document.getElementById('display-main-content').innerHTML += mainContent[i].nodeName + " =>";
            document.getElementById('display-main-content').innerHTML += mainContent[i] + "<br/>";
            document.getElementById('display-main-content').innerHTML += mainContent[i].innerHTML + "<br/>";
        }
    }
}
//task 01-3
var renderClass = document.getElementsByClassName('render');
function task03(){
    for(var i = 0; i < renderClass.length; i++){
        if(renderClass[i].nodeType === 1 ){
            document.getElementById('display-render').innerHTML += renderClass[i].nodeName + "=> ";
            document.getElementById('display-render').innerHTML += renderClass[i].innerHTML + "<br/>";
        }
    }
}
//task 01-4
function task04(){
    var setName = prompt("Insert First Name");
    document.getElementById('first-name').value = setName;
}
//task 01-5
function task05(){
    var setLastName = prompt("Insert Last name");
    document.getElementById('last-name').value = setLastName;
    var setEmail = prompt("Insert email");
    document.getElementById('email').value = setEmail;
}
//task 02-1
function task06(){
    document.getElementById('nType').innerText = "Node Type is: "+ document.getElementById('form-content').nodeType ;
}
//task 02-2
function task07(){
    document.getElementById('nTypelastName').innerText = "Node Type is: "+document.getElementById('lastName').nodeType + " and " ;
    document.getElementById('nTypelastName').innerText += " Child Node Type is: "+document.getElementById('lastName').childNodes[0].nodeType ;
}
//task 02-3
function task08(){
    var updteChild = prompt("Enter Node Value");
    document.getElementById('lastName').childNodes[0].nodeValue = "Last Name: " + updteChild;
}
//task 02-4
function task09(){
    var n = document.getElementById('main-content');
    var first = n.firstChild;
    var last = n.lastChild;
    document.getElementById('child4MainContent').innerHTML = "First Child is: "+first.nodeName + " => " + first.innerHTML + " and " ;
    document.getElementById('child4MainContent').innerHTML += " Last Child Nodes is: "+last.nodeName + " => " + last.innerHTML ;
}

//task 02-5
function task10(){
    var n = document.getElementById('lastName');
    var first = n.nextSibling;
    var last = n.previousSibling;
    document.getElementById('siblings').innerHTML = "Next Sibling Node is: "+first.nodeName + " => " + first.innerHTML + " and " ;
    document.getElementById('siblings').innerHTML += " Previous Nodes is: "+first.nodeName + " => " + last.innerHTML;
}


function task11(){
    var n = document.getElementById('email');
    var first = n.parentNode;
    document.getElementById('parent').innerHTML = "Parent Node Type is: "+ first.nodeType + " and " ;
    document.getElementById('parent').innerHTML += " its Node Name is: "+ first.nodeName + "=> " + first.innerHTML;
}