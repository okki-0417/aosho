import { Camera } from "./camera.js";
import { CollisionService } from "./collisionService.js";
import {
  FIELD_HEIGHT,
  FIELD_WIDTH,
  TILESIZE,
  spriteJiki,
  type Layer,
  type Sprite,
} from "./data.js";
import { Jiki } from "./jiki.js";
import { Mob } from "./mob.js";

const SMOOTHING = false;
const GAME_SPEED = 1000 / 60;
const SCREEN_W = 480;
const SCREEN_H = 480;
const CANVAS_W = SCREEN_W;
const CANVAS_H = SCREEN_H;

export class Renderer {
  static readonly TILE_SIZE = TILESIZE;
  static readonly SCREEN_WIDTH = SCREEN_W;
  static readonly SCREEN_HEIGHT = SCREEN_H;
  static readonly CANVAS_WIDTH = CANVAS_W;
  static readonly CANVAS_HEIGHT = CANVAS_H;
  static readonly GAME_SPEED = GAME_SPEED;

  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly virtualCanvas: HTMLCanvasElement;
  readonly virtualCtx: CanvasRenderingContext2D;

  private camera: Camera;
  private collisionService: CollisionService;

  constructor(camera: Camera, collisionService: CollisionService) {
    this.camera = camera;
    this.collisionService = collisionService;

    [this.canvas, this.ctx] = this.initMainCanvas();
    [this.virtualCanvas, this.virtualCtx] = this.initVirtualCanvas();
  }

  clear(): void {
    if (this.virtualCtx == null || this.ctx == null) return;

    this.virtualCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    this.ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
  }

  drawSprite(sprite: Sprite, destX: number, destY: number): void {
    const { image, srcX, srcY, width, height } = sprite;
    this.virtualCtx.drawImage(
      image,
      srcX,
      srcY,
      width,
      height,
      destX,
      destY,
      width,
      height
    );
  }

  drawTiles(layer: Layer): void {
    let y = 0;
    for (const row of layer.tileMap) {
      let x = 0;
      for (const spriteIndex of row) {
        const sprite = layer.sprites[spriteIndex];
        if (sprite) {
          this.drawSprite(sprite, x * TILESIZE, y * TILESIZE);
        }
        x++;
      }
      y++;
    }
  }

  render(): void {
    this.ctx.drawImage(
      this.virtualCanvas,
      this.camera.x,
      this.camera.y,
      SCREEN_W,
      SCREEN_H,
      0,
      0,
      CANVAS_W,
      CANVAS_H
    );
  }

  private drawCharacter(char: { x: number; y: number; snum: number }) {
    const sprite = spriteJiki[char.snum];
    if (sprite) this.drawSprite(sprite, char.x, char.y);
  }

  drawCharacters(jiki: Jiki, mobs: Mob[]) {
    this.drawCharacter(jiki);
    for (const m of mobs) {
      if (m) this.drawCharacter(m);
    }
  }

  reDrawTiles(jiki: Jiki, mobs: Mob[]) {
    const body = 5;
    const head = 20;
    const collisions = this.collisionService.getCollisions();

    for (const collision of collisions) {
      const collisionBounds = {
        x: collision.x,
        y: collision.y,
        w: collision.sz,
        h: collision.sz,
      };
      const jikiBounds1 = {
        x: jiki.x + body,
        y: jiki.y + head,
        w: jiki.sw - body,
        h: jiki.sh - head,
      };
      const jikiBounds2 = {
        x: jiki.x + body,
        y: jiki.y + head + 10,
        w: jiki.sw - body,
        h: jiki.sh - head - 10,
      };

      if (
        this.collisionService.checkHitUp(jikiBounds1, collisionBounds) ||
        this.collisionService.checkHitUp(jikiBounds2, collisionBounds)
      ) {
        this.drawCharacter(jiki);
      }
    }

    for (const m of mobs) {
      if (!m) continue;
      const mobLowerBounds = { x: m.x, y: m.y + TILESIZE, w: m.sz, h: m.sz };
      const jikiBounds = {
        x: jiki.x + body,
        y: jiki.y + head,
        w: jiki.sw - body * 2,
        h: jiki.sh - head,
      };

      if (this.collisionService.checkHitUp(jikiBounds, mobLowerBounds)) {
        this.drawCharacter(jiki);
      }
    }

    for (const m of mobs) {
      if (!m) continue;
      const mobBounds = {
        x: m.x + body,
        y: m.y + head,
        w: m.sw - body * 2,
        h: m.sh - head,
      };
      const jikiLowerBounds = {
        x: jiki.x,
        y: jiki.y + TILESIZE,
        w: jiki.sz,
        h: jiki.sz,
      };

      if (this.collisionService.checkHitUp(mobBounds, jikiLowerBounds)) {
        this.drawCharacter(m);
      }
    }

    for (const m of mobs) {
      if (!m) continue;
      for (const collision of collisions) {
        const collisionBounds = {
          x: collision.x,
          y: collision.y,
          w: collision.sz,
          h: collision.sz,
        };
        const mobBounds1 = {
          x: m.x + body,
          y: m.y + head,
          w: m.sw - body,
          h: m.sh - head,
        };
        const mobBounds2 = {
          x: m.x + body,
          y: m.y + head + 10,
          w: m.sw - body,
          h: m.sh - body - 10,
        };

        if (
          this.collisionService.checkHitUp(mobBounds1, collisionBounds) ||
          this.collisionService.checkHitUp(mobBounds2, collisionBounds)
        ) {
          this.drawCharacter(m);
        }
      }
    }
  }

  private initMainCanvas(): [HTMLCanvasElement, CanvasRenderingContext2D] {
    const [canvas, ctx] = this.createCanvas(CANVAS_W, CANVAS_H);

    canvas.id = "can";
    canvas.style.border = "4px solid";
    ctx.imageSmoothingEnabled = SMOOTHING;
    document.body.appendChild(canvas);

    return [canvas, ctx];
  }

  private initVirtualCanvas(): [HTMLCanvasElement, CanvasRenderingContext2D] {
    const [canvas, ctx] = this.createCanvas(FIELD_WIDTH, FIELD_HEIGHT);

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
