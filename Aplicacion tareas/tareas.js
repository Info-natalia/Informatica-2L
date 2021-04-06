let Tareas = [
    {Materia:"",Descripcion:"",Fecha:""}
]

let Tarea = document.querySelector> (`<#tarea>`)
function LlenarTabla() {
    let contenidoTabla = '<tr><th>Materia</th><th>Descripcion</th><th>Fechas</th><tr>'
    for (tarea of tareas) {
contenidoTabla = contenidoTabla + `<tr><td>${tarea.Materia}</td><td>${tarea.Descripcion}</td><td>${tarea.Fecha}</td><tr>`       
      }
      tareas.innerHTML = contenidoTabla;
}
let form = document.querySelector ('#formulario')
function ponerTarea() {
    let nuevaMateria = document.querySelector ('#formulario')
    function ponerTarea() {
        let NuevaMateria = document.querySelector ("input[name=Materia]").value
        let NuevaDescripcion = document.querySelector ("input[name=Descripcion]").value
        let Nuevafecha = document.querySelector ("input[name=Fecha]").value

        let NuevaTarea = {Materia:NuevaMateria, Descripcion:NuevaDescripcion, Fecha:Nuevafecha}
        console.log ("Añadir la siguiente tarea");
        console.log (NuevaTarea)

        Tareas.push(NuevaTarea)
        LlenarTabla()
        return false
    }
}
form.onsubmit = añadirTarea