import mapData from "./data/maps.json" with { type: "json" };
import spritesData from "./data/sprites.json" with { type: "json" };

import forestBgUrl from "./assets/TownForestBg.png";
import forestAcceUrl from "./assets/townForestAcce.png";
import jikiUrl from "./assets/LF-Chara-Sogen01.png";
import aooniUrl from "./assets/aooni.png";

export const TILESIZE = 32;
export const MAP_SIZE = 32;
export const FIELD_WIDTH = TILESIZE * MAP_SIZE;
export const FIELD_HEIGHT = TILESIZE * MAP_SIZE;

type Tuple<T, N extends number, R extends T[] = []> =
  R["length"] extends N ? R : Tuple<T, N, [T, ...R]>;

export type MapRow = Tuple<number, 32>;
export type TileMap = Tuple<MapRow, 32>;

export type Sprite = {
  image: HTMLImageElement;
  srcX: number;
  srcY: number;
  width: number;
  height: number;
};

export type Layer = {
  tileMap: TileMap;
  sprites: Sprite[];
};

type SpriteTuple = [number, number, number, number];

type LabeledSprite = {
  label: string;
  coords: SpriteTuple;
};

type DirectionSprites = {
  leftFoot: SpriteTuple;
  stand: SpriteTuple;
  rightFoot: SpriteTuple;
};

type CharacterSprites = {
  down: DirectionSprites;
  left: DirectionSprites;
  right: DirectionSprites;
  up: DirectionSprites;
};

type JikiData = {
  player: CharacterSprites;
  mobs: CharacterSprites[];
};

const createImage = (src: string): HTMLImageElement => {
  const image = new Image();
  image.src = src;
  return image;
};

const toSprite = (tuple: SpriteTuple, image: HTMLImageElement): Sprite => {
  const [x, y, w, h] = tuple;
  return {
    image,
    srcX: x * TILESIZE,
    srcY: y * TILESIZE,
    width: w * TILESIZE,
    height: h * TILESIZE,
  };
};

const toSprites = (data: SpriteTuple[], image: HTMLImageElement): Sprite[] => {
  return data.map((tuple) => toSprite(tuple, image));
};

const toLabeledSprites = (data: LabeledSprite[], image: HTMLImageElement): Sprite[] => {
  return data.map((item) => toSprite(item.coords, image));
};

const flattenCharacterSprites = (
  char: CharacterSprites,
  image: HTMLImageElement
): Sprite[] => {
  const directions: (keyof CharacterSprites)[] = ["down", "left", "right", "up"];
  const motions: (keyof DirectionSprites)[] = ["leftFoot", "stand", "rightFoot"];

  return directions.flatMap((dir) =>
    motions.map((motion) => toSprite(char[dir][motion], image))
  );
};

const toJikiSprites = (data: JikiData, image: HTMLImageElement): Sprite[] => {
  const playerSprites = flattenCharacterSprites(data.player, image);
  const mobSprites = data.mobs.flatMap((mob) =>
    flattenCharacterSprites(mob, image)
  );
  return [...playerSprites, ...mobSprites];
};

const forestBgImage = createImage(forestBgUrl);
const forestAcceImage = createImage(forestAcceUrl);
const jikiImage = createImage(jikiUrl);
const aooniImage = createImage(aooniUrl);

const spriteForestBg = toLabeledSprites(spritesData.forestBg as LabeledSprite[], forestBgImage);
const spriteForestAcce = toSprites(spritesData.forestAcce as SpriteTuple[], forestAcceImage);

export const spriteJiki = toJikiSprites(spritesData.jiki as JikiData, jikiImage);
export const spriteAooni = toSprites(spritesData.aooni as SpriteTuple[], aooniImage);

export const layer1: Layer = {
  tileMap: mapData.layer1 as TileMap,
  sprites: spriteForestBg,
};

export const layer2: Layer = {
  tileMap: mapData.layer2 as TileMap,
  sprites: spriteForestAcce,
};

export const collision = mapData.collision as TileMap;
