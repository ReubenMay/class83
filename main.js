canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
var mouseevent="empty"
color="red"
var lpx,lpy


canvas.addEventListener("mousedown",mouse_click)

function mouse_click (e) 
{
    color = document.getElementById("color").value;
    thickens = document.getElementById("thickness").value;
    mouseevent="mouseDown"
}

canvas.addEventListener("mousemove",mouse_move)

function mouse_move (e) 
{
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    if(mouseevent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color
        ctx.lineWidth=thickens;
        ctx.moveTo(lpx,lpy)
        ctx.lineTo(mouse_x,mouse_y)
        ctx.stroke()
    }
   lpx=mouse_x
   lpy=mouse_y   
}



var width = screen.width;
new_width = screen.width-70;
new_height=screen.height-300;

if(width<992)
{
    document.getElementById("mycanvas").width = new_width;
    document.getElementById("mycanvas").height = new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",touch_start)

function touch_start(e){
    console.log("touch_start");
    color = document.getElementById("color").value;
    thickens = document.getElementById("thickness").value;
    lpx=e.touches[0].clientX -canvas.offsetleft;
    lpy=e.touches[0].clientY -canvas.offsettop;
}

canvas.addEventListener("touchmove",touch_move)

function touch_move (e) 
{
    console.log(color);
    touch_x = e.touches[0].clientX - canvas.offsetLeft;
    touch_y = e.touches[0].clientY - canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle=color
        ctx.lineWidth=thickens;
        ctx.moveTo(lpx,lpy)
        ctx.lineTo(touch_x,touch_y)
        ctx.stroke()
    
   lpx=touch_x
   lpy=touch_y   
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
} 
canvas.addEventListener("mouseup",mouse_UP)

function mouse_UP (e) 
{
    mouseevent="mouseUP"
}
canvas.addEventListener("mouseleave",mouse_leave)

function mouse_leave (e) 
{
    mouseevent="mouseleave"
}
