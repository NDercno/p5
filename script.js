let angle = 0;

function setup(){
	createCanvas(1920,1080);
}

function draw(){
	background(0);
	translate(width/2,height/2);
	rectMode(CENTER);

	let offset = 0;

	for(let x = 0; x < width; x+= 10)
	{
	let a = angle+offset;
	let h = map(sin(a), -1, 1, 0, mouseY);
	fill(255);
	rect(x - width/2,0,10,h);
	offset += mouseX/500;
	}
	angle += 0.1;
}
