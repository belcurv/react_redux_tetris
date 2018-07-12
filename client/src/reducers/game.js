import {
  createMatrix,
  merge,
} from '../utils/';

import {
  MERGE_PLAYER_ARENA,
  RESET_ARENA,
  UPDATE_ARENA,
  TOGGLE_PAUSE,
  ROW_FLASH
} from '../actions/gameActions';

const initialGameState = {
  arena : createMatrix(12, 20),
  canvas : {
    width  : 240,
    height : 400,
    scale  : 20
  },
  paused : false
};

export default (state = initialGameState, action) => {

  switch (action.type) {

    case MERGE_PLAYER_ARENA:
      return {
        ...state,
        arena: merge(action.player, action.arena)
      };

    case RESET_ARENA:
      return {
        ...state,
        arena: createMatrix(12, 20)
      };


    case UPDATE_ARENA:
      return {
        ...state,
        arena: action.newArena
      };

    case TOGGLE_PAUSE:
      return {
        ...state,
        paused: !state.paused
      };

    case ROW_FLASH:
      return {
        ...state,
        arena: state.arena.map((row, y) => {
          return (y === action.row) ? row.fill('F') : row;
        })
      };

    default:
      return state;
  }

};
