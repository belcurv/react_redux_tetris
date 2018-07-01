import { createMatrix, merge, resetPlayer, rotate } from '../../utils/';

import {
  PLAYER_ROTATE,
  PLAYER_MOVE,
  PLAYER_DROP,
  PLAYER_RESET
} from '../actions/playerActions';

import {
  MERGE_PLAYER_ARENA,
  RESET_ARENA
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
      console.log(action.type, action.payload);
      return {
        ...state,
        player: {
          ...state.player,
          matrix: rotate(state.player.matrix, action.payload)
        }
      };

    case PLAYER_MOVE:
      console.log(action.type, action.payload);
      return {
        ...state,
        player: {
          ...state.player,
          pos: {
            ...state.player.pos,
            x: state.player.pos.x += action.payload
          }          
        }
      };

    case PLAYER_DROP:
      console.log(action.type, action.payload);
      console.log(state.player);
      return {
        ...state,
        player: {
          ...state.player,
          pos: {
            ...state.player.pos,
            y: state.player.pos.y += action.payload
          }          
        }
      };

    case PLAYER_RESET:
      console.log(action.type);
      return {
        ...state,
        player: (resetPlayer(state.player, state.arena))
      };

    case MERGE_PLAYER_ARENA:
      console.log(action.type);
      return {
        ...state,
        arena: merge(action.payload.player, action.payload.arena)
      };

    case RESET_ARENA:
      console.log(action.type);
      return {
        ...state,
        arena: createMatrix(12, 20)
      };

    default:
      return state;
  }

};
