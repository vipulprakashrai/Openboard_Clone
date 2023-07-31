let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let tool = canvas.getContext("2d");


tool.strokeStyle = "red";
tool.width = "3";

// mousedown -> start new path, mousemove -> path fill(graphics)
let mouseDown = false;
canvas.addEventListener("mousedown", (event)=>{
    mouseDown = true;
   tool.beginPath();
   tool.moveTo(event.clientX, event.clientY);
})
canvas.addEventListener("mousemove", (event)=>{
    if(mouseDown){
        tool.lineTo(event.clientX, event.clientY);
        tool.stroke();
    }
   
})

canvas.addEventListener("mouseup", (event)=>{
    mouseDown = false;
})