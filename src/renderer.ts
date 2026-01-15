import { MAP_SIZE, TILESIZE } from "./data.js";

// 描画関連の定数
const SMOOTHING = false;
const GAME_SPEED = 1000 / 60;
const SCREEN_W = 480;
const SCREEN_H = 480;
const CANVAS_W = SCREEN_W;
const CANVAS_H = SCREEN_H;

// スプライトの型定義
export interface SpriteData {
  x: number;
  y: number;
  sw: number;
  sh: number;
}

export class Renderer {
  // 定数（外部公開用）
  static readonly TILE_SIZE = TILESIZE;
  static readonly SCREEN_WIDTH = SCREEN_W;
  static readonly SCREEN_HEIGHT = SCREEN_H;
  static readonly CANVAS_WIDTH = CANVAS_W;
  static readonly CANVAS_HEIGHT = CANVAS_H;
  static readonly GAME_SPEED = GAME_SPEED;

  // フィールドサイズ
  readonly fieldWidth: number;
  readonly fieldHeight: number;

  // キャンバス
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly virtualCanvas: HTMLCanvasElement;
  readonly virtualCtx: CanvasRenderingContext2D;

  // カメラ座標
  cameraX = 0;
  cameraY = 0;

  constructor() {
    // フィールドサイズ計算
    this.fieldWidth = TILESIZE * MAP_SIZE;
    this.fieldHeight = TILESIZE * MAP_SIZE;

    // メインキャンバスの初期化
    this.canvas = document.getElementById("can") as HTMLCanvasElement;
    const ctx = this.canvas.getContext("2d");
    if (ctx == null) throw new Error("Could not get canvas context");
    this.ctx = ctx;

    this.canvas.style.border = "4px solid";
    this.canvas.width = CANVAS_W;
    this.canvas.height = CANVAS_H;
    this.ctx.imageSmoothingEnabled = SMOOTHING;

    // 仮想キャンバスの初期化
    this.virtualCanvas = document.createElement("canvas");
    const vctx = this.virtualCanvas.getContext("2d");
    if (vctx == null) throw new Error("Could not get virtual canvas context");
    this.virtualCtx = vctx;

    this.virtualCanvas.width = this.fieldWidth;
    this.virtualCanvas.height = this.fieldHeight;
  }

  // 画面クリア
  clear(): void {
    this.virtualCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    this.ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
  }

  // スプライトを仮想キャンバスに描画
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

  // タイルマップを描画
  drawTiles(
    image: HTMLImageElement,
    map: number[],
    sprites: SpriteData[]
  ): void {
    for (let y = 0; y < MAP_SIZE; y++) {
      for (let x = 0; x < MAP_SIZE; x++) {
        const spriteIndex = map[y * MAP_SIZE + x] ?? 0;
        this.drawSprite(image, spriteIndex, sprites, x * TILESIZE, y * TILESIZE);
      }
    }
  }

  // カメラ位置を更新（プレイヤー追従）
  updateCamera(playerX: number, playerY: number, playerW: number, playerH: number): void {
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
}

// シングルトンインスタンス
export const renderer = new Renderer();
