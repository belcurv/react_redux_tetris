import {
  getPalette
} from '../utils';

export default class Player {

  constructor() {
    this.score   = 0;
    this.matrix  = [];
    this.palette = getPalette(0);
    this.pos     = { x : 0, y : 0 };
  }
}
