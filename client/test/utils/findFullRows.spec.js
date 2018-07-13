'use strict';

/* ================================= SETUP ================================= */

import { assert }   from 'chai';
import findFullRows from '../../src/utils/findFullRows';


/* ================================= TESTS ================================= */

describe('findFullRows utility', () => {

  it('should return [4]', () => {
    const arena = [
      [0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0],
      [0, 0, 4, 4, 0, 6, 0, 0, 0, 0, 0, 0],
      [0, 0, 4, 4, 0, 6, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    assert.deepEqual(findFullRows(arena), [4]);
  });

  it('should return [4, 3]', () => {
    const arena = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0],
      [1, 2, 1, 5, 5, 5, 1, 6, 1, 1, 1, 1],
      [1, 2, 1, 5, 1, 1, 1, 6, 1, 1, 1, 1]
    ];
    assert.deepEqual(findFullRows(arena), [4, 3]);
  });

  it('should return [3, 1]', () => {
    const arena = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    assert.deepEqual(findFullRows(arena), [3, 1]);
  });

  it('should return [3]', () => {
    const arena = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    assert.deepEqual(findFullRows(arena), [3]);
  });

  it('should return [3]', () => {
    const arena = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
    ];
    assert.deepEqual(findFullRows(arena), [3]);
  });

  it('should return [2]', () => {
    const arena = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    assert.deepEqual(findFullRows(arena), [2]);
  });

  it('should return [1]', () => {
    const arena = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    assert.deepEqual(findFullRows(arena), [1]);
  });

  it('should return [0]', () => {
    const arena = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    assert.deepEqual(findFullRows(arena), [0]);
  });

  it('should return [0]', () => {
    const arena = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
    ];
    assert.deepEqual(findFullRows(arena), [0]);
  });

});
