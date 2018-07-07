export const SET_OPPONENT_POS     = 'SET_OPPONENT_POS';
export const SET_OPPONENT_MATRIX  = 'SET_OPPONENT_MATRIX';
export const SET_OPPONENT_SCORE   = 'SET_OPPONENT_SCORE';
export const SET_OPPONENT_NAME    = 'SET_OPPONENT_NAME';
export const SET_OPPONENT_PALETTE = 'SET_OPPONENT_PALETTE';

export function setOpponentPos (pos) {
  return {
    type: SET_OPPONENT_POS,
    pos
  };
}

export function setOpponentMatrix (matrix) {
  return {
    type: SET_OPPONENT_MATRIX,
    matrix
  };
}

export function setOpponentScore (score) {
  return {
    type: SET_OPPONENT_SCORE,
    score
  };
}

export function setOpponentName (name) {
  return {
    type: SET_OPPONENT_NAME,
    name
  };
}

export function setOpponentPalette (index) {
  return {
    type: SET_OPPONENT_PALETTE,
    index
  };
}
