import { FIELD_HEIGHT, FIELD_WIDTH, TILESIZE, type TileMap } from "./data.js";
import type { Character, Direction } from "./types.js";

export type Bounds = {
  x: number;
  y: number;
  w: number;
  h: number;
};

class Collision {
  readonly x: number;
  readonly y: number;
  readonly sz: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.sz = TILESIZE;
  }

  getBounds(): Bounds {
    return { x: this.x, y: this.y, w: this.sz, h: this.sz };
  }
}

export class CollisionService {
  private collisions: Collision[] = [];

  init(collisionMap: TileMap) {
    this.collisions = [];
    let y = 0;
    for (const row of collisionMap) {
      let x = 0;
      for (const value of row) {
        if (value !== 0) {
          this.collisions.push(new Collision(x * TILESIZE, y * TILESIZE));
        }
        x++;
      }
      y++;
    }
  }

  private readonly padding = 2;

  private expandBounds(b: Bounds): {
    left: number;
    right: number;
    top: number;
    bottom: number;
  } {
    const left = b.x - this.padding;
    const right = left + b.w + this.padding;
    const top = b.y - this.padding;
    const bottom = top + b.h + this.padding;
    return { left, right, top, bottom };
  }

  private toBounds(b: Bounds): {
    left: number;
    right: number;
    top: number;
    bottom: number;
  } {
    const left = b.x;
    const right = left + b.w;
    const top = b.y - this.padding;
    const bottom = top + b.h;
    return { left, right, top, bottom };
  }

  private overlapsX(
    b1: { left: number; right: number },
    b2: { left: number; right: number }
  ): boolean {
    return (
      (b1.left <= b2.left && b2.left < b1.right) ||
      (b1.left < b2.right && b2.right <= b1.right) ||
      (b2.left <= b1.left && b1.right <= b2.right)
    );
  }

  private overlapsY(
    b1: { top: number; bottom: number },
    b2: { top: number; bottom: number }
  ): boolean {
    return (
      (b1.top <= b2.top && b2.top < b1.bottom) ||
      (b1.top < b2.bottom && b2.bottom <= b1.bottom) ||
      (b2.top <= b1.top && b1.bottom <= b2.bottom)
    );
  }

  checkHitUp(bounds1: Bounds, bounds2: Bounds): boolean {
    const b1 = this.expandBounds(bounds1);
    const b2 = this.toBounds(bounds2);
    return b2.top <= b1.top && b1.top <= b2.bottom && this.overlapsX(b1, b2);
  }

  checkHitDown(bounds1: Bounds, bounds2: Bounds): boolean {
    const b1 = this.expandBounds(bounds1);
    const b2 = this.toBounds(bounds2);
    return (
      b2.top <= b1.bottom && b1.bottom <= b2.bottom && this.overlapsX(b1, b2)
    );
  }

  checkHitLeft(bounds1: Bounds, bounds2: Bounds): boolean {
    const b1 = this.expandBounds(bounds1);
    const b2 = this.toBounds(bounds2);
    return b2.left <= b1.left && b1.left <= b2.right && this.overlapsY(b1, b2);
  }

  checkHitRight(bounds1: Bounds, bounds2: Bounds): boolean {
    const b1 = this.expandBounds(bounds1);
    const b2 = this.toBounds(bounds2);
    return (
      b2.left <= b1.right && b1.right <= b2.right && this.overlapsY(b1, b2)
    );
  }

  getCollisions(): readonly Collision[] {
    return this.collisions;
  }

  checkScreenBounds(direction: Direction, character: Character): boolean {
    switch (direction) {
      case "up":
        return character.y + 17 > 0;
      case "down":
        return FIELD_HEIGHT > character.foot_y + character.foot_sh;
      case "left":
        return character.foot_x - 7 > 0;
      case "right":
        return FIELD_WIDTH > character.foot_x + character.foot_sw;
    }
  }

  private checkHit(
    direction: Direction,
    bounds1: Bounds,
    bounds2: Bounds
  ): boolean {
    switch (direction) {
      case "up":
        return this.checkHitUp(bounds1, bounds2);
      case "down":
        return this.checkHitDown(bounds1, bounds2);
      case "left":
        return this.checkHitLeft(bounds1, bounds2);
      case "right":
        return this.checkHitRight(bounds1, bounds2);
    }
  }

  checkTileCollision(direction: Direction, character: Character): boolean {
    const bounds: Bounds = {
      x: character.foot_x,
      y: character.foot_y,
      w: character.foot_sw,
      h: character.foot_sh,
    };
    for (const collision of this.collisions) {
      if (this.checkHit(direction, bounds, collision.getBounds())) {
        return false;
      }
    }
    return true;
  }

  checkCharacterCollision(
    direction: Direction,
    a: Character,
    b: Character
  ): boolean {
    const aBounds: Bounds = {
      x: a.foot_x,
      y: a.foot_y,
      w: a.foot_sw,
      h: a.foot_sh,
    };
    const bBounds: Bounds = {
      x: b.x,
      y: b.y + 45,
      w: b.sz,
      h: b.sz - 5,
    };
    return this.checkHit(direction, aBounds, bBounds);
  }

  canMove(
    character: Character,
    direction: Direction,
    otherCharacters: Character[]
  ): boolean {
    if (!this.checkTileCollision(direction, character)) return false;
    if (!this.checkScreenBounds(direction, character)) return false;
    for (const other of otherCharacters) {
      if (this.checkCharacterCollision(direction, character, other))
        return false;
    }
    return true;
  }
}
