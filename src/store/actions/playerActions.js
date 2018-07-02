export const PLAYER_ROTATE = 'PLAYER_ROTATE';
export const PLAYER_MOVE   = 'PLAYER_MOVE';
export const PLAYER_DROP   = 'PLAYER_DROP';
export const PLAYER_RESET  = 'PLAYER_RESET';
export const PLAYER_SET_X  = 'PLAYER_SET_X';
export const UPDATE_SCORE  = 'UPDATE_SCORE';
export const RESET_SCORE   = 'RESET_SCORE';

export function playerRotate(direction) {
  return {
    type: PLAYER_ROTATE,
    direction
  };
}

export function playerMove(offset) {
  return {
    type: PLAYER_MOVE,
    offset
  };
}

export function playerDrop(direction = 1) {
  return {
    type: PLAYER_DROP,
    direction
  };
}

export function playerReset() {
  return {
    type: PLAYER_RESET
  };
}

export function playerSetX(xPos) {
  return {
    type: PLAYER_SET_X,
    xPos
  };
}

export function updateScore(value) {
  return {
    type: UPDATE_SCORE,
    value
  };
}

export function resetScore() {
  return {
    type: RESET_SCORE
  };
}
