drops = [];

class Drop
{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	step()
	{
		this.y+=10;
		if(this.y > height)
		{
			this.y = 0;
			this.x = random(width);
			if(this == drops[0])
			{
				this.x = mouseX;
			}
		}
	}

	paint()
	{
		strokeWeight(3);
		stroke(255);
		line(this.x, this.y, this.x, this.y+30);
	}

}

d = new Drop(300,0);

function setup() {
	createCanvas(1200,700);
}

ticker = 0;
maxTick = 500;

function draw(){
	background(51,51,51,100);

	ticker++;
	if(ticker > maxTick){
		ticker = 0;
		maxTick = random(500);
		drops.push(new Drop(random(width),0));
	}

	fill(255);
	//noStroke();
	for(let i = 0; i < drops.length; i++)
	{
	drops[i].step();
	drops[i].paint();
	}
}