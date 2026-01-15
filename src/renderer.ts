import { MAP_SIZE, TILESIZE } from "./data.js";
import { jiki } from "./jiki.js";
import { checkHit } from "./misc.js";
import { mob } from "./mob.js";
import { obj } from "./obj.js";

const SMOOTHING = false;
const GAME_SPEED = 1000 / 60;
const SCREEN_W = 480;
const SCREEN_H = 480;
const CANVAS_W = SCREEN_W;
const CANVAS_H = SCREEN_H;

export type SpriteData = {
  x: number;
  y: number;
  sw: number;
  sh: number;
};

export class Renderer {
  static readonly TILE_SIZE = TILESIZE;
  static readonly SCREEN_WIDTH = SCREEN_W;
  static readonly SCREEN_HEIGHT = SCREEN_H;
  static readonly CANVAS_WIDTH = CANVAS_W;
  static readonly CANVAS_HEIGHT = CANVAS_H;
  static readonly GAME_SPEED = GAME_SPEED;

  readonly fieldWidth: number;
  readonly fieldHeight: number;

  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly virtualCanvas: HTMLCanvasElement;
  readonly virtualCtx: CanvasRenderingContext2D;

  cameraX = 0;
  cameraY = 0;

  constructor() {
    this.fieldWidth = TILESIZE * MAP_SIZE;
    this.fieldHeight = TILESIZE * MAP_SIZE;

    [this.canvas, this.ctx] = this.initMainCanvas();
    [this.virtualCanvas, this.virtualCtx] = this.initVirtualCanvas();
  }

  clear(): void {
    if (this.virtualCtx == null || this.ctx == null) return;

    this.virtualCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    this.ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
  }

  drawSprite(
    image: HTMLImageElement,
    spriteIndex: number,
    sprites: SpriteData[],
    x: number,
    y: number
  ): void {
    const sprite = sprites[spriteIndex];
    if (!sprite) return;

    const { x: sx, y: sy, sw, sh } = sprite;
    this.virtualCtx.drawImage(image, sx, sy, sw, sh, x, y, sw, sh);
  }

  drawTiles(
    image: HTMLImageElement,
    map: number[],
    sprites: SpriteData[]
  ): void {
    for (let y = 0; y < MAP_SIZE; y++) {
      for (let x = 0; x < MAP_SIZE; x++) {
        const spriteIndex = map[y * MAP_SIZE + x] ?? 0;

        this.drawSprite(
          image,
          spriteIndex,
          sprites,
          x * TILESIZE,
          y * TILESIZE
        );
      }
    }
  }

  updateCamera(
    playerX: number,
    playerY: number,
    playerW: number,
    playerH: number
  ): void {
    // 横方向のカメラ追従
    if (
      CANVAS_W / 2 - 17 <= playerX &&
      playerX + playerW <= this.fieldWidth - CANVAS_W / 2 + 17
    ) {
      this.cameraX = playerX + playerW / 2 - CANVAS_W / 2;
    }

    // 縦方向のカメラ追従
    if (
      CANVAS_H / 2 - 32 <= playerY &&
      playerY + playerH <= this.fieldHeight - CANVAS_H / 2 + 33
    ) {
      this.cameraY = playerY + playerH / 2 - CANVAS_H / 2;
    }
  }

  // 仮想キャンバスからメインキャンバスへ転送
  render(): void {
    this.ctx.drawImage(
      this.virtualCanvas,
      this.cameraX,
      this.cameraY,
      SCREEN_W,
      SCREEN_H,
      0,
      0,
      CANVAS_W,
      CANVAS_H
    );
  }

  // いろいろなものが描画される層を調整する
  reDrawTiles() {
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

  private initMainCanvas(): [HTMLCanvasElement, CanvasRenderingContext2D] {
    const [canvas, ctx] = this.createCanvas(CANVAS_W, CANVAS_H);

    this.canvas.id = "can";
    this.canvas.style.border = "4px solid";
    this.ctx.imageSmoothingEnabled = SMOOTHING;
    document.body.appendChild(this.canvas);

    return [canvas, ctx];
  }

  private initVirtualCanvas(): [HTMLCanvasElement, CanvasRenderingContext2D] {
    const [canvas, ctx] = this.createCanvas(this.fieldWidth, this.fieldHeight);

    ctx.imageSmoothingEnabled = SMOOTHING;
    return [canvas, ctx];
  }

  private createCanvas(
    width: number,
    height: number
  ): [HTMLCanvasElement, CanvasRenderingContext2D] {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (ctx == null) throw new Error("Could not get canvas context");

    return [canvas, ctx];
  }
}

// シングルトンインスタンス
export const renderer = new Renderer();
