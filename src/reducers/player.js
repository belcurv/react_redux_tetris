import Player from '../models/player';

import {
  resetPlayer,
  rotate,
  getPalette
} from '../utils/';

import {
  PLAYER_ROTATE,
  PLAYER_MOVE,
  PLAYER_DROP,
  PLAYER_RESET,
  UPDATE_SCORE,
  RESET_SCORE,
  SET_PALETTE
} from '../actions/playerActions';

const initialPlayerState = new Player();

export default (state = initialPlayerState, action) => {

  switch (action.type) {

    case PLAYER_ROTATE:
      return {
        ...state,
        matrix: rotate(state.matrix, action.direction)
      };

    case PLAYER_MOVE:
      return {
        ...state,
        pos: {
          ...state.pos,
          x: state.pos.x += action.offset
        }
      };

    case PLAYER_DROP:
      return {
        ...state,
        pos: {
          ...state.pos,
          y: state.pos.y += action.direction
        }          
      };

    case PLAYER_RESET:
      return resetPlayer(action.player, action.arena);

    case UPDATE_SCORE:
      return {
        ...state,
        score: state.score += action.value
      };

    case RESET_SCORE:
      return {
        ...state,
        score: 0
      };

    case SET_PALETTE:
      return {
        ...state,
        palette: getPalette(action.index)
      };

    default:
      return state;
  }

};
