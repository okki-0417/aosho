import mapsData from "./data/maps.json" with { type: "json" };
import { MAP_SIZE, spriteForestAcce, spriteForestBg, TILESIZE } from "./data.js";
import { jiki } from "./jiki.js";
import { townForestAcceImage, townForestBgImage } from "./misc.js";
import { mob } from "./mob.js";
import { Collision, collisions } from "./collision.js";
import { renderer, Renderer } from "./renderer.js";

const main = () => {
  for (let y = 0; y < MAP_SIZE; y++) {
    for (let x = 0; x < MAP_SIZE; x++) {
      if (mapsData.collision[y * MAP_SIZE + x] === 0) continue;

      collisions.push(new Collision(x * TILESIZE, y * TILESIZE));
    }
  }

  setInterval(() => {
    renderer.clear();
    renderer.updateCamera(jiki.x, jiki.y, jiki.sw, jiki.sh);

    renderer.drawTiles(townForestBgImage, mapsData.layer1, spriteForestBg);

    jiki.update();
    for (let i = 0; i < mob.length; i++) {
      mob[i]?.update();
    }

    jiki.draw();

    for (let i = 0; i < mob.length; i++) {
      mob[i]?.draw();
    }

    renderer.drawTiles(townForestAcceImage, mapsData.layer2, spriteForestAcce);

    renderer.reDrawTiles();
    renderer.render();
  }, Renderer.GAME_SPEED);
};

window.onload = () => {
  main();
};
