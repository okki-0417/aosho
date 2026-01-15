import { Map, Map2, spriteForestAcce, spriteForestBg } from "./data.js";
import { jiki } from "./jiki.js";
import { townForestAcceImage, townForestBgImage } from "./misc.js";
import { mob } from "./mob.js";
import { renderer, Renderer } from "./renderer.js";
import { Tile } from "./tile.js";

const main = () => {
  const tile = new Tile();
  tile.judgeMap();

  setInterval(() => {
    renderer.clear();
    renderer.updateCamera(jiki.x, jiki.y, jiki.sw, jiki.sh);
    renderer.drawTiles(townForestBgImage, Map, spriteForestBg);

    jiki.update();
    for (let i = 0; i < mob.length; i++) {
      mob[i]?.update();
    }

    jiki.draw();

    for (let i = 0; i < mob.length; i++) {
      mob[i]?.draw();
    }

    renderer.drawTiles(townForestAcceImage, Map2, spriteForestAcce);

    renderer.reDrawTiles();
    renderer.render();
  }, Renderer.GAME_SPEED);
};

window.onload = () => {
  main();
};
