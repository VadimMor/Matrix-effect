let canvas = document.querySelector('canvas');
let canvasTx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let symbols = `12305678#@$&%阿得亚佩伊`.split('');
let fontSize = 25;
let colums = canvas.width/fontSize;
let arrayColumn = [];

for (let i = 0; i < colums; i++) {
	arrayColumn[i] = 1;
}

function draw() {
	canvasTx.fillStyle = 'rgba(0, 0, 0, 0.125)';
	canvasTx.fillRect(0, 0, canvas.width, canvas.height);
	canvasTx.fillStyle = '#0f0';
	canvasTx.font = fontSize + 'px arial';

	for (let i = 0; i < arrayColumn.length; i++) {
		var text = symbols[Math.floor(Math.random() * symbols.length)]
		
		canvasTx.fillText(text, i * fontSize, arrayColumn[i] * fontSize);

		if (arrayColumn[i] * fontSize > canvas.height && Math.random() > 0.925) {
			arrayColumn[i] = 0;
		}

		arrayColumn[i]++;
	}
}

window.onresize = function () { window.location.reload(); }
setInterval(draw, 70)