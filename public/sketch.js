var socket;
var color;
var check;
var penSize = 20;

var color1;
var color2;
var color3;
var color4;
var color5;
var color6;
var color7;
var color8;
var color9;
var color10;
var color11;
var color12;




function preload() {
  roboto = loadFont('assets/Roboto-Medium.ttf')
}
function setup() {
  createCanvas(1200, 800);
  cursor(CROSS)
  background(51);
  frameRate(100);
  fill(0);
  rect(0,0,1000,75);

  randomColor();

randomButton = createButton('random colors');
randomButton.position(1050,300);
randomButton.mousePressed(randomColor);


 rSlider = createSlider(0, 255, random(255));
 rSlider.position(25, 5);
 gSlider = createSlider(0, 255, random(255));
 gSlider.position(25, 25);
 bSlider = createSlider(0, 255, random(255));
 bSlider.position(25, 45);

 penSlider = createSlider(1, 75, 20);
 penSlider.position(400, 25);

  
  socket = io.connect();
  socket.on('mouse', newDrawing);

  color = {
    r: random(255),
    g: random(255),
    b: random(255),
  }

}

function randomColor() {
  color1 = {
    r: random(0,255),
    g: random(0,255),
    b: random(0,255)
  }

  color2 = {
    r: random(0,255),
    g: random(0,255),
    b: random(0,255)
  }

  color3 = {
    r: random(0,255),
    g: random(0,255),
    b: random(0,255)
  }

  color4 = {
    r: random(0,255),
    g: random(0,255),
    b: random(0,255)
  }

  color5 = {
    r: random(0,255),
    g: random(0,255),
    b: random(0,255)
  }

  color6 = {
    r: random(0,255),
    g: random(0,255),
    b: random(0,255)
  }

  color7 = {
    r: random(0,255),
    g: random(0,255),
    b: random(0,255)
  }

  color8 = {
    r: random(0,255),
    g: random(0,255),
    b: random(0,255)
  }

  color9 = {
    r: random(0,255),
    g: random(0,255),
    b: random(0,255)
  }

  color10 = {
    r: random(0,255),
    g: random(0,255),
    b: random(0,255)
  }

  color11 = {
    r: random(0,255),
    g: random(0,255),
    b: random(0,255)
  }

  color12 = {
    r: random(0,255),
    g: random(0,255),
    b: random(0,255)
  }
}

window.mobilecheck = function() {
  check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

if (check == true) {
  console.log('using mobile');
  alert('whoops, it looks like your on your phone. try using a computer for the best experience');
} else {
  console.log('using desktop');
}

function newDrawing(data) {
  noStroke();


  fill(data.color.r, data.color.g, data.color.b);
   if (data.y > 75) {
  ellipse(data.x, data.y, data.penSize, data.penSize);
}
}

function mouseDragged() {
  console.log('Sending: ' + mouseX + ',' + mouseY)

  var data = {
    x: mouseX,
    y: mouseY,
    color: color,
    penSize: penSize,
  }

  socket.emit('mouse', data);

    noStroke();
    fill(data.color.r, data.color.g, data.color.b);
    if (mouseY > 75) {
    ellipse(mouseX, mouseY, penSize, penSize)
  }

  socket.on('browserReload', function () {
     document.location.reload(true);
  });
}

function mousePressed() {
  let d = dist(mouseX, mouseY, 1050, 90);
  if (d < 40) {
    rSlider.value(color1.r);
    gSlider.value(color1.g);
    bSlider.value(color1.b);
  }
  d = dist(mouseX, mouseY, 1050, 140);
  if (d < 40) {
    rSlider.value(color2.r);
    gSlider.value(color2.g);
    bSlider.value(color2.b);
  }
  d = dist(mouseX, mouseY, 1050, 190);
  if (d < 40) {
    rSlider.value(color3.r);
    gSlider.value(color3.g);
    bSlider.value(color3.b);
  }
  d = dist(mouseX, mouseY, 1050, 240);
  if (d < 40) {
    rSlider.value(color4.r);
    gSlider.value(color4.g);
    bSlider.value(color4.b);
  }

  d = dist(mouseX, mouseY, 1100, 90);
  if (d < 40) {
    rSlider.value(color5.r);
    gSlider.value(color5.g);
    bSlider.value(color5.b);
  }
  d = dist(mouseX, mouseY, 1100, 140);
  if (d < 40) {
    rSlider.value(color6.r);
    gSlider.value(color6.g);
    bSlider.value(color6.b);
  }
  d = dist(mouseX, mouseY, 1100, 190);
  if (d < 40) {
    rSlider.value(color7.r);
    gSlider.value(color7.g);
    bSlider.value(color7.b);
  }
  d = dist(mouseX, mouseY, 1100, 240);
  if (d < 40) {
    rSlider.value(color8.r);
    gSlider.value(color8.g);
    bSlider.value(color8.b);
  }

  d = dist(mouseX, mouseY, 1150, 90);
  if (d < 40) {
    rSlider.value(color9.r);
    gSlider.value(color9.g);
    bSlider.value(color9.b);
  }
  d = dist(mouseX, mouseY, 1150, 140);
  if (d < 40) {
    rSlider.value(color10.r);
    gSlider.value(color10.g);
    bSlider.value(color10.b);
  }
  d = dist(mouseX, mouseY, 1150, 190);
  if (d < 40) {
    rSlider.value(color11.r);
    gSlider.value(color11.g);
    bSlider.value(color11.b);
  }
  d = dist(mouseX, mouseY, 1150, 240);
  if (d < 40) {
    rSlider.value(color12.r);
    gSlider.value(color12.g);
    bSlider.value(color12.b);
  }
}

function draw() {
  textFont(roboto);
  textSize(20);
  fill(0);
  rect(0, 0, 1200, 75);
  rect(1000,0,200,800);

  fill(255);
  text(rSlider.value(), 175, 20);
  text(gSlider.value(), 175, 40);
  text(bSlider.value(), 175, 60);

  penSize = penSlider.value();
  text(penSlider.value(), 540, 40);
  text('pen size', 400, 25);
  ellipse(630, 35, penSlider.value(), penSlider.value());

  textSize(20);
  text('current',240,20);
  text('color:',240,40)
  fill(color.r, color.g, color.b);
  ellipse(330,25,35,35);

  fill(255);
  textSize(30);
  text('color codes', 1010, 35);


  fill(color1.r,color1.g,color1.b);
  ellipse(1050, 90, 25, 25);
  fill(color2.r,color2.g,color2.b);
  ellipse(1050, 140, 25, 25);
  fill(color3.r,color3.g,color3.b);
  ellipse(1050, 190, 25, 25);
  fill(color4.r,color4.g,color4.b);
  ellipse(1050, 240, 25, 25);

  fill(color5.r,color5.g,color5.b);
  ellipse(1100, 90, 25, 25);
  fill(color6.r,color6.g,color6.b);
  ellipse(1100, 140, 25, 25);
  fill(color7.r,color7.g,color7.b);
  ellipse(1100, 190, 25, 25);
  fill(color8.r,color8.g,color8.b);
  ellipse(1100, 240, 25, 25);

  fill(color9.r,color9.g,color9.b);
  ellipse(1150, 90, 25, 25);
  fill(color10.r,color10.g,color10.b);
  ellipse(1150, 140, 25, 25);
  fill(color11.r,color11.g,color11.b);
  ellipse(1150, 190, 25, 25);
  fill(color12.r,color12.g,color12.b);
  ellipse(1150, 240, 25, 25);

  color = {
    r: rSlider.value(),
    g: gSlider.value(),
    b: bSlider.value()
  }
}

function keyTyped() {
  if (key === 'p') {
    color = {
      r: random(255),
      g: random(255),
      b: random(255)
    }
  }

  if (key == 'z') {
    console.log('clear');
    socket.emit('clear')
  }

  if (key == 'q') {
    penSize = penSize - 5
  }

  if (key == 'w') {
    penSize = penSize + 5
  }


}
