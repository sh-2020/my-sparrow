import { curry } from '../utils/helper';
import { scale, translate } from './transforms';

function coordinate(transformOptions, canvasOptions) {
  const {
    x, y, height, width,
  } = canvasOptions;
  return [
    scale(width, height),
    translate(x, y),
  ];
}

export const cartesian = curry(coordinate);
