import { TILESIZE } from "./data.js";
import { Character, type Direction } from "./types.js";

export class Mob extends Character {
  sw: number;
  sh: number;
  poss: number;
  sign: number;
  snumL: number;
  snumR: number;
  snumU: number;
  snumD: number;
  speed: number;
  span: number;

  constructor(
    x: number,
    y: number,
    left: number,
    right: number,
    up: number,
    down: number
  ) {
    super();
    this.x = x;
    this.y = y;
    this.sw = TILESIZE;
    this.sh = TILESIZE * 2;
    this.sz = TILESIZE;
    this.snum = down;
    this.poss = 300;
    this.sign = Math.floor(Math.random() * this.poss);

    this.foot_x = this.x + 10;
    this.foot_y = this.y + this.sh - 5;
    this.foot_sw = 16;
    this.foot_sh = 5;

    this.snumL = left;
    this.snumR = right;
    this.snumU = up;
    this.snumD = down;

    this.speed = 1;
    this.span = 30;
  }

  protected getSpriteIndex(direction: Direction): number {
    switch (direction) {
      case "left":
        return this.snumL;
      case "right":
        return this.snumR;
      case "up":
        return this.snumU;
      case "down":
        return this.snumD;
    }
  }

  private move(direction: Direction) {
    switch (direction) {
      case "left":
        this.x -= this.speed;
        this.foot_x -= this.speed;
        break;
      case "right":
        this.x += this.speed;
        this.foot_x += this.speed;
        break;
      case "up":
        this.y -= this.speed;
        this.foot_y -= this.speed;
        break;
      case "down":
        this.y += this.speed;
        this.foot_y += this.speed;
        break;
    }
  }

  private stop() {
    for (const dir of ["left", "right", "up", "down"] as const) {
      const base = this.getSpriteIndex(dir);
      if (this.snum === base - 1 || this.snum === base + 1) {
        this.snum = base;
        break;
      }
    }
    this.walco = 0;
    this.flag = 0;
    this.sign = Math.floor(Math.random() * 360);
  }

  private signToDirection(sign: number): Direction | null {
    switch (sign) {
      case 0:
        return "left";
      case 1:
        return "right";
      case 2:
        return "up";
      case 3:
        return "down";
      default:
        return null;
    }
  }

  update(canMoveCheck: (direction: Direction) => boolean) {
    const direction = this.signToDirection(this.sign);
    if (direction) {
      if (canMoveCheck(direction)) {
        this.move(direction);
      }
      this.animate(direction);
      if (this.walco % this.span === 0) {
        this.sign = Math.floor(Math.random() * this.poss);
      }
    } else {
      this.stop();
    }
  }
}
