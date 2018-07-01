export const PLAYER_ROTATE = 'PLAYER_ROTATE';
export const PLAYER_MOVE   = 'PLAYER_MOVE';
export const PLAYER_DROP   = 'PLAYER_DROP';
export const PLAYER_RESET  = 'PLAYER_RESET';

export function playerRotate(direction) {
  return {
    type: PLAYER_ROTATE,
    payload: direction
  };
}

export function playerMove(direction) {
  return {
    type: PLAYER_MOVE,
    payload: direction
  };
}

export function playerDrop(direction = 1) {
  return {
    type: PLAYER_DROP,
    payload: direction
  };
}

export function playerReset() {
  return {
    type: PLAYER_RESET
  };
}
