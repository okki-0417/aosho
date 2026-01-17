import { FIELD_HEIGHT, FIELD_WIDTH } from "./data.js";

const SCREEN_W = 480;
const SCREEN_H = 480;

type Player = { x: number; y: number; sw: number; sh: number };

export class Camera {
  x = 0;
  y = 0;

  update(player: Player): void {
    if (this.canFollowX(player)) {
      this.x = this.centerOn(player.x, player.sw, SCREEN_W);
    }

    if (this.canFollowY(player)) {
      this.y = this.centerOn(player.y, player.sh, SCREEN_H);
    }
  }

  private canFollowX(player: Player): boolean {
    const margin = 17;
    const minX = SCREEN_W / 2 - margin;
    const maxX = FIELD_WIDTH - SCREEN_W / 2 + margin;
    return minX <= player.x && player.x + player.sw <= maxX;
  }

  private canFollowY(player: Player): boolean {
    const marginTop = 32;
    const marginBottom = 33;
    const minY = SCREEN_H / 2 - marginTop;
    const maxY = FIELD_HEIGHT - SCREEN_H / 2 + marginBottom;
    return minY <= player.y && player.y + player.sh <= maxY;
  }

  private centerOn(position: number, size: number, screenSize: number): number {
    return position + size / 2 - screenSize / 2;
  }
}
