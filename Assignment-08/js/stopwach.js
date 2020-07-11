var ms,s,m,h,interval;
ms = 0;
s = 0;
m = 0;
h = 0;

function msRun(){
    ms++;
    document.getElementById('ms').innerText = ms;
    document.getElementById('s').innerText = s;
    document.getElementById('m').innerText = m;
    document.getElementById('h').innerText = h;

    if(ms==10){ 
        ms=0;
        s = s + 1
    }
    else if(s == 60){
        s = 0;
        m = m + 1;
    }
    
    else if (m == 60){
        m = 0;
        h = 1;
    }

}

function start(){
    interval = setInterval(msRun,100);
    document.getElementById('start').setAttribute("disabled", "");
    c
}


function pause(){
    clearInterval(interval);
    document.getElementById('start').removeAttribute("disabled", "");
}

function reset(){
    document.getElementById('ms').innerText = 0;
    document.getElementById('s').innerText = 0;
    document.getElementById('m').innerText = 0;
    document.getElementById('h').innerText = 0;
    pause();
}

