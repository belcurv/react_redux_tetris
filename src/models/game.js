/**
 * Game needs knowledge of both the player and the arena
*/

import Player from './player';
import collides from '../utils/collides';

export default class Game {

  constructor(width, height) {
    this.arena = this.createMatrix(width, height);
    this.player = new Player({ arenaWidth: width });
  }
  
  /**
   * Creates a 2-D nested array of zeros to represent the whole arena
   * @param {Number} width 
   * @param {*} height 
  */
  createMatrix(width, height) {
    const matrix = [];
    // decrement height by 1 each iteration. Runs while height > 0 (is truthy)
    while (height--) {
      matrix.push(new Array(width).fill(0));
    }
    return matrix;
  }

  // checks arena for completely filled rows
  arenaSweep() {
    let rowCount = 1;
    outer: for (let y = this.arena.length - 1; y > 0; --y) {
      for (let x = 0; x < this.arena[y].length; x++) {
        // if a row is NOT fully populated, continue the outer loop
        if (this.arena[y][x] === 0) {
          continue outer;
        }
      }

      // remove row with populated positions, fill it with zeroes
      // in preparation for adding back to the top of arena
      const row = this.arena.splice(y, 1[0].fill(0));
      // insert that row at the top of arena
      this.arena.unshift(row);
      // increment y since we removed a row
      y++;
      // update score
      this.player.updateScore(rowCount * 10);
      // double rowCount for each fully-populated row
      rowCount *= 2;
    }
  }

  // attempt to move player piece down 1
  playerDrop() {
    this.player.pos.y++;
    if (collides(this.arena, this.player)) {  // if we collide ...
      this.player.pos.y--;                    // move player back up,
      this.playerMerge();                     // merge player with arena,
      this.player.reset();                    // start a new piece,
      this.arenaSweep();                      // check for filled rows
    }
  }

  // copies all position values from player matrix to arena matrix
  playerMerge() {
    this.player.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          // set arena position value to matching player matrix position value
          this.arena[y + this.player.pos.y][x + this.player.pos.x] = value;
        }
      });
    });
  }

}