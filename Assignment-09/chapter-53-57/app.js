// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementsByName("button");
// var imgs = document.getElementsByName('img');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



function openModal(e) {
  modal.style.display = "block";
  var img = document.getElementById('imgModal');
  img.setAttribute('src', e.src);
  img.setAttribute('alt', e.alt)
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function zoomIn(){
  var p = document.getElementById('demoText');
  var curSize = getComputedStyle(p).fontSize;
  var plus10 = parseInt(curSize.replace(/[^0-9]/g,'')) + 10;
  p.style.fontSize = plus10 +'px';
}

function zoomOut(){
  var p = document.getElementById('demoText');
  var curSize = getComputedStyle(p).fontSize;
  var plus10 = parseInt(curSize.replace(/[^0-9]/g,'')) - 10;
  p.style.fontSize = plus10 +'px';
}