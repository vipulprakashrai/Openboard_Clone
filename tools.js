let optionContainer = document.querySelector(".option-container");

let toolContainer = document.querySelector(".tool-container");

let pencilCont = document.querySelector(".pencil-tool-cont");
let eraserCont = document.querySelector(".eraser-tool-cont");

let sticky = document.querySelector(".notes");
let body = document.body;
console.log(body);
let uploadBtn = document.querySelector(".upload");

let pencilIcon = document.querySelector(".pencil");
let eraserIcon = document.querySelector(".eraser");

let isPencilContPresent = false;
let isEraserContPresent = false;

let isToolContPresent = true 

optionContainer.addEventListener("click", (event)=>{

   isToolContPresent = !isToolContPresent

    if(isToolContPresent){
           function openTools(){
                let iconElm = optionContainer.children[0];
                iconElm.classList.remove("fa-xmark")
                iconElm.classList.add ("fa-bars")
                toolContainer.style.display = "none";
                
                }
  openTools();
    }
    else{                   
  function closeTools(){                        
    let iconElm = document.querySelector("i");  
    iconElm.classList.remove("fa-bars")  
    iconElm.classList.add("fa-xmark")  
    toolContainer.style.display = "flex";
    pencilCont.style.display = "none";
    eraserCont.style.display = "none";
}
closeTools();
    }
})

pencilIcon.addEventListener("click", (event) => {
    isPencilContPresent = !isPencilContPresent
    if(!isPencilContPresent){
        pencilCont.style.display = "none";
    }
    else{
        pencilCont.style.display = "block";
    }
    
})

eraserIcon.addEventListener("click", (event) => {
    isEraserContPresent = !isEraserContPresent
    if(!isEraserContPresent){
      eraserCont.style.display = "none";
    }
    else{
    eraserCont.style.display = "block";
    }
})

uploadBtn.addEventListener("click", (event)=>{

})


sticky.addEventListener("click", function(event){
   
    let stickyCont = document.createElement("div");
    
    stickyCont.setAttribute("class", "notes-container")
    stickyCont.innerHTML = `
         <div class="header-cont">
             <div class="minimize"></div>
             <div class="remove"></div>
         </div>
         <div class="note-cont">
         <textarea></textarea>
         </div>
    `;
   
    body.appendChild(stickyCont);
// Drag and Drop feature
    stickyCont.onmousedown = function(event){

        let shiftX = event.clientX - stickyCont.getBoundingClientRect().left;
        let shiftY = event.clientY - stickyCont.getBoundingClientRect().top;
      
        stickyCont.style.position = 'absolute';
        stickyCont.style.zIndex = 1000;
        
      
        moveAt(event.pageX, event.pageY);
      
        
        function moveAt(pageX, pageY) {
            stickyCont.style.left = pageX - shiftX + 'px';
            stickyCont.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        
        document.addEventListener('mousemove', onMouseMove);
      
        
        stickyCont.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          stickyCont.onmouseup = null;
        };
      
      };
      
      stickyCont.ondragstart = function() {
        return false;
      };

      // headerCont functionalites like minimize and remove the note-cont.
      let removeBtn = stickyCont.querySelector(".remove");
      let minimizeBtn = stickyCont.querySelector(".minimize");
      let noteCont = stickyCont.querySelector(".note-cont");
      let isNoteContPresent = true;
      function notesAction(remove, minimize){
        removeBtn.addEventListener("click", (event)=>{
           stickyCont.remove();
        });
       
        minimizeBtn.addEventListener("click", (event)=>{
          isNoteContPresent = !isNoteContPresent
          if(isNoteContPresent){
            noteCont.style.display = "none";
          }
          else{
           noteCont.style.display = "block";
          }
        });

      }
      notesAction(removeBtn, minimizeBtn);
   
});





