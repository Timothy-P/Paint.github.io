$(document).ready(function(){
    $("#canvas1").click(Alpha());
});
function Alpha() {
    let canvas = document.getElementById("canvas1");
    let ctx = canvas.getContext("2d");
    const circle = new Path2D();
    circle.arc(e.clientX, e.clientY, 25, 0, 2 * Math.PI);
};
//onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}