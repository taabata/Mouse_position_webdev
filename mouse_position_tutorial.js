var mouseposx = undefined;
var mouseposy = undefined;
var flag = true;

window.onload = function(){
    window.onmousemove = function(event){
        mouseposx = event.clientX;
        mouseposy = event.clientY;
        document.getElementById("label").innerHTML = "("+mouseposx+","+mouseposy+")";
    }
    document.getElementById("button").onclick = function(){
        if(flag){
            document.getElementById("label").style.visibility = "visible";
            flag = !flag;
        }
        else{
            document.getElementById("label").style.visibility = "hidden";
            flag = !flag;
        }
    }
    labelmove();
}

function labelmove(){
    var element = document.getElementById("label");
    element.style.left = mouseposx + 20 +"px";
    element.style.top = mouseposy +"px";
    requestAnimationFrame(labelmove);
}