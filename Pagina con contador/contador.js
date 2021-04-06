let contar =0
localStorage.setItem ("visitas", contar)
let contarExistente=localStorage.getItem("visitas")
do{
    contar=contar+1
    localStorage.setItem("visitas", contar)

    contarExistente=localStorage.getItem("visitas")
    alert("Visitó esta página"+contar+ "veces")
}while(contarExistente==contar)