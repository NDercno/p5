var drops = [];
var dif = true;
var range = 0.5;

class Player
{
	constructor(width)
	{
		this.width = width;
		this.h = 30;
	}
	step()
	{
		this.x = mouseX;
	}
	paint()
	{
		if(this.killed == true)
		{
			fill(255,100,100);
		}
		else
		{
			fill(100,255,100);
		}
		rect(0,height-this.h,width,this.h);		
		
		fill(255,100,100);
		rect(this.x-this.width/2, height - this.h, this.width, this.h);
	}
}

var player = new Player(30);

class Drop
{
	constructor(x, y, xspeed, yspeed)
	{
		this.x = x;
		this.y = y;
		if(dif)
		{
			this.xspeed = xspeed;
		} else
		{
			this.xspeed = 0;
		}
		this.yspeed = yspeed;
	}

	step()
	{
		this.y += this.yspeed;
		this.x += this.xspeed;
		
		if(this.y > height - player.h)
		{
			if(this.x > mouseX - player.width/2 && this.x < mouseX + player.width/2)
			{
				player.killed = true;
			}
			
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
		strokeWeight(6);
		stroke(255);
		line(this.x, this.y, this.x + this.xspeed * 5, this.y+20);
	}

}

d = new Drop(300,0);

function setup() 
{
	//createCanvas(1900,1060);
	createCanvas(1300,800);
	drops = [new Drop(mouseX, 0, 0, 10)];
}

var ticker = 0;
var maxTick = 250;

function draw()
{
	background(51,51,51,100);

	fill(255);
	textAlign(LEFT);
	textSize(20);
	
	if(!player.killed)
	{
		ticker++;
	}
	
	if(ticker > maxTick)
	{
		ticker = 0;
		maxTick = random(120);
		drops.push(new Drop(random(width),0, random(-range,range), random(5,15)));
	}

	noStroke();
	fill(255);
	rect(32,32,ticker,50);
	
	noFill();
	strokeWeight(3);
	stroke(255);
	rect(32,32,maxTick,50);
	
	for(let i = 0; i < drops.length; i++)
	{
		drops[i].step();
		drops[i].paint();
	}
	
	if(player.killed)
	{
		noStroke();
		fill(255,0,0);
		textAlign(CENTER);
		textSize(64);
		text("anna stinkt haha :D", width/2, height/2 - 70);
		text("Deine Punktzahl: " + drops.length, width/2, height/2 );
		text("F5 = Neustart", width/2, height/2 + 70);
	}
	
	noStroke();
	player.step();
	player.paint();
	
}
