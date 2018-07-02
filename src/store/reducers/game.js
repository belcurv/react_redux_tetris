import { createMatrix, merge, resetPlayer, rotate } from '../../utils/';

import {
  PLAYER_ROTATE,
  PLAYER_MOVE,
  PLAYER_DROP,
  PLAYER_RESET,
  PLAYER_SET_X,
  UPDATE_SCORE,
  RESET_SCORE
} from '../actions/playerActions';

import {
  MERGE_PLAYER_ARENA,
  RESET_ARENA,
  UPDATE_ARENA
} from '../actions/gameActions';

const initialGameState = {
  player : {
    score  : 0,
    matrix : [],
    pos : { x : 0, y : 0 }
  },
  arena : createMatrix(12, 20),
  canvas : {
    width  : 240,
    height : 400,
    scale  : 20
  }
};

export default (state = initialGameState, action) => {

  switch (action.type) {

    case PLAYER_ROTATE:
      console.log(action.type, action.direction);
      return {
        ...state,
        player: {
          ...state.player,
          matrix: rotate(state.player.matrix, action.direction)
        }
      };

    case PLAYER_MOVE:
      console.log(action.type, action.offset);
      return {
        ...state,
        player: {
          ...state.player,
          pos: {
            ...state.player.pos,
            x: state.player.pos.x += action.offset
          }          
        }
      };

    case PLAYER_DROP:
      console.log(action.type);
      return {
        ...state,
        player: {
          ...state.player,
          pos: {
            ...state.player.pos,
            y: state.player.pos.y += action.direction
          }          
        }
      };

    case PLAYER_RESET:
      console.log(action.type);
      return {
        ...state,
        player: (resetPlayer(state.player, state.arena))
      };

    case PLAYER_SET_X:
      console.log(action.type);
      return {
        ...state,
        player: {
          ...state.player,
          pos: {
            x: action.xPos
          }
        }
      };

    case MERGE_PLAYER_ARENA:
      console.log(action.type);
      return {
        ...state,
        arena: merge(action.player, action.arena)
      };

    case UPDATE_SCORE:
      console.log(action.type);
      return {
        ...state,
        player: {
          ...state.player,
          score: state.player.score += action.value
        }
      };

    case RESET_SCORE:
      console.log(action.type);
      return {
        ...state,
        player: {
          ...state.player,
          score: 0
        }
      };

    case RESET_ARENA:
      console.log(action.type);
      return {
        ...state,
        arena: createMatrix(12, 20)
      };

    case UPDATE_ARENA:
      console.log(action.type);
      return {
        ...state,
        arena: action.newArena
      };

    default:
      return state;
  }

};
