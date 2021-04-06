let boton = document.querySelector("#like")

boton.onclick = cambiarColor

function cambiarColor(){
    if (boton.style.color == "black")
    boton.style.color = "blue";
    else
    boton.style.color = "black"
console.log("Boton clickeando");
}

boton.style.color = "black";
console.log(boton.style.color)