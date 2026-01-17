import type { Direction } from "./types.js";

export const key: Record<string, boolean> = {};

document.onkeydown = (e) => {
  key[e.code] = true;
};

document.onkeyup = (e) => {
  key[e.code] = false;
};

export const getDirection = (): Direction | null => {
  if (key.ArrowLeft) return "left";
  if (key.ArrowRight) return "right";
  if (key.ArrowUp) return "up";
  if (key.ArrowDown) return "down";
  return null;
};
