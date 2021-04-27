let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")
ctx.fillStyle = "red"
ctx.strokeStyle = "red"

// dibujo borrador > Lapiz
ctx.beginPath()
ctx.moveTo(20, 50)
ctx.lineTo(20, 30)
ctx.lineTo(50, 20)
ctx.lineTo(60, 50)
ctx.lineTo(20, 50)
ctx.stroke()
ctx.fill()

// dibujo parte metal > Lapiz
ctx.fillStyle = "grey"
ctx.strokeStyle = "black"
ctx.beginPath()
ctx.fillRect(20,50,40,10)
ctx.strokeRect(20,50,40,10)

// dibujo parte amarilla > Lapiz
ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.beginPath()
ctx.moveTo(20, 60)
ctx.lineTo(20, 140)
ctx.lineTo(30, 150)
ctx.lineTo(40, 140)
ctx.lineTo(50, 150)
ctx.lineTo(60, 140)
ctx.lineTo(60, 60)
ctx.stroke()
ctx.fill()

// dibujo mina > Lapiz
ctx.fillStyle = "orange"
ctx.strokeStyle = "black"

// dibujo celular
ctx.fillStyle = "black"
ctx.strokeStyle = "black"
ctx.beginPath()
ctx.moveTo(130, 170)
ctx.lineTo(130, 30)
ctx.arc(140,30,10,1.0*Math.PI,1.5*Math.PI)
ctx.lineTo(220, 20)
ctx.arc(220,30,10,1.5*Math.PI,0)
ctx.lineTo(230, 170)
ctx.arc(220,170,10,0,0.5*Math.PI)
ctx.lineTo(140, 180)
ctx.arc(140,170,10,0.5*Math.PI,1.0*Math.PI)
ctx.stroke()
ctx.fill()

// Dibujo fondo celular
ctx.fillStyle = "blue"
ctx.strokeStyle = "black"
ctx.beginPath()
ctx.moveTo(140, 150)
ctx.lineTo(140, 40)
ctx.arc(150,40,10,1.0*Math.PI,1.5*Math.PI)
ctx.lineTo(210, 30)
ctx.arc(210,40,10,1.5*Math.PI,0)
ctx.lineTo(220, 150)
ctx.arc(210,150,10,0,0.5*Math.PI)
ctx.lineTo(150, 160)
ctx.arc(150,150,10,0.5*Math.PI,1.0*Math.PI)
ctx.stroke()
ctx.fill()


// ctx.endPath()