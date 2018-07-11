import Opponent from '../models/opponent';

import { getPalette } from '../utils/';

import {
  SET_OPPONENT_POS,
  SET_OPPONENT_MATRIX,
  SET_OPPONENT_SCORE,
  SET_OPPONENT_NAME,
  SET_OPPONENT_PALETTE,
} from '../actions/opponentActions';

const initialOpponentState = new Opponent();

export default (state = initialOpponentState, action) => {

  switch (action.type) {

    case SET_OPPONENT_POS:
      return {
        ...state,
        pos: action.pos
      };

    case SET_OPPONENT_MATRIX:
      return {
        ...state,
        matrix: action.matrix
      };

    case SET_OPPONENT_SCORE:
      return {
        ...state,
        score: action.score
      };

    case SET_OPPONENT_NAME:
      return {
        ...state,
        name: action.name
      };

    case SET_OPPONENT_PALETTE:
      return {
        ...state,
        palette: getPalette(action.index)
      };

    default:
      return state;
  }

};
