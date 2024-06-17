let p = 0;


const SMOOTHING = false;



//ゲームスピード
const GAME_SPEED = 1000/60;


//スクリーンサイズ
const SCREEN_W = 480;
const SCREEN_H = 480;


//キャンバスサイズ
const CANVAS_W = SCREEN_W;
const CANVAS_H = SCREEN_H;



//フィールドサイズ
const FIELD_W = TILESIZE*MAP_SIZE;
const FIELD_H = TILESIZE*MAP_SIZE;



//フィールドのマス数
const BLOCK_W = FIELD_W / TILESIZE;
const BLOCK_H = FIELD_H / TILESIZE;


//カメラの座標
let camera_x = 0;
let camera_y = 0;


//キャンバス
let can = document.getElementById("can");
let con = can.getContext("2d");
can.style.border = "4px solid";
can.width  = CANVAS_W;
can.height = CANVAS_H;


//仮想画面
let vcan = document.createElement("canvas");
let vcon = vcan.getContext("2d");
vcan.width  = FIELD_W;
vcan.height = FIELD_H;


//画像のスムージング
con.mojimageSmoothingEnabled    = SMOOTHING;
con.webkitimageSmoothingEnabled = SMOOTHING;
con.msimageSmoothingEnabeled    = SMOOTHING;
con.imageSmoothingEnabled       = SMOOTHING;




//背景を描画する
function drawTiles( image, map, sprite )
{
	for( let y=0;y<MAP_SIZE;y++ )
	{
		for( let x=0;x<MAP_SIZE;x++ )
		{
			snum = map[ y * MAP_SIZE + x ];
			
			drawSprite( image, snum, sprite, x*TILESIZE, y*TILESIZE );
		}
	}
}



//各タイルに当たり判定を付与
function judgeMap()
{
	for( let y=0;y<MAP_SIZE;y++ )
	{
		for( let x=0;x<MAP_SIZE;x++ )
		{
			if( HitMap[ y * MAP_SIZE + x ]==1 )
			obj.push( new Obj( x*TILESIZE, y*TILESIZE ) );
		}
	}
}


//自機を仮想マップに表示
function drawSprite( image, snum, name, x, y )
{
	let sx = name[snum].x
	let sy = name[snum].y
	let sw = name[snum].sw;
	let sh = name[snum].sh;
	
	//if( px+sw<camera_x || px>=camera_x+SCREEN_W
	//	|| py+sh<camera_y || py>=camera_y+SCREEN_H )return;
	
	vcon.drawImage( image, sx, sy, sw, sh, x, y, sw, sh );
}


//いろいろなものが描画される層を調整する
function reDrawTiles()
{
	//自機キャラの見た目通りの体で当たり判定を行うための調整用
	let body = 5;
	let head = 20;
	
	//プレイヤーとオブジェクトの描画層調整
	if( obj.length )
	{
		for( let i=0;i<obj.length;i++ )
		{
			//見た目上の体で当たり判定
			if( checkHit( "up", jiki.x+body, jiki.y+head, jiki.sw-body, jiki.sh-head,
							obj[i].x, obj[i].y, obj[i].sz, obj[i].sz ) ||
			
			//オブジェクトから頭がはみ出ると当たり判定が機能しないから頭より少し下の体の部分でも判定する
				checkHit( "up", jiki.x+body, jiki.y+head+10, jiki.sw-body, jiki.sh-head-10,
							obj[i].x, obj[i].y, obj[i].sz, obj[i].sz ) )jiki.draw();
		}
	}
	
	//プレイヤーとモブの描画層調整
	if( mob.length )
	{
		//プレイヤーとモブの下半身が重なってるなら自機を再描画
		for( let i=0; i<mob.length; i++ )
		{
			if( checkHit( "up", jiki.x+body, jiki.y+head, jiki.sw-body*2, jiki.sh-head,
								mob[i].x, mob[i].y+TILESIZE, mob[i].sz, mob[i].sz ) )
				jiki.draw();
		}
		
		//モブとプレイヤーの下半身が重なってるなら自機を再描画
		for( let i=0; i<mob.length; i++ )
		{
			//プレイヤーとモブの下半身が重なってるなら自機を再描画
			if( checkHit( "up", mob[i].x+body, mob[i].y+head, mob[i].sw-body*2, mob[i].sh-head,
								jiki.x, jiki.y+TILESIZE, jiki.sz, jiki.sz ) )
				mob[i].draw();
		}
	}
	
	//モブとオブジェクトの描画層調整。
	if( mob.length && obj.length )
	{
		for( let i=0; i<mob.length; i++ )
		{
			for( let j=0; j<obj.length; j++ )
			{
				if( checkHit( "up", mob[i].x+body, mob[i].y+head, mob[i].sw-body,mob[i].sh-head,
									obj[j].x, obj[j].y, obj[j].sz, obj[j].sz ) ||
									
					checkHit( "up", mob[i].x+body, mob[i].y+head+10, mob[i].sw-body, mob[i].sh-body-10,
									obj[j].x, obj[j].y, obj[j].sz, obj[j].sz ) )
					mob[i].draw()
			}
		}
	}
}


//すべてをアップデート
function updateAll()
{
	jiki.update();
	
	for( let i=0; i<mob.length; i++ )
	{
		mob[i].update();
	}
}

//すべてを描画
function drawAll()
{
	jiki.draw();
	
	for( let i=0; i<mob.length; i++ )
	{
		mob[i].draw();
	}
}


//ゲームループ
function GAMELOOP()
{
	vcon.clearRect(0,0,CANVAS_W,CANVAS_H);
	con.clearRect(0,0,CANVAS_W,CANVAS_H);
	
	//カメラの位置を決定
	if( CANVAS_W/2-17<=jiki.x && jiki.x+jiki.sw<=FIELD_W-CANVAS_W/2+17 )
		camera_x = jiki.x + jiki.sw/2 - CANVAS_W/2;
		
	if( CANVAS_H/2-32<=jiki.y && jiki.y+jiki.sh<=FIELD_H-CANVAS_H/2+33 )
		camera_y = jiki.y + jiki.sh/2 - CANVAS_H/2;
	
	drawTiles( townForestBgImage, Map, spriteForestBg );
	
	updateAll();
	
	drawAll();
	
	drawTiles( townForestAcceImage, Map2, spriteForestAcce );
	
	reDrawTiles();
	
	con.drawImage( vcan, camera_x, camera_y, SCREEN_W, SCREEN_H,
					0, 0, CANVAS_W, CANVAS_H );
}



window.onload = function()
{
	judgeMap();
	setInterval( GAMELOOP, GAME_SPEED );
	
}
