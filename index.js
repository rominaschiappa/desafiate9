
let boton= document.getElementById("buttonText");


boton.addEventListener("click",function(){
    let guardado= document.getElementById("inputText").value;
 localStorage.setItem("inputText", guardado);  
});