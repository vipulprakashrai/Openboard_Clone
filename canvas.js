let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pencilColorCont = document.querySelectorAll(".pencil-color");
let pencilWidthElem = document.querySelector(".pencil-width");
let eraserWidthElem = document.querySelector(".eraser-width");
let download = document.querySelector(".download");
let redo = document.querySelector(".redo");

let undo = document.querySelector(".undo");


let pencilColor = "red";
let eraserColor = "white";
let pencilWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value;


let undoRedoTracker = []; // data
let track = 0; // represent which action from tracker array




// API
let tool = canvas.getContext("2d");


tool.strokeStyle = pencilColor;
tool.width = pencilWidth;

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

    let url = canvas.toDataURL();
    undoRedoTracker.push(url);
    track  = undoRedoTracker.length - 1;
})

undo.addEventListener("click", (event) =>{
    console.log("hi there");
    if(track > 0){
        track--;
     }
     // Action
     let trackerObj = {
        trackValue : track,
        undoRedoTracker
     }

     undoRedoAction(trackerObj)
})

redo.addEventListener("click", (event) =>{
    console.log("hello");
   if(track < undoRedoTracker.length - 1){
    track++;
   }
// Action
let trackerObj = {
    trackValue : track,
    undoRedoTracker
}

undoRedoAction(trackerObj)

})

function undoRedoAction(trackerObj){
  track = trackerObj.trackValue
  undoRedoTracker = trackerObj.undoRedoTracker

  let url = undoRedoTracker[track]
  let img = new Image()
  img.src = url ;
  img.onload = (event) => {
    tool.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
}

pencilColorCont.forEach((colorElem) =>{
    colorElem.addEventListener("click", (event)=>{
        let color = colorElem.classList[0];
        pencilColor = color;
        tool.strokeStyle = pencilColor;
    })

})


pencilWidthElem.addEventListener("change", (event)=>{
    pencilWidth = pencilWidthElem.value;
    tool.lineWidth = pencilWidth;
})

eraserWidthElem.addEventListener("change", (event)=>{
    eraserWidth = eraserWidthElem.value;
    tool.lineWidth = eraserWidth;
})

eraserIcon.addEventListener("click", (event)=>{
    if(isEraserContPresent){
        tool.strokeStyle = eraserColor;
        tool.lineWidth = eraserWidth;
    }
    else{
        tool.strokeStyle = pencilColor;
        tool.lineWidth = pencilWidth;
    }
})


download.addEventListener("click", (event)=>{
        let url = canvas.toDataURL();
    let ankerTag = document.createElement("a");
    ankerTag.href = url;
    ankerTag.download = "openboad.jpg";
    ankerTag.click();
})