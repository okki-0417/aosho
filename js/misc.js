


//ファイルを読み込み
let townForestBgImage = new Image();
townForestBgImage.src = "img/townForestBg.png";

let townForestAcceImage = new Image();
townForestAcceImage.src = "img/townForestAcce.png";

let jikiImage = new Image();
jikiImage.src = "img/LF-Chara-Sogen01.png";

let aooniImage = new Image();
aooniImage.src = "img/aooni.png";



//キーボードの状態
let key = [];



//キーボードが押されたとき
document.onkeydown = function(e)
{
	key[ e.keyCode ] = true;
}

//キーボードが離されたとき
document.onkeyup = function(e)
{
	key[ e.keyCode ] = false;
}



//当たり判定
function checkHit( direction, x1, y1, w1, h1, x2, y2, w2, h2 )
{
	//矩形同士の当たり判定を今からします
	
	//調整用の値
	let p = 2;
	
	//左右上下を定義する
	let left1   = x1 - p;
	let right1  = left1 + w1 + p;
	let top1    = y1 - p;
	let bottom1 = top1 + h1 + p;
	
	let left2   = x2;
	let right2  = left2 + w2; ;
	let top2    = y2 - p;
	let bottom2 = top2 + h2;
	
	//上方向の当たり判定
	if( direction == "up" )
		return( ( top2 <= top1 && top1 <= bottom2 )  &&
				( ( left1    <= left2  && left2   < right1 )  ||
			  		( left1  < right2 && right2  <= right1 )  ||
			  		( left2  <= left1  && right1  <= right2 ) ) );
			  		
	//下方向の当たり判定
	if( direction == "down" )
		return( ( top2 <= bottom1 && bottom1 <= bottom2 )  &&
			( ( left1    <= left2  && left2   < right1 )  ||
		  		( left1  < right2 && right2  <= right1 )  ||
		  		( left2  <= left1  && right1  <= right2 ) ) );
		  		
	//右方向の当たり判定
	if( direction == "right" )
		return( ( left2 <= right1 && right1 <= right2 )  &&
			( ( top1    <= top2  && top2   < bottom1 )  ||
		  		( top1  < bottom2 && bottom2  <= bottom1 )  ||
		  		( top2  <= top1  && bottom1  <= bottom2 ) ) );
		  		
	//左方向の当たり判定
	if( direction == "left" )
		return( ( left2 <= left1 && left1 <= right2 )  &&
			( ( top1    <= top2  && top2   < bottom1 )  ||
		  		( top1  < bottom2 && bottom2  <= bottom1 )  ||
		  		( top2  <= top1  && bottom1  <= bottom2 ) ) );
}


//プレイヤーとオブジェクトが近づいた際のプレイヤーの移動速度調整

