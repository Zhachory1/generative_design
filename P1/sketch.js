function setup_default() {
	createCanvas(displayWidth, displayHeight);
	noStroke();

	textSize(32);
	textAlign(LEFT, TOP)
}


/****************************************************
1.0
*****************************************************/
function setup_1_0() {
	minSide = min(displayWidth, displayHeight)
	createCanvas(minSide, minSide);
	noCursor();

	colorMode(HSB, minSide/2, 100, 100);
	rectMode(CENTER);
	noStroke();

	textSize(32);
	textAlign(LEFT, TOP)
}

function draw_1_0() {
	background(mouseY/2, 100, 100);

	fill((width/2)-(mouseY/2), 100, 100);
	rect(width/2, width/2, mouseX+1, mouseX+1);
	text("P1.0", 0, 0);
}
/****************************************************/

/****************************************************
1.1.1
*****************************************************/
var stepX;
var stepY;

function draw_1_1_1() {
  colorMode(HSB, width, height, 100);
	stepY = mouseY+2;
	stepX = mouseX+2;

	for (var gridY = 0; gridY < height; gridY += stepY) {
		for (gridX =0; gridX < width; gridX += stepX) {
			fill(gridX, height-gridY, 100);
			rect(gridX, gridY, stepX, stepY);
		}
	}


	fill("black");
	text("P1.1.1", 0, 0);
}
/****************************************************/

/****************************************************
1.1.2
*****************************************************/
var segmentCount = 24;
function draw_1_1_2() {
  var radius = min(height,width)/3;
	colorMode(HSB, 360, width, height);
  background(360, 0, height);

  var angleStep = 360 / segmentCount;
  beginShape(TRIANGLE_FAN);
  vertex(width/3, height/3);
  
  for (var angle=0; angle <= 360; angle += angleStep) {
    var vx = width/3 + cos(radians(angle))*radius;
    var vy = height/3 + sin(radians(angle))*radius;
    vertex(vx, vy);
    fill(angle, mouseX, mouseY);
  }
  endShape();

	fill("black");
	text("P1.1.2", 0, 0);
}

function keyPressed_1_1_2() {
  switch(key) {
    case '1':
      segmentCount = 360;
      break;
    case '2':
      segmentCount = 45;
      break;
    case '3':
      segmentCount = 24;
      break;
    case '4':
      segmentCount = 12;
      break;
    case '5':
      segmentCount = 6;
      break;
  }
}
/****************************************************/

/****************************************************
1.2.1
*****************************************************/
var colorsLeft, colorsRight;
function setRandomColors() {
  colorsLeft=[];
  colorsRight=[];
  
  // Setup 10 similar colors (different saturation and brightness) into colorsLeft and colorsRight
  var leftHue = int(random(100));
  var rightHue = int(random(100));
  for (var cnt = 0; cnt < 10; cnt++) {
    colorsLeft.push(color(leftHue, int(random(25, 100)), int(random(25, 100))));
    colorsRight.push(color(rightHue, int(random(25, 100)), int(random(25, 100))));
  }
}

function setup_1_2_1() {
  setup_default();
  colorMode(HSB, 100);
  
  setRandomColors();
}
 
function draw_1_2_1() {
  tileCountX = int(map(mouseX, 0, width, 2, 100));
  tileCountY = int(map(mouseY, 0, height, 2, 10));
 
  var tileWidth = width/tileCountX;
  var tileHeight = height/tileCountY;
  var interCol;
  
  for (var gridY = 0; gridY < tileCountY; gridY++) {
    var col1 = colorsLeft[gridY];
    var col2 = colorsRight[gridY];
    
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var amount = map(gridX, 0, tileCountX-1, 0, 1);
      interCol = lerpColor(col1, col2, amount);
      
      fill(interCol);
      
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);
    }
  }

	fill("black");
	text("P1.2.1", 0, 0);
}

function mousePressed_1_2_1() {
  setRandomColors();
}
/****************************************************/

function main() {
	const url = new URL(window.location.href);
	switch (url.hash) {
		case '#1.0':
			window.setup = setup_1_0;
			window.draw = draw_1_0;
			break;
		case '#1.1.1':
			window.setup = setup_default;
			window.draw = draw_1_1_1;
			break;
    case '#1.1.2':
			window.setup = setup_default;
			window.draw = draw_1_1_2;
			window.keyPressed = keyPressed_1_1_2;
			break;
    case '#1.2.1':
			window.setup = setup_1_2_1;
			window.draw = draw_1_2_1;
      window.mousePressed = mousePressed_1_2_1;
			break;
		default:
			window.setup = setup_1_0;
			window.draw = draw_1_0;
			url.hash = "#1.0";
			break;
	}
}

main();