const lines = document.querySelector('#lins');
const linescontext = lines.getContext('2d');

function lins() {
    linescontext.beginPath();
    linescontext.moveTo(400, 100)
    linescontext.lineTo(1500, 100)
    linescontext.moveTo(400, 120)
    linescontext.lineTo(1500, 120)
    linescontext.moveTo(400, 140)
    linescontext.lineTo(1500, 140)
    linescontext.moveTo(400, 160)
    linescontext.lineTo(1500, 160)
    linescontext.moveTo(400, 180)
    linescontext.lineTo(1500, 180)
    linescontext.lineWidth = 3
    linescontext.strokeStyle = 'black'
    linescontext.stroke();
    linescontext.closePath();
}

function dokey(x){
    linescontext.beginPath();
    linescontext.arc(x, 200, 10, 0, 2 * Math.PI);
    linescontext.moveTo((x-15), 200)
    linescontext.lineTo((x+15), 200)
    linescontext.moveTo((x+10), 200)
    linescontext.lineTo((x+10), 120)
    linescontext.lineWidth = 3
    linescontext.strokeStyle = 'black'
    linescontext.fillStyle = 'black';
    linescontext.fill();
    linescontext.stroke();
    linescontext.closePath();
}

function rekey(x){
    linescontext.beginPath();
    linescontext.arc(x, 190, 10, 0, 2 * Math.PI);
    linescontext.moveTo((x+10), 190)
    linescontext.lineTo((x+10), 110)
    linescontext.lineWidth = 3
    linescontext.strokeStyle = 'black'
    linescontext.fillStyle = 'black';
    linescontext.fill();
    linescontext.stroke();
    linescontext.closePath();
}
function mekey(x){
    linescontext.beginPath();
    linescontext.arc(x, 180, 10, 0, 2 * Math.PI);
    linescontext.moveTo((x+10), 180)
    linescontext.lineTo((x+10), 100)
    linescontext.lineWidth = 3
    linescontext.strokeStyle = 'black'
    linescontext.fillStyle = 'black';
    linescontext.fill();
    linescontext.stroke();
    linescontext.closePath();
}

function fakey(x){
    linescontext.beginPath();
    linescontext.arc(x, 170, 10, 0, 2 * Math.PI);
    linescontext.moveTo((x+10), 170)
    linescontext.lineTo((x+10), 90)
    linescontext.lineWidth = 3
    linescontext.strokeStyle = 'black'
    linescontext.fillStyle = 'black';
    linescontext.fill();
    linescontext.stroke();
    linescontext.closePath();
}

function solkey(x){
    linescontext.beginPath();
    linescontext.arc(x, 160, 10, 0, 2 * Math.PI);
    linescontext.moveTo((x+10), 160)
    linescontext.lineTo((x+10), 80)
    linescontext.lineWidth = 3
    linescontext.strokeStyle = 'black'
    linescontext.fillStyle = 'black';
    linescontext.fill();
    linescontext.stroke();
    linescontext.closePath();
}

function lakey(x){
    linescontext.beginPath();
    linescontext.arc(x, 150, 10, 0, 2 * Math.PI);
    linescontext.moveTo((x+10), 150)
    linescontext.lineTo((x+10), 70)
    linescontext.lineWidth = 3
    linescontext.strokeStyle = 'black'
    linescontext.fillStyle = 'black';
    linescontext.fill();
    linescontext.stroke();
    linescontext.closePath();
}

function sekey(x){
    linescontext.beginPath();
    linescontext.arc(x, 140, 10, 0, 2 * Math.PI);
    linescontext.moveTo((x+10), 140)
    linescontext.lineTo((x+10), 60)
    linescontext.lineWidth = 3
    linescontext.strokeStyle = 'black'
    linescontext.fillStyle = 'black';
    linescontext.fill();
    linescontext.stroke();
    linescontext.closePath();
}
lins()


function init(){
    linescontext.clearRect(0,0,1500,400);
    lins()
}
// dokey()
// rekey()
// mekey()
// fakey()
// solkey()
// lakey()
// sekey()
