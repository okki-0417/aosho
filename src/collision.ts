import { TILESIZE } from "./data.js";

export class Collision {
  x: number;
  y: number;
  sz: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.sz = TILESIZE;
  }
}

export const collisions: Collision[] = [];
