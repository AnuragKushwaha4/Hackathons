const parent = document.getElementsByClassName("parent")[0];
parent.addEventListener("click",(e)=>{
    if(e.target.textContent === "I am clicked"){
        e.target.textContent="";
    }
    else{
        e.target.textContent = "I am clicked"
    }
})