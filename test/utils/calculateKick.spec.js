'use strict';

/* ================================= SETUP ================================= */

import { assert }    from 'chai';
import calculateKick from '../../src/utils/calculateKick';

const arena = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 1]
];

const player = {
  pos : { x : 0, y : 0 },
  matrix : [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ]
};


/* ================================= TESTS ================================= */


describe('calculateKick utility', () => {

  beforeEach(() => {
    player.pos = { x : 0, y : 0 };
  });

  it('should be a function', () => {
    assert.isFunction(calculateKick);
  });

  it('should return 1 when trying to rotate against left side', () => {
    player.pos.x = -2;
    assert.equal(calculateKick(player, arena), 1);
  });

  it('should return -1 when trying to rotate against right side', () => {
    player.pos.x = 6;
    assert.equal(calculateKick(player, arena), -1);
  });

});
