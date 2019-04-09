var socket;
var color;
var size;

function setup() {
  createCanvas(1000, 800);
  background(51);
  frameRate(100);

  socket = io.connect();
  socket.on('mouse', newDrawing);

  color = {
    r: random(255),
    g: random(255),
    b: random(255),
  }

  size = {
    width: 36,
    height: 36,
  }
  

function newDrawing(data) {
  noStroke();
  fill(data.color.r, data.color.g, data.color.b);
  ellipse(data.x, data.y, data.size.width, data.size.height)
}

function mouseDragged() {
  console.log('Sending: ' + mouseX + ',' + mouseY)

  var data = {
    x: mouseX,
    y: mouseY,
    color: color,
    size: size
  }

  socket.emit('mouse', data);

  noStroke();
  fill(data.color.r, data.color.g, data.color.b);
  ellipse(mouseX, mouseY, 36, 36)
  ellipse(15,25,20,20);
  fill(255);
  textSize(10);
  text('your color:',10,10);


}

function draw() {}

function keyTyped() {
  if (key === 'p') {
    color = {
      r: random(255),
      g: random(255),
      b: random(255)
    }
  }

  if (key == 'q') {
    size = {
      width: width + 10,
      height: height + 10,
  }
  }
}
