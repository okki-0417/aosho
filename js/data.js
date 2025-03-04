


//1タイルのピクセル数
const TILESIZE = 32;

//マップのタイル数
let MAP_SIZE = 32;


class Sprite
{
	constructor( x, y, sw, sh )
	{
 		this.x   = x*TILESIZE;
 		this.y   = y*TILESIZE;
		this.sw  = sw*TILESIZE;
		this.sh  = sh*TILESIZE;
	}
}

console.time( "spriteForestBg" );
let spriteForestBg = [

	new Sprite(  6,  0, 1, 1 ),			//  0.空白

	new Sprite(  0,  0, 1, 1 ),			//  1.丸い水たまり
	new Sprite(  2,  0, 1, 1 ),			//  2.丸い水たまり2
	new Sprite(  4,  0, 1, 1 ),			//  3.丸い水たまり3
	
	new Sprite(  1,  0, 1, 1 ),			//  4.十字水たまり
	new Sprite(  3,  0, 1, 1 ),			//  5.十字水たまり2
	new Sprite(  5,  0, 1, 1 ),			//  6.十字水たまり3
	
	new Sprite(  0,  6, 1, 1 ),			//  7.浅丸水たまり
	new Sprite(  2,  6, 1, 1 ),			//  8.浅丸水たまり2
	new Sprite(  4,  6, 1, 1 ),			//  9.浅丸水たまり3
	
	new Sprite(  1,  6, 1, 1 ),			// 10.浅十字水たまり
	new Sprite(  3,  6, 1, 1 ),			// 11.浅十字水たまり2
	new Sprite(  5,  6, 1, 1 ),			// 12.浅十字水たまり3
	
	new Sprite(  9,  0, 1, 1 ),			// 13.人口池
	new Sprite( 11,  0, 1, 1 ),			// 14.人口池2
	new Sprite( 13,  0, 1, 1 ),			// 15.人口池3
	
	new Sprite(  8,  0, 1, 1 ),			// 16.影付き人口池
	new Sprite( 10,  0, 1, 1 ),			// 17.影付き人口池2
	new Sprite( 12,  0, 1, 1 ),			// 18.影付き人口池3
	
	new Sprite(  9,  3, 1, 1 ),			// 19.浅人工池
	new Sprite( 11,  3, 1, 1 ),			// 20.浅人工池2
	new Sprite( 13,  3, 1, 1 ),			// 21.浅人工池3
	
	new Sprite(  8,  3, 1, 1 ),			// 22.影付き浅人工池
	new Sprite( 10,  3, 1, 1 ),			// 23.影付き浅人工池2
	new Sprite( 12,  3, 1, 1 ),			// 24.影付き浅人工池3
	
	new Sprite(  8,  6, 1, 1 ),			// 25.石枠浅人工池
	new Sprite( 10,  6, 1, 1 ),			// 26.石枠浅人工池2
	new Sprite( 12,  6, 1, 1 ),			// 27.石枠浅人工池3
	
	new Sprite(  9,  6, 1, 1 ),			// 28.十字石枠人工池
	new Sprite( 11,  6, 1, 1 ),			// 29.十字石枠人工池2
	new Sprite( 13,  6, 1, 1 ),			// 30.十字石枠人工池3
	
	new Sprite(  8,  9, 1, 1 ),			// 31.石枠浅人工池
	new Sprite( 10,  9, 1, 1 ),			// 32.石枠浅人工池2
	new Sprite( 12,  9, 1, 1 ),			// 33.石枠浅人工池3
	
	new Sprite(  9,  9, 1, 1 ),			// 34.十字石枠浅人工池
	new Sprite( 11,  9, 1, 1 ),			// 35.十字石枠浅人工池2
	new Sprite( 13,  9, 1, 1 ),			// 36.十字石枠浅人工池3
	
	new Sprite(  1,  9, 1, 1 ),			// 37.鮮やか池
	new Sprite(  3,  9, 1, 1 ),			// 38.鮮やか池2
	new Sprite(  5,  9, 1, 1 ),			// 39.鮮やか池3
	
	new Sprite(  0,  9, 1, 1 ),			// 40.枠付き鮮やか池
	new Sprite(  2,  9, 1, 1 ),			// 41.枠付き鮮やか池2
	new Sprite(  4,  9, 1, 1 ),			// 42.枠付き鮮やか池3
	
	new Sprite(  0,  1, 2, 2 ),			// 43.デカ池
	new Sprite(  2,  1, 2, 2 ),			// 44.デカ池2
	new Sprite(  4,  1, 2, 2 ),			// 45.デカ池3
	
	new Sprite(  0,  7, 2, 2 ),			// 46.浅デカ池
	new Sprite(  2,  7, 2, 2 ),			// 47.浅デカ池2
	new Sprite(  4,  7, 2, 2 ),			// 48.浅デカ池3
	
	new Sprite(  8,  1, 2, 2 ),			// 49.デカ人口池
	new Sprite( 10,  1, 2, 2 ),			// 50.デカ人口池2
	new Sprite( 12,  1, 2, 2 ),			// 51.デカ人口池3
	
	new Sprite(  8,  4, 2, 2 ),			// 52.デカ浅人工池
	new Sprite( 10,  4, 2, 2 ),			// 53.デカ浅人工池2
	new Sprite( 12,  4, 2, 2 ),			// 54.デカ浅人工池3
	
	new Sprite(  8,  7, 2, 2 ),			// 55.石枠デカ人工池
	new Sprite( 10,  7, 2, 2 ),			// 56.石枠デカ人工池2
	new Sprite( 12,  7, 2, 2 ),			// 57.石枠デカ人工池3
	
	new Sprite(  8, 10, 2, 2 ),			// 58.石枠浅デカ人口池
	new Sprite( 10, 10, 2, 2 ),			// 59.石枠浅デカ人口池2
	new Sprite( 12, 10, 2, 2 ),			// 60.石枠浅デカ人口池3
	
	new Sprite(  0, 10, 2, 2 ),			// 61.鮮やかデカ池
	new Sprite(  2, 10, 2, 2 ),			// 62.鮮やかデカ池2
	new Sprite(  4, 10, 2, 2 ),			// 63.鮮やかデカ池3
	
	new Sprite( 14,  6, 2, 1 ),			// 64.始滝
	new Sprite( 14,  7, 2, 1 ),			// 65.始滝2
	new Sprite( 14,  8, 2, 1 ),			// 66.始滝3
	
	new Sprite(  6,  6, 2, 1 ),			// 67.始深滝
	new Sprite(  6,  7, 2, 1 ),			// 68.始深滝2
	new Sprite(  6,  8, 2, 1 ),			// 69.始深滝3
	
	new Sprite(  6,  9, 2, 1 ),			// 70.中滝
	new Sprite(  6, 10, 2, 1 ),			// 71.中滝2
	new Sprite(  6, 11, 2, 1 ),			// 72.中滝3
	
	new Sprite( 14,  3, 2, 1 ),			// 73.中岩滝
	new Sprite( 14,  4, 2, 1 ),			// 74.中岩滝2
	new Sprite( 14,  5, 2, 1 ),			// 75.中岩滝3
	
	new Sprite( 14,  0, 2, 1 ),			// 76.下滝
	new Sprite( 14,  1, 2, 1 ),			// 77.下滝2
	new Sprite( 14,  2, 2, 1 ),			// 78.下滝3
	
	new Sprite( 14,  9, 2, 1 ),			// 79.泡立ち滝
	new Sprite( 14, 10, 2, 1 ),			// 80.泡立ち滝2
	new Sprite( 14, 11, 2, 1 ),			// 81.泡立ち滝3
	
	new Sprite(  0, 12, 1, 1 ),			// 82.草原
	new Sprite(  2, 12, 1, 1 ),			// 83.丸い影付き草原
	new Sprite(  4, 12, 1, 1 ),			// 84.丸ハゲ草原
	new Sprite(  6, 12, 1, 1 ),			// 85.丸い山付き草原
	new Sprite(  3, 12, 1, 1 ),			// 86.十字影付き草原
	new Sprite(  5, 12, 1, 1 ),			// 87.十字ハゲ草原
	new Sprite(  7, 12, 1, 1 ),			// 88.十字山付き草原
	
	new Sprite(4.5, 13, 1, 2 ),			// 89.横まっすぐ道
	new Sprite(  4,13.5,2, 1 ),			// 90.縦まっすぐ道
	
	new Sprite(  0,  3, 2, 2 ),			// 91.左から下へ
	new Sprite(  2,  3, 2, 2 ),			// 92.右から上へ
	new Sprite(  4,  3, 2, 2 ),			// 93.左から上へ
	new Sprite(  6,  3, 2, 2 ),			// 94.右から下へ
	
	new Sprite(  4, 13, 2, 1 ),			// 95.道終点上
	new Sprite(  4, 14, 2, 1 ),			// 96.道終点下
	new Sprite(  4, 13, 1, 2 ),			// 97.道終点左
	new Sprite(  5, 13, 1, 2 ),			// 98.道終点右
	
	new Sprite(  8, 18, 1, 3 ),			// 99.家の壁(左)
	new Sprite(  9, 18, 1, 3 ),			//100.家の壁(中)
	new Sprite( 10, 18, 1, 3 ),			//101.家の壁(右)
	new Sprite(  0, 24, 2, 2 ),			//102.道角(左上)
	new Sprite(  2, 24, 2, 2 ),			//103.道角(左下)
	new Sprite(  4, 24, 2, 2 ),			//104.道角(右下)
	new Sprite(  6, 24, 2, 2 ),			//105.道角(右上)
	new Sprite(  8, 24, 2, 2 ),			//106.道終点(左上)
	new Sprite( 10, 24, 2, 2 ),			//107.道終点(右上)
	new Sprite( 12, 24, 2, 2 ),			//108.道終点(右下)
	new Sprite( 14, 24, 2, 2 ),			//109.道終点(左下)
	new Sprite(  0, 26, 1, 1 ),			//110.1マス道角(左上)
	new Sprite(  1, 26, 1, 1 ),			//111.1マス道角(左下)
	new Sprite(  2, 26, 1, 1 ),			//112.1マス道角(右下)
	new Sprite(  3, 26, 1, 1 ),			//113.1マス道角(右上)
	new Sprite(  4, 26, 1, 1 ),			//114.1マス道終点(左上)
	new Sprite(  5, 26, 1, 1 ),			//115.1マス道終点(右上)
	new Sprite(  6, 26, 1, 1 ),			//116.1マス道終点(右下)
	new Sprite(  7, 26, 1, 1 ),			//117.1マス道終点(左下)
	new Sprite(  8, 26, 1, 1 ),			//118.1マス道
	new Sprite(  9, 26, 1, 1 ),			//119.1マス道(下)
	new Sprite( 10, 26, 1, 1 )			//120.1マス道(右)
	
];
console.timeEnd( "spriteForestBg" );


let spriteJiki = 
[
	new Sprite(  0,  0, 1, 2 ),			//  0.正面右足出し女
	new Sprite(  1,  0, 1, 2 ),			//  1.正面正立女
	new Sprite(  2,  0, 1, 2 ),			//  2.正面左足出し女
	new Sprite(  0,  2, 1, 2 ),			//  3.左向き右足出し女
	new Sprite(  1,  2, 1, 2 ),			//  4.左向き正立女
	new Sprite(  2,  2, 1, 2 ),			//  5.左向き左足出し女
	new Sprite(  2,  4, 1, 2 ),			//  6.右向き右足出し女
	new Sprite(  1,  4, 1, 2 ),			//  7.右向き正立女
	new Sprite(  0,  4, 1, 2 ),			//  8.右向き左足出し女
	new Sprite(  0,  6, 1, 2 ),			//  9.後ろ向き右足出し女
	new Sprite(  1,  6, 1, 2 ),			// 10.後ろ向き正立女
	new Sprite(  2,  6, 1, 2 ),			// 11.後ろ向き左足出し女
	
	new Sprite(  6,  0, 1, 2 ),			// 12.正面右足出しモブ女
	new Sprite(  7,  0, 1, 2 ),			// 13.正面正立モブ女
	new Sprite(  8,  0, 1, 2 ),			// 14.正面左足出しモブ女
	new Sprite(  6,  2, 1, 2 ),			// 15.左向き右足出しモブ女
	new Sprite(  7,  2, 1, 2 ),			// 16.左向き正立モブ女
	new Sprite(  8,  2, 1, 2 ),			// 17.左向き左足出しモブ女
	new Sprite(  8,  4, 1, 2 ),			// 18.右向き右足出しモブ女
	new Sprite(  7,  4, 1, 2 ),			// 19.右向き正立モブ女
	new Sprite(  6,  4, 1, 2 ),			// 20.右向き左足出しモブ女
	new Sprite(  6,  6, 1, 2 ),			// 21.後ろ向き右足出しモブ女
	new Sprite(  7,  6, 1, 2 ),			// 22.後ろ向き正立モブ女
	new Sprite(  8,  6, 1, 2 ),			// 23.後ろ向き左足出しモブ女
	
	new Sprite(  0,  8, 1, 2 ),			// 24.正面右足出しモブ女	2
	new Sprite(  1,  8, 1, 2 ),			// 25.正面正立モブ女		2
	new Sprite(  2,  8, 1, 2 ),			// 26.正面左足出しモブ女	2
	new Sprite(  0, 10, 1, 2 ),			// 27.左向き右足出しモブ女	2
	new Sprite(  1, 10, 1, 2 ),			// 28.左向き正立モブ女		2
	new Sprite(  2, 10, 1, 2 ),			// 29.左向き左足出しモブ女	2
	new Sprite(  2, 12, 1, 2 ),			// 30.右向き右足出しモブ女	2
	new Sprite(  1, 12, 1, 2 ),			// 31.右向き正立モブ女		2
	new Sprite(  0, 12, 1, 2 ),			// 32.右向き左足出しモブ女	2
	new Sprite(  0, 14, 1, 2 ),			// 33.後ろ向き右足出しモブ女2
	new Sprite(  1, 14, 1, 2 ),			// 34.後ろ向き正立モブ女	2
	new Sprite(  2, 14, 1, 2 ),			// 35.後ろ向き左足出しモブ女2
	
	new Sprite(  3,  8, 1, 2 ),			// 36.正面右足出しモブ女	3
	new Sprite(  4,  8, 1, 2 ),			// 37.正面正立モブ女		3
	new Sprite(  5,  8, 1, 2 ),			// 38.正面左足出しモブ女	3
	new Sprite(  3, 10, 1, 2 ),			// 39.左向き右足出しモブ女	3
	new Sprite(  4, 10, 1, 2 ),			// 40.左向き正立モブ女		3
	new Sprite(  5, 10, 1, 2 ),			// 41.左向き左足出しモブ女	3
	new Sprite(  5, 12, 1, 2 ),			// 42.右向き右足出しモブ女	3
	new Sprite(  4, 12, 1, 2 ),			// 43.右向き正立モブ女		3
	new Sprite(  3, 12, 1, 2 ),			// 44.右向き左足出しモブ女	3
	new Sprite(  3, 14, 1, 2 ),			// 45.後ろ向き右足出しモブ女3
	new Sprite(  4, 14, 1, 2 ),			// 46.後ろ向き正立モブ女	3
	new Sprite(  5, 14, 1, 2 ),			// 47.後ろ向き左足出しモブ女3
	
	new Sprite(  6,  8, 1, 2 ),			// 48.正面右足出しモブ女	4
	new Sprite(  7,  8, 1, 2 ),			// 49.正面正立モブ女		4
	new Sprite(  8,  8, 1, 2 ),			// 50.正面左足出しモブ女	4
	new Sprite(  6, 10, 1, 2 ),			// 51.左向き右足出しモブ女	4
	new Sprite(  7, 10, 1, 2 ),			// 52.左向き正立モブ女		4
	new Sprite(  8, 10, 1, 2 ),			// 53.左向き左足出しモブ女	4
	new Sprite(  8, 12, 1, 2 ),			// 54.右向き右足出しモブ女	4
	new Sprite(  7, 12, 1, 2 ),			// 55.右向き正立モブ女		4
	new Sprite(  6, 12, 1, 2 ),			// 56.右向き左足出しモブ女	4
	new Sprite(  6, 14, 1, 2 ),			// 57.後ろ向き右足出しモブ女4
	new Sprite(  7, 14, 1, 2 ),			// 58.後ろ向き正立モブ女	4
	new Sprite(  8, 14, 1, 2 ),			// 59.後ろ向き左足出しモブ女4
	
	new Sprite(  9,  8, 1, 2 ),			// 60.正面右足出しモブ女	5
	new Sprite( 10,  8, 1, 2 ),			// 61.正面正立モブ女		5
	new Sprite( 11,  8, 1, 2 ),			// 62.正面左足出しモブ女	5
	new Sprite(  9, 10, 1, 2 ),			// 63.左向き右足出しモブ女	5
	new Sprite( 10, 10, 1, 2 ),			// 64.左向き正立モブ女		5
	new Sprite( 11, 10, 1, 2 ),			// 65.左向き左足出しモブ女	5
	new Sprite( 11, 12, 1, 2 ),			// 66.右向き右足出しモブ女	5
	new Sprite( 10, 12, 1, 2 ),			// 67.右向き正立モブ女		5
	new Sprite(  9, 12, 1, 2 ),			// 68.右向き左足出しモブ女	5
	new Sprite(  9, 14, 1, 2 ),			// 69.後ろ向き右足出しモブ女5
	new Sprite( 10, 14, 1, 2 ),			// 70.後ろ向き正立モブ女	5
	new Sprite( 11, 14, 1, 2 )			// 71.後ろ向き左足出しモブ女5
];

let spriteForestAcce = 
[
	new Sprite(   0,  0, 1, 1 ),			//  0.空白
	new Sprite(   1,  0, 1, 1 ),			//  1.影
	new Sprite(   8,  0, 1, 1 ),			//  2.看板(剣盾)
	new Sprite(   9,  0, 1, 1 ),			//  3.看板(剣)
	new Sprite(  10,  0, 1, 1 ),			//  4.看板(盾)
	new Sprite(  11,  0, 1, 1 ),			//  5.看板(盾)
	new Sprite(  12,  0, 1, 1 ),			//  6.看板(壺)
	new Sprite(  13,  0, 1, 1 ),			//  7.看板(袋)
	new Sprite(  14,  0, 1, 1 ),			//  8.看板(INN)
	new Sprite(  15,  0, 1, 1 ),			//  9.看板(PUB)
	new Sprite(  16,  0, 1, 1 ),			// 10.看板(ビール)
	new Sprite(   8,  1, 1, 1 ),			// 11.看板(魔法陣)
	new Sprite(   9,  1, 1, 1 ),			// 12.看板(杖)
	new Sprite(  10,  1, 1, 1 ),			// 13.看板(羊皮紙とペン)
	new Sprite(  11,  1, 1, 1 ),			// 14.看板(金づち)
	new Sprite(  12,  1, 1, 1 ),			// 15.看板(石)
	new Sprite(  13,  1, 1, 1 ),			// 16.看板(神具)
	new Sprite(  14,  1, 1, 1 ),			// 17.看板(作物)
	new Sprite(  15,  1, 1, 1 ),			// 18.看板(パン)
	new Sprite(   3,  1, 1, 1 ),			// 19.草むら
	new Sprite(   4,  1, 1, 1 ),			// 20.草むら2
	new Sprite(   5,  1, 1, 1 ),			// 21.張り紙(顔)
	new Sprite(   6,  1, 1, 1 ),			// 22.張り紙(文章)
	new Sprite(   7,  1, 1, 1 ),			// 23.張り紙(破れ)
	new Sprite(   0,  2, 4, 5 ),			// 24.大木
	new Sprite(   4,  2, 4, 5 ),			// 25.大木(落葉)
	new Sprite(   0,  1, 1, 1 ),			// 26.鳥の巣(枝付き)
	new Sprite(   1,  1, 1, 1 ),			// 27.鳥の巣(卵入り)
	new Sprite(   2,  1, 1, 1 ),			// 28.鳥の巣(無)
	new Sprite(   2,  0, 1, 1 ),			// 29.草1
	new Sprite(   3,  0, 1, 1 ),			// 30.草2
	new Sprite(   4,  0, 1, 1 ),			// 31.草3
	new Sprite(   5,  0, 1, 1 ),			// 32.キノコ(細)
	new Sprite(   6,  0, 1, 1 ),			// 33.キノコ(大)
	new Sprite(   7,  0, 1, 1 ),			// 34.キノコ(中)
	
	new Sprite(   8,  2, 1, 1 ),			// 35.樽
	new Sprite(   9,  2, 1, 1 ),			// 36.樽(開)
	new Sprite(  10,  2, 1, 1 ),			// 37.樽(破壊)
	new Sprite(  11,  2, 1, 1 ),			// 38.木箱
	new Sprite(  12,  2, 1, 1 ),			// 39.木箱(開)
	new Sprite(  13,  2, 1, 2 ),			// 40.木(縦長)
	new Sprite(  14,  2, 2, 2 ),			// 41.木(丸い)
	new Sprite(   8,  3, 1, 1 ),			// 42.壺
	new Sprite(   9,  3, 1, 1 ),			// 43.壺(開)
	new Sprite(  10,  3, 1, 1 ),			// 44.壺(破壊)
	new Sprite(  11,  3, 1, 1 ),			// 45.薪
	new Sprite(  12,  3, 1, 1 ),			// 46.薪(苔)
	new Sprite(   8,  4, 1, 2 ),			// 47.クワ
	new Sprite(   9,  4, 1, 2 ),			// 48.斧
	new Sprite(  10,  4, 1, 1 ),			// 49.キャベツ
	new Sprite(  11,  4, 1, 1 ),			// 50.野菜？
	new Sprite(  12,  4, 1, 1 ),			// 51.大根
	new Sprite(  13,  4, 1, 2 ),			// 52.かかし
	new Sprite(  14,  4, 2, 2 ),			// 53.木(植木鉢)
	new Sprite(  10,  5, 1, 1 ),			// 54.野菜？(小)
	new Sprite(  11,  5, 1, 1 ),			// 55.花(小)
	new Sprite(  12,  5, 1, 1 ),			// 56.草(小)2
	new Sprite(   0,  7, 1, 1 ),			// 57.やぶ
	new Sprite(   1,  7, 1, 1 ),			// 58.やぶ(花)
	new Sprite(   2,  7, 1, 1 ),			// 59.やぶ(黄花)
	new Sprite( 4.5,  7, 2, 1 ),			// 60.橋(横)
	new Sprite(   7,  7, 1, 2 ),			// 61.橋(縦)
	new Sprite(   8,  6, 6, 2 ),			// 62.物干し竿
	new Sprite(  14,  6, 2, 2 ),			// 63.木と花(植木鉢)
	new Sprite(   0,  7, 1, 1 ),			// 64.岩
	new Sprite(   1,  7, 1, 1 ),			// 65.岩2
	new Sprite(   2,  7, 1, 1 ),			// 66.岩3
	new Sprite(   3,  7, 1, 1 ),			// 67.岩4
	new Sprite(   4,  7, 1, 1 ),			// 68.ハス
	new Sprite(   7,  7, 1, 1 ),			// 69.ハス2
	new Sprite(   8,  7, 1, 1 ),			// 70.花(植木鉢)
	new Sprite(   9,  7, 1, 1 ),			// 71.花(植木鉢)2
	new Sprite(  10,  7, 1, 1 ),			// 72.じょうろ
	new Sprite(  11,  7, 1, 1 ),			// 73.ロープ
	new Sprite(  12,  7, 1, 2 ),			// 74.飛び石
	new Sprite(  13,  7, 2, 1 ),			// 75.ベンチ(横)
	new Sprite(  15,  7, 1, 2 ),			// 76.ベンチ(縦)
	new Sprite(   0,  9, 1, 1 ),			// 77.切り株
	new Sprite(   1,  9, 1, 1 ),			// 78.切り株(ツタ)
	new Sprite(   2,  9, 1, 1 ),			// 79.花
	new Sprite(   3,  9, 1, 1 ),			// 80.ハスの花
	new Sprite(   4,  9, 1, 1 ),			// 81.ハスの花2
	new Sprite(   5,  9, 1, 1 ),			// 82.花(黄色)
	new Sprite(   6,  9, 1, 1 ),			// 83.草むら
	new Sprite(   7,  9, 1, 1 ),			// 84.石 
	new Sprite(   8,  9, 1, 1 ),			// 85.花(植木鉢)3
	new Sprite(   9,  9, 1, 1 ),			// 86.花(植木鉢)4
	new Sprite(  10,  9, 1, 1 ),			// 87.芽(植木鉢)
	new Sprite(  11,  9, 1, 1 ),			// 88.穴
	new Sprite(  13,  9, 1, 1 ),			// 89.一輪の花(黄色)
	new Sprite(  14,  9, 1, 1 ),			// 90.二輪の花(黄色)
	new Sprite(   0, 10, 1, 1 ),			// 91.花(白)
	new Sprite(   1, 10, 1, 1 ),			// 92.花(白)2
	new Sprite(   2, 10, 1, 1 ),			// 93.花(白)3
	new Sprite(   3, 10, 1, 1 ),			// 94.ハスの葉
	new Sprite(   4, 10, 1, 1 ),			// 95.ハスの葉2
	new Sprite(   5, 10, 1, 1 ),			// 96.花
	new Sprite(   6, 10, 1, 2 ),			// 97.ツタ
	new Sprite(   7, 10, 1, 2 ),			// 98.葉(縦)
	new Sprite(   8, 10, 1, 3 ),			// 99.柱
	new Sprite(   9, 10, 1, 3 ),			//100.天使の像
	new Sprite(  10, 10, 1, 3 ),			//101.街灯
	new Sprite(  11, 10, 2, 3 ),			//102.門
	new Sprite(  13, 10, 1, 1 ),			//103.丸椅子
	new Sprite(  14, 10, 1, 1 ),			//104.柵
	new Sprite(  15, 10, 1, 3 ),			//105.はしご
	new Sprite(   0, 11, 3, 1 ),			//106.丸い段差
	new Sprite(   3, 11, 2, 1 ),			//107.段差の真ん中
	new Sprite(   5, 11, 1, 1 ),			//108.下からの階段との接続
	new Sprite(  13, 11, 1, 1 ),			//109.薪3本
	new Sprite(  14, 11, 1, 1 ),			//110.焚火前
	new Sprite(   0, 12, 3, 1 ),			//111.丸い崖
	new Sprite(   3, 12, 1, 1 ),			//112.丸い崖の角
	new Sprite(   4, 12, 1, 1 ),			//113.丸い崖の角2
	new Sprite(   5, 12, 1, 2 ),			//114.石の階段(苔)
	new Sprite(   6, 12, 1, 2 ),			//115.洞窟(細長い)
	new Sprite(   7, 12, 1, 1 ),			//116.洞窟(左下)
	new Sprite(  13, 12, 1, 1 ),			//117.薪割り
	new Sprite(   0, 12, 3, 3 ),			//118.石の階段(広い)
	new Sprite(   3, 13, 1, 3 ),			//119.石の階段
	new Sprite(   4, 12, 1, 3 ),			//120.影(右側に丸く)
	new Sprite(   7, 12, 1, 1 ),			//121.洞窟(右下)
	new Sprite(   8, 13, 3, 2 ),			//122.井戸
	new Sprite(  11, 13, 1, 1 ),			//123.桶(水入り)
	new Sprite(  12, 12, 1, 1 ),			//124.桶(空)
	new Sprite(  13, 13, 1, 2 ),			//125.お墓(十字架)
	new Sprite(  14, 13, 1, 1 ),			//126.お墓(白い花)
	new Sprite(  15, 13, 1, 1 ),			//127.お墓(リース)
	new Sprite(  11, 14, 1, 1 ),			//128.たらい(空)
	new Sprite(  12, 14, 1, 1 ),			//129.たらい(水入り)
	new Sprite(  14, 14, 1, 1 ),			//130.お墓(紫の花)
	new Sprite(  15, 14, 1, 1 ),			//131.お墓(リース)2
	new Sprite(   1, 16, 7, 7 ),			//132.家のメイン屋根
	new Sprite(   5, 14, 3, 2 ),			//133.洞窟
	new Sprite(   8, 21, 1, 4 ),			//134.門(左)
	new Sprite(   9, 21, 1, 4 ),			//135.門(中)
	new Sprite(  10, 21, 1, 4 ),			//136.門(右)
	new Sprite(   9, 32, 1, 2 ),			//137.木(縦長)頂点
	new Sprite(  11, 27, 2, 3 ),			//138.街灯(木)左
	new Sprite(  13, 27, 2, 3 )				//139.街灯(木)右


];

let spriteAooni = [
	new Sprite(   0,  0,  2, 3.5 ),			//0.正面直立
	new Sprite(   2,  0,  2, 3.5 ),			//1.正面右足出し
	new Sprite(   6,  0,  2, 3.5 ),			//2.正面左足出し
	new Sprite(   0,3.5,  2, 3.5 ),			//3.左向き直立
	new Sprite(   2,3.5,  2, 3.5 ),			//4.左向き右足出し
	new Sprite(   6,3.5,  2, 3.5 ),			//5.左向き左足出し
	new Sprite(   0,  7,  2, 3.5 ),			//6.右向き直立
	new Sprite(   2,  7,  2, 3.5 ),			//7.右向き左足出し
	new Sprite(   6,  7,  2, 3.5 ),			//8.右向き右足出し
	new Sprite(   0,10.5,  2, 3.5 ),		//9.後ろ向き直立
	new Sprite(   2,10.5,  2, 3.5 ),		//10.後ろ向き右足出し
	new Sprite(   6,10.5,  2, 3.5 )			//11.後ろ向き左足出し
];




//値に応じたspriteを呼びだすマップ(一層目)
let Map = [

 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82,106,  0,110,118,113, 89,115, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82,  0,  0,118,118,118,118,113,115, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82,106, 89,110,118,118,118,118,118,118,113, 89, 89,115, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 89, 89,110,118,118,118,118,118,118,118,118,118,118,118,113, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89,
118,118,118,118,118,118,118,118,118,118,118,118,118,118,112,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
119,119,119,119,119,119,119,111,118,118,118,118,118,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82,117,119,119,111,118,118,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,117,119,119,111,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 90,  0, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 90,  0, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 90,  0, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 90,  0, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 90,  0, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 90,  0, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 89, 89, 89, 89, 89, 89, 89, 89, 89,115, 82, 82,114,110,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
  0,  0,  0,  0,111,118,118,118,118,113, 89, 89,110,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82,117,111,118,118,118,118,118,118,118,112,116, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82,117,111,118,118,118,118,112,119,116, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82,117,119,111,118,112,116, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
 82, 82, 82, 82, 82, 82, 82, 82, 90,118,120, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82
];

//マップ(二層目)
let Map2 = [

137,137,137,137,137,137,134,135,136,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,137,
 40, 40, 40, 40, 40, 40,  0,  0,  0, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
 40, 40, 40, 40, 40, 40, 21,  0,  0, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
 40, 40, 40, 40, 40, 40,  0,  0,  0, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
 24,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 96, 96,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 96, 96,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 96, 96,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 40,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 40, 40, 40,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 40, 40, 40, 40, 40,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 40, 40, 40, 40, 40, 40, 40, 40,
 40,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
 40, 40, 40,  0,  0,  0,  0,138,  0,  0,139,  0,  0,  0,  0,  0,  0, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
 40, 40, 40, 40, 40, 40, 40,  0,  0,  0,  0,  0, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
 40, 40, 40, 40, 40, 40, 40,  0,  0,  0,  0,  0, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
 40, 40, 40, 40, 40, 40, 40,  0,  0,  0,  0,  0, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40


];


//当たり判定のマップ
let HitMap = [

  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
];