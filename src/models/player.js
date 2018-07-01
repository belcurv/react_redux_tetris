/**
 * Player needs
 * 1) the width of the arena in squares
 * 2) creatPiece() utility
*/

import createPiece from './pieces';

export default class Player {

  constructor({ arenaWidth }) {
    this.arenaWidth = arenaWidth;
    this.pos = { x: 0, y: 0 };
    this.matrix = null;
    this.score = 0;
  }

  reset() {
    const shapes = 'ILJOTSZ';
    this.matrix = createPiece(shapes[shapes.length * Math.random() | 0]);
    this.pos.y = 0;
    this.pos.x = (this.arenaWidth / 2 | 0) - (this.matrix[0].length / 2 | 0);
  }

  /**
   * Rotates player matrix (mutates original)
   * CW: transpose all rows to columns, then reverse the collumns.
   * CCW: transpose all rows to columns, then reverse the rows.
   * @param   {Number}   direction   1 = CW; -1 = CCW.
  */
  rotate(direction) {
    for (let y = 0; y < this.matrix.length; y++) {
      for (let x = 0; x < y; x++) {
        // tuple switch
        [this.matrix[x][y], this.matrix[y][x]] = [this.matrix[y][x], this.matrix[x][y]];
      }
    }
    if (direction > 0) {
      // clockwise; reverse columns (eg, reverse all row elements)
      this.matrix.forEach(row => row.reverse());
    } else {
      // counter-clockwise; reverse all rows
      this.matrix.reverse();
    }
  }

  updateScore(value) {
    this.score += value;
  }

}