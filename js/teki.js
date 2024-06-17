
class Teki
{
	constructor()
	{
		this.x = Math.floor( Math.random()*800 );
		this.y = Math.floor( Math.random()*800 );
		this.sw = 64;
		this.sh = 112;
		this.foot_x = this.x + 20;
		this.foot_y = this.y + this.sh - 10;
		this.foot_sw = 26
		this.foot_sh = 8;
		this.snum = 0;
		this.speed = 1.9;
		this.walco = 0;
		this.flag = 0;
		this.n = 4;
	}
	
	update()
	{
		if( this.foot_x + this.foot_sw <= jiki.foot_x )
		{
			this.x += this.speed;
			this.foot_x += this.speed;
			
			objMove( teki, this.n, 7, 6, 8 );
			
			this.walco++;
		}
		else if( jiki.foot_x + jiki.foot_sw <= this.foot_x )
		{
			this.x -= this.speed;
			this.foot_x -= this.speed;
			
			objMove( teki, this.n, 4, 3, 5 );
			
			this.walco++;
		}
		else if( this.foot_y + this.foot_sh <= jiki.foot_y )
		{
			this.y += this.speed;
			this.foot_y += this.speed;
			
			objMove( teki, this.n, 1, 0, 2 );
			
			this.walco++;
		}
		else if( jiki.foot_y + jiki.foot_sh <= this.foot_y )
		{
			this.y -= this.speed;
			this.foot_y -= this.speed;
			
			objMove( teki, this.n, 10, 9, 11 );
			
			this.walco++;
		}
	}
	
	draw()
	{
		drawSprite( aooniImage, this.snum, spriteAooni, this.x, this.y );
	}
}

let teki = new Teki;
