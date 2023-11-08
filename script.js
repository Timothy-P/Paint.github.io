$(document).ready(function(){
    $("#canvas1").click(Alpha());
});

var mouseX;
var mouseY;
let tempA;
let tempB;
let tempC;
let tempD;
var counter = "0";

onmousemove = function(e){
    mouseX = eval(e.clientX+"-30")
    mouseY = eval(e.clientY+"-30")
}
function Alpha() { 
    try {
        ColorRan = Math.floor(Math.random()*16777215).toString(16);
        $("#canvas1").append('<div id="dot'+counter+'" style="left:'+mouseX+'px;top:'+mouseY+'px; width:60px; height:60px;background-color:#'+ColorRan+';border-radius:100px;position:absolute;"></div>');
        tempA = document.getElementById("dot"+counter).getAttribute("style")
        counter = eval(counter+1);
        tempB = tempA.indexOf("l");
        tempC = tempA.indexOf("w");
        tempD = tempA.slice(tempB, tempC);
        //alert("Dot created at "+mouseX+", "+mouseY+" according to the mouse");
        //alert("Dot created at "+tempD+" according to the element");
        err = Error
    }
    catch (err) {
        var myWindow = window.open("", "MsgWindow", "width=300,height=25");
        myWindow.document.write(err);
    }
};