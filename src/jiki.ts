import { TILESIZE } from "./data.js";
import { Character, type Direction } from "./types.js";

export class Jiki extends Character {
  sw: number;
  sh: number;
  speed: number;

  constructor() {
    super();
    this.x = 96;
    this.y = 320;
    this.sw = TILESIZE;
    this.sh = TILESIZE * 2;
    this.speed = 2;
    this.snum = 1;
    this.sz = 32;

    this.foot_x = this.x + 10;
    this.foot_y = this.y + this.sh - 5;
    this.foot_sw = 16;
    this.foot_sh = 5;
  }

  protected getSpriteIndex(direction: Direction): number {
    switch (direction) {
      case "down":
        return 1;
      case "left":
        return 4;
      case "right":
        return 7;
      case "up":
        return 10;
    }
  }

  move(direction: Direction) {
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

  stop() {
    const base = this.snum - (this.snum % 3) + 1;
    this.snum = base;
    this.flag = 0;
    this.walco = 0;
  }
}
