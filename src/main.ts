import {
  HitMap,
  Map,
  Map2,
  MAP_SIZE,
  spriteForestAcce,
  spriteForestBg,
  TILESIZE,
} from "./data.js";
import { jiki } from "./jiki.js";
import { checkHit, townForestAcceImage, townForestBgImage } from "./misc.js";
import { mob } from "./mob.js";
import { Obj, obj } from "./obj.js";
import { renderer, Renderer } from "./renderer.js";

// 各タイルに当たり判定を付与
function judgeMap() {
  for (let y = 0; y < MAP_SIZE; y++) {
    for (let x = 0; x < MAP_SIZE; x++) {
      if (HitMap[y * MAP_SIZE + x] == 1)
        obj.push(new Obj(x * TILESIZE, y * TILESIZE));
    }
  }
}

// いろいろなものが描画される層を調整する
function reDrawTiles() {
  // 自機キャラの見た目通りの体で当たり判定を行うための調整用
  const body = 5;
  const head = 20;

  // プレイヤーとオブジェクトの描画層調整
  if (obj.length) {
    for (let i = 0; i < obj.length; i++) {
      // 見た目上の体で当たり判定
      if (
        checkHit(
          "up",
          jiki.x + body,
          jiki.y + head,
          jiki.sw - body,
          jiki.sh - head,
          obj[i]?.x as number,
          obj[i]?.y as number,
          obj[i]?.sz as number,
          obj[i]?.sz as number
        ) ||
        // オブジェクトから頭がはみ出ると当たり判定が機能しないから頭より少し下の体の部分でも判定する
        checkHit(
          "up",
          jiki.x + body,
          jiki.y + head + 10,
          jiki.sw - body,
          jiki.sh - head - 10,
          obj[i]?.x as number,
          obj[i]?.y as number,
          obj[i]?.sz as number,
          obj[i]?.sz as number
        )
      )
        jiki.draw();
    }
  }

  // プレイヤーとモブの描画層調整
  if (mob.length) {
    // プレイヤーとモブの下半身が重なってるなら自機を再描画
    for (let i = 0; i < mob.length; i++) {
      if (
        checkHit(
          "up",
          jiki.x + body,
          jiki.y + head,
          jiki.sw - body * 2,
          jiki.sh - head,
          mob[i]?.x as number,
          ((mob[i]?.y || 0) + TILESIZE) as number,
          mob[i]?.sz as number,
          mob[i]?.sz as number
        )
      )
        jiki.draw();
    }

    // モブとプレイヤーの下半身が重なってるなら自機を再描画
    for (let i = 0; i < mob.length; i++) {
      // プレイヤーとモブの下半身が重なってるなら自機を再描画
      if (
        checkHit(
          "up",
          ((mob[i]?.x || 0) + body) as number,
          ((mob[i]?.y || 0) + head) as number,
          ((mob[i]?.sw || 0) - body * 2) as number,
          ((mob[i]?.sh || 0) - head) as number,
          jiki.x,
          jiki.y + TILESIZE,
          jiki.sz,
          jiki.sz
        )
      )
        mob[i]?.draw();
    }
  }

  // モブとオブジェクトの描画層調整。
  if (mob.length && obj.length) {
    for (let i = 0; i < mob.length; i++) {
      for (let j = 0; j < obj.length; j++) {
        if (
          checkHit(
            "up",
            ((mob[i]?.x || 0) + body) as number,
            ((mob[i]?.y || 0) + head) as number,
            ((mob[i]?.sw || 0) - body) as number,
            ((mob[i]?.sh || 0) - head) as number,
            (obj[j]?.x || 0) as number,
            (obj[j]?.y || 0) as number,
            (obj[j]?.sz || 0) as number,
            (obj[j]?.sz || 0) as number
          ) ||
          checkHit(
            "up",
            ((mob[i]?.x || 0) + body) as number,
            ((mob[i]?.y || 0) + head + 10) as number,
            ((mob[i]?.sw || 0) - body) as number,
            ((mob[i]?.sh || 0) - body - 10) as number,
            (obj[j]?.x || 0) as number,
            (obj[j]?.y || 0) as number,
            (obj[j]?.sz || 0) as number,
            (obj[j]?.sz || 0) as number
          )
        )
          mob[i]?.draw();
      }
    }
  }
}

// すべてをアップデート
function updateAll() {
  jiki.update();

  for (let i = 0; i < mob.length; i++) {
    mob[i]?.update();
  }
}

// すべてを描画
function drawAll() {
  jiki.draw();

  for (let i = 0; i < mob.length; i++) {
    mob[i]?.draw();
  }
}

// ゲームループ
function GAMELOOP() {
  renderer.clear();

  // カメラの位置を決定
  renderer.updateCamera(jiki.x, jiki.y, jiki.sw, jiki.sh);

  renderer.drawTiles(townForestBgImage, Map, spriteForestBg);

  updateAll();

  drawAll();

  renderer.drawTiles(townForestAcceImage, Map2, spriteForestAcce);

  reDrawTiles();

  renderer.render();
}

const main = () => {
  judgeMap();
  setInterval(GAMELOOP, Renderer.GAME_SPEED);
};

window.onload = function () {
  main();
};
