

//自機の歩行アニメーション
function objMove( obj, n, a, b, c )
{
	//静止からの動き出し時、他方向からの方向転換時にまず右足を出す。
	if( obj.snum != a && obj.snum != b && obj.snum != c || obj.flag == 0 )
	{
		obj.snum = a;
		if( obj.walco%n == 0 )obj.flag = 1;
	}
	
	//フラグで最初から最後まで面倒見る
	if( obj.walco%n == 1 && obj.flag == 1 )
	{
		obj.snum = b;
		obj.flag = 2;
	}
	else if( obj.walco%n == 1 && obj.flag == 2 )
	{
		obj.snum = c;
		obj.flag = 3;
	}
	else if( obj.walco%n == 1 && obj.flag == 3 )
	{
		obj.snum = b;
		obj.flag = 4;
	}
	else if( obj.walco%n == 1 && obj.flag == 4 )
	{
		obj.snum = a;
		obj.flag = 1;
	}
}



//画面端の当たり判定
function screenHit( direction, jiki )
{
	//なんかよくわかんないけどしっくり画面端の当たり判定するための調整用
	let s = 7;
	let t = 17;
	
	if( direction == "left" )
	{
		if( jiki.foot_x - s <= 0 )return false;
	}
	
	else if( direction == "right" )
	{
		if( FIELD_W <= jiki.foot_x + jiki.foot_sw )return false;
	}
	
	else if( direction == "up" )
	{
		if( jiki.y + t <= 0 )return false;
	}
	
	else if( direction == "down" )
	{
		if( FIELD_H <= jiki.foot_y + jiki.foot_sh  )return false;
	}
	
	return true;
}




//プレイヤーとオブジェクトの当たり判定
function onObjCheckHit( direction, jiki )
{
	for( let i=0; i<obj.length; i++ )
	{
		if( checkHit( direction,
		
			jiki.foot_x, jiki.foot_y, jiki.foot_sw, jiki.foot_sh,
			obj[i].x, obj[i].y, obj[i].sz, obj[i].sz
		
		) )
		{
			return false;
			break;
		}
	}
	return true;
}

//オブジェクト直前でのプレイヤーとモブの挙動
function moveNearByObj( jiki )
{
	
}


//自機とモブの当たり判定
function playerOnMobCheckHit( direction, jiki, mob )
{
	for( let i=0; i<mob.length; i++ )
	{
	
		if( checkHit( direction,
		
			jiki.foot_x, jiki.foot_y, jiki.foot_sw, jiki.foot_sh,
			mob[i].x, mob[i].y+45, mob[i].sz, mob[i].sz-5
			
		) )
		{
			return false;
			break;
		}
	}
	return true;
}






//自機クラス
class Jiki
{
	constructor()
	{
		this.x     = 96; //Math.floor( Math.random()*800 );
		this.y     = 320; //Math.floor( Math.random()*800 );
		this.sw    = TILESIZE;
		this.sh    = TILESIZE*2;
		this.speed = 2;
		this.snum  = 1;
		this.walco = 0;
		this.flag  = 0;
		this.sz    = 32;
		
		this.foot_x  = this.x + 10;
		this.foot_y  = this.y + this.sh - 5;
		this.foot_sw = 16;
		this.foot_sh = 5;
		this.n = 10;
	}
	
	update()
	{
		if( key[37] )
		{
			if( onObjCheckHit( "left", this ) && playerOnMobCheckHit( "left", this, mob ) && screenHit( "left", this ) )
			{
				this.x -= this.speed;
				this.foot_x -= this.speed;
			}
			
			this.walco++;
			
			objMove( this, this.n, 3, 4, 5 );
		}
		
		else if( key[39] )
		{
			if( onObjCheckHit( "right", this ) && playerOnMobCheckHit( "right", this, mob ) && screenHit( "right", this ) )
			{
				this.x += this.speed;
				this.foot_x += this.speed;
			}
			
			this.walco++;
			
			objMove( this, this.n, 6, 7, 8 );
		}
		
		else if( key[38] )
		{
			if( onObjCheckHit( "up", this ) && playerOnMobCheckHit( "up", this, mob ) && screenHit( "up", this ) )
			{
				this.y -= this.speed;
				this.foot_y -= this.speed;
			}
			
			this.walco++;
			
			objMove( this, this.n, 9, 10, 11 );
		}
		
		else if( key[40] )
		{
			if( onObjCheckHit( "down", this ) && playerOnMobCheckHit( "down", this, mob ) && screenHit( "down", this ) )
			{
				this.y += this.speed;
				this.foot_y += this.speed;
			}
			
			this.walco++;
			
			objMove( this, this.n, 0, 1, 2 );
		}
		else
		{
			//静止時は向いている方向で正立姿勢に戻す
			if( this.snum==0 || this.snum==2  )this.snum=1;
			if( this.snum==3 || this.snum==5  )this.snum=4;
			if( this.snum==6 || this.snum==8  )this.snum=7;
			if( this.snum==9 || this.snum==11 )this.snum=10;
			
			this.flag = 0;
			this.walco = 0;
		}
	}
	
	draw()
	{
		drawSprite( jikiImage, this.snum, spriteJiki, this.x, this.y );
	}
}

let jiki = new Jiki;