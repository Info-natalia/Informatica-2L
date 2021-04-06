let planetas = [
    {nombre: "Mercurio", diametro: 4879, imagen:"https://es.wikipedia.org/wiki/Mercurio_(planeta)#/media/Archivo:Mercury_in_color_-_Prockter07_centered.jpg"},
    {nombre: "venus", diametro: 12104, imagen:"https://es.wikipedia.org/wiki/Venus_(planeta)#/media/Archivo:Venus-real_color.jpg"},
    {nommbre:"Tierra", diametro:12742, imagen:"https://es.wikipedia.org/wiki/Tierra#/media/Archivo:As08-16-2593.jpg"},
    {nombre:"Marte", diametro:12756, imagen:"https://es.wikipedia.org/wiki/Marte_(planeta)#/media/Archivo:Schiaparelli_Hemisphere_Enhanced.jpg"},
    {nombre:"Jupiter", diametro:139820, imagen:"https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)#/media/Archivo:Jupiter_by_Cassini-Huygens.jpg"},
    {nombre:"Saturno", diametro:116460, imagen:"https://es.wikipedia.org/wiki/Saturno_(planeta)#/media/Archivo:Saturn_during_Equinox.jpg"}

// Creo una variable que haga referencia a la tabla 
// QuerySelector selecciona un elemento del html, usando los selectores de css.
= document.querySelector("#planetas")
// console.log(tabla)

// voy a llenar la tabla añadiendo las filas necesarias
let contenidoTabla = `<tr><th>Nombre</th><th>Diametro</th></tr>`
for ( planeta of planetas){
    contenidoTabla = contenidoTabla + `<tr><td>${planeta.nombre}</td><td>${planeta.diametro}</td>
    <td><img src="${planeta.imagen}" alt=""></td></tr>`
}
// a la tabla le asigno el contenido que creamos
tabla.innerHTML = contenidoTabla;