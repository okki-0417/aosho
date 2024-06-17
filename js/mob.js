
//モブクラス
class Mob
{
	constructor( x, y, left, right, up, down )
	{
		this.x = x;
		this.y = y;
		this.sw = TILESIZE;
		this.sh = TILESIZE*2;
		this.sz = TILESIZE;
		this.snum = down;
		this.n = 10;
		this.walco = 0;
		this.poss = 300;
		this.sign = Math.floor( Math.random()*this.poss );
		
		this.foot_x  = this.x + 10;
		this.foot_y  = this.y + this.sh - 5;
		this.foot_sw = 16;
		this.foot_sh = 5;
		
		this.snumL = left;
		this.snumR = right;
		this.snumU = up;
		this.snumD = down;
		
		this.speed = 1;
		
		this.flag = 0;
		
		this.span = 30;
		
	}
	
	update()
	{
		if( this.sign == 0  )
		{
			if( onObjCheckHit( "left", this ) && playerOnMobCheckHit( "left", this, jiki ) && screenHit( "left", this ) )
			{
				this.x -= this.speed;
				this.foot_x -= this.speed;
			}
			
			this.walco++;
			
			objMove( this, this.n, this.snumL-1, this.snumL, this.snum+1 );
			
			if( this.walco % this.span == 0 )
			{
				this.sign = Math.floor( Math.random()*this.poss );
			}
		}
		
		else if( this.sign == 1 )
		{
			if( onObjCheckHit( "right", this ) && playerOnMobCheckHit( "right", jiki, this ) && screenHit( "right", this ) )
			{
				this.x += this.speed;
				this.foot_x += this.speed;
			}
			
			this.walco++;
			
			objMove( this, this.n,this.snumR-1, this.snumR, this.snumR+1 );
			
			if( this.walco % this.span == 0 )
			{
				this.sign = Math.floor( Math.random()*this.poss );
			}
		}
		
		else if( this.sign == 2 )
		{
			if( onObjCheckHit( "up", this ) &&  playerOnMobCheckHit( "up", jiki, this ) && screenHit( "up", this ) )
			{
				this.y -= this.speed;
				this.foot_y -= this.speed;
			}
			
			this.walco++;
			
			objMove( this, this.n, this.snumU-1, this.snumU, this.snumU+1 );
			
			if( this.walco % this.span == 0 )
			{
				this.sign = Math.floor( Math.random()*this.poss );
			}
		}
		
		else if( this.sign == 3 )
		{
			if( onObjCheckHit( "down", this ) &&  playerOnMobCheckHit( "down", jiki, this ) && screenHit( "down", this ) )
			{
				this.y += this.speed;
				this.foot_y += this.speed;
			}
			
			this.walco++;
			
			objMove( this, this.n, this.snumD-1, this.snumD, this.snumD+1 );
			
			if( this.walco % this.span == 0 )
			{
				this.sign = Math.floor( Math.random()*this.poss );
			}
		}
		else
		{
			//静止時は向いている方向で正立姿勢に戻す
			if( this.snum==this.snumL-1 || this.snum==this.snumL+1 )this.snum=this.snumL;
			if( this.snum==this.snumR-1 || this.snum==this.snumR+1 )this.snum=this.snumR;
			if( this.snum==this.snumU-1 || this.snum==this.snumU+1 )this.snum=this.snumU;
			if( this.snum==this.snumD-1 || this.snum==this.snumD+1 )this.snum=this.snumD;
			
			this.walco = 0;
			
			this.flag = 0;
			
			this.sign = Math.floor( Math.random()*360 );
		}
	}
	
	draw()
	{
		drawSprite( jikiImage, this.snum, spriteJiki, this.x, this.y );
	}
}

let mob = [
	new Mob( 600, 300, 52, 55, 58, 49 )
]