import { rotate, createMatrix } from '../../utils';

import {
  PLAYER_ROTATE_CCW, PLAYER_ROTATE_CW,
  PLAYER_MOVE_LEFT, PLAYER_MOVE_RIGHT, PLAYER_MOVE_DOWN
} from '../actions';

const initialGameState = {
  player : {
    score  : 0,
    matrix : [],
    pos    : { x : 0, y : 0 }
  },
  arena : {
    width  : 12,
    height : 20,
    matrix : []
  }
};

export default (state = initialGameState, action) => {
  switch (action.type) {
    case PLAYER_ROTATE_CCW:
      break;
    case PLAYER_ROTATE_CW:
      break;
    case PLAYER_MOVE_LEFT:
      break;
    case PLAYER_MOVE_RIGHT:
      break;
    case PLAYER_MOVE_DOWN:
      break;
    default:
      return state;
  }
};
