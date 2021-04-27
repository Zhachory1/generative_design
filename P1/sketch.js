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
function setup_1_1_1() {
	createCanvas(displayWidth, displayHeight);
	colorMode(HSB, width, height, 100);
	noStroke();

	textSize(32);
	textAlign(LEFT, TOP)
}

function draw_1_1_1() {
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

function main() {
	const url = new URL(window.location.href);
	switch (url.hash) {
		case '#1.0':
			window.setup = setup_1_0;
			window.draw = draw_1_0;
			break;
		case '#1.1.1':
			window.setup = setup_1_1_1;
			window.draw = draw_1_1_1;
			break;
		default:
			window.setup = setup_1_0;
			window.draw = draw_1_0;
			url.hash = "#1.0";
			break;
	}
}

main();