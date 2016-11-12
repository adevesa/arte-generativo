/*
function main (ctx, canvas) {

  canvas.width = 640
  canvas.height = 480

  ctx.fillStyle = 'red'
  ctx.fillRect(100, 100, 200, 200)

}
*/




function main (ctx, canvas)
{

canvas.width = 1280
canvas.height = 720

var x=0
var y=0
var stroke = 3

for(;y<canvas.height;)
{
	for( ; x< canvas.width; )
	{
	var a = numeroVar();
	crear_linea_redonda(x,y,x+a,y,stroke,colorHexadecimal())
	x= x+a;
	}
x= 0;
y= y+stroke;
}


/*
var lineCaps = ['butt','round','square']

ctx.strokeStyle = '#09f'
ctx.beginPath()
ctx.moveTo( 10,  10)
ctx.lineTo(140,  10)
ctx.moveTo( 10, 140)
ctx.lineTo(140, 140)
ctx.stroke()

ctx.strokeStyle = 'black'

lineCaps.forEach(function (lineCap, i) {
ctx.lineWidth = 15
ctx.lineCap = lineCap
ctx.beginPath()
ctx.moveTo(25 + i * 50, 10)
ctx.lineTo(25 + i * 50, 140)
ctx.stroke()
})
*/
}

function crear_linea_cuadrada(xo,yo,xf,yf,stroke,color)
{
	ctx.beginPath()
	ctx.moveTo(xo,yo)
	ctx.lineWidth = stroke
	ctx.lineCap = 'square'
	ctx.lineTo(xf,yf)
	var sharp = '#'
	color = sharp.concat(color)
	ctx.strokeStyle = color
	ctx.stroke()
	
}

function crear_linea_redonda(xo,yo,xf,yf,stroke,color)
{
	ctx.beginPath()
	ctx.moveTo(xo,yo)
	ctx.lineWidth = stroke
	ctx.lineCap = 'redondo'
	ctx.lineTo(xf,yf)
	var sharp = '#'
	color = sharp.concat(color)
	ctx.strokeStyle = color
	ctx.stroke()
	
}

function aumentarEn(n,x,y)
{
	x = x + n
	y = y + n
	
}

function numeroVar()
{
	var numero = Math.floor((Math.random() * 10) + 1)
	return numero
}


function colorHexadecimal()
{
	var numero = Math.floor((Math.random() * 65535) + 1)
	return (numero.toString(16))
	
}
