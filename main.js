var canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
//Two lines above are ALWAYS nessasary for all canvas projects
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(200, 100, 40, 0, 2*Math.PI); 
//x position = 200, y position = 100, diameter = 40, angle = 0, 2*3.14
ctx.stroke();
//line number 4-9 is used for drawing anything on the canvas
//line number 7 defines what pattern needs to be drawn, for example ctx.rect would draw a rectangle
canvas.addEventListener("mousedown", mymousedown);
//line number 12 is to add an event listener looks out for mouse action changes
function mymousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mx=e.clientX-canvas.offsetLeft;
    my=e.clientY-canvas.offsetTop;
    circle(mx,my);
}
function circle(){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(mx, my, 40, 0, 2*Math.PI); 
    ctx.stroke(); 
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}