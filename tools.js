let optionContainer = document.querySelector(".option-container");

let toolContainer = document.querySelector(".tool-container");

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
    if(isPencilContPresent){
        pencilIcon.style.display = "flex";
    }
    else{
        pencilIcon.style.display = "none";
    }
    
})

eraserIcon.addEventListener("click", (event) => {
    eraserIcon.style.display = "flex";
})
