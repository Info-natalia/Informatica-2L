let boton1 = document.querySelector ("#button1")
let boton2 = document.querySelector ("#button2")
let boton3 = document.querySelector ("#button3")
let parrafo1 = document.querySelector ("#p1")
let parrafo2 = document.querySelector ("#p2")
let parrafo3 = document.querySelector ("#p3")
let parrafo1 = document.querySelector ("#p1")
boton1.onClick = diferenteColor;
boton2.onClick = desapareceAparece;
boton3.onClick = aparecerTiempoA;
function diferenteColor (){
    if(parrafo2.style.display = "block"){
        parrafo2.style.display = "none"
    } else {
        parrafo2.style.display = "block"
    }
}
function aparecerTiempoA (){
    parrafo3.style.display = "none"
    setTimeout(aparecer, 3000);
}
function aparecerTiempoB (){
    parrafo3.style.display = "block"
}
