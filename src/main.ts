import { Camera } from "./camera.js";
import { CollisionService } from "./collisionService.js";
import { collision, layer1, layer2 } from "./data.js";
import { getDirection } from "./input.js";
import { Jiki } from "./jiki.js";
import { Mob } from "./mob.js";
import { Renderer } from "./renderer.js";

const main = () => {
  const camera = new Camera();

  const collisionService = new CollisionService();
  collisionService.init(collision);

  const renderer = new Renderer(camera, collisionService);

  const jiki = new Jiki();
  const mobs: Mob[] = [new Mob(600, 300, 52, 55, 58, 49)];

  setInterval(() => {
    renderer.clear();
    camera.update(jiki);

    renderer.drawTiles(layer1);

    const direction = getDirection();

    if (direction) {
      if (!collisionService.canMove(jiki, direction, mobs)) return;

      jiki.move(direction);
      jiki.animate(direction);
    } else {
      jiki.stop();
    }

    for (const mob of mobs) {
      mob.update((dir) => collisionService.canMove(mob, dir, [jiki]));
    }

    renderer.drawCharacters(jiki, mobs);
    renderer.drawTiles(layer2);

    renderer.reDrawTiles(jiki, mobs);
    renderer.render();
  }, Renderer.GAME_SPEED);
};

window.onload = () => main();
