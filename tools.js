let optionContainer = document.querySelector(".option-container");

let toolContainer = document.querySelector(".tool-container");

let pencilCont = document.querySelector(".pencil-tool-cont");
let eraserCont = document.querySelector(".eraser-tool-cont");

let sticky = document.querySelector(".notes");
let body = document.body;
console.log(body);


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

sticky.addEventListener("click", function(event){
   console.log("click");
    let stickyCont = document.createElement("div");
    console.log(stickyCont);
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
   
})
