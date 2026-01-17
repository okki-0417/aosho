export type Direction = "up" | "down" | "left" | "right";

export abstract class Character {
  x: number = 0;
  y: number = 0;
  sz: number = 0;
  foot_x: number = 0;
  foot_y: number = 0;
  foot_sw: number = 0;
  foot_sh: number = 0;
  snum: number = 0;
  walco: number = 0;
  flag: number = 0;
  n: number = 10;

  protected abstract getSpriteIndex(direction: Direction): number;

  animate(direction: Direction) {
    this.walco++;
    const base = this.getSpriteIndex(direction);
    const a = base - 1;
    const b = base;
    const c = base + 1;

    // 静止からの動き出し時、他方向からの方向転換時にまず右足を出す
    if (
      (this.snum !== a && this.snum !== b && this.snum !== c) ||
      this.flag === 0
    ) {
      this.snum = a;
      if (this.walco % this.n === 0) this.flag = 1;
    }

    // フラグで歩行アニメーションを管理
    if (this.walco % this.n === 1) {
      switch (this.flag) {
        case 1:
          this.snum = b;
          this.flag = 2;
          break;
        case 2:
          this.snum = c;
          this.flag = 3;
          break;
        case 3:
          this.snum = b;
          this.flag = 4;
          break;
        case 4:
          this.snum = a;
          this.flag = 1;
          break;
      }
    }
  }
}
