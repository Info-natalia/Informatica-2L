let notas = []
let Nnotas = parseFloat (prompt("ingrese el número de notas para promediar"))
let contador = 0
let total = 0 
let indice = 0
let a = 0
while (contador < Nnotas) {
    a = parseFloat (prompt("ingrese las notas"))
    if (0<a<10 && Number.isInteger (a)) {
        notas.push (a)
        contador = contador + 1
        total = total + notas [indice]
        indice= indice + 1
    }
}
console.log (total/Nnotas)