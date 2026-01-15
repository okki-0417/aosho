import { HitMap, MAP_SIZE, TILESIZE } from "./data.js";
import { Obj, obj } from "./obj.js";

export class Tile {
  judgeMap() {
    for (let y = 0; y < MAP_SIZE; y++) {
      for (let x = 0; x < MAP_SIZE; x++) {
        if (HitMap[y * MAP_SIZE + x] == 1)
          obj.push(new Obj(x * TILESIZE, y * TILESIZE));
      }
    }
  }
}
