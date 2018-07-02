export const MERGE_PLAYER_ARENA = 'MERGE_PLAYER_ARENA';
export const RESET_ARENA        = 'RESET_ARENA';
export const UPDATE_ARENA       = 'UPDATE_ARENA';
export const PAUSE_TOGGLE       = 'PAUSE_TOGGLE';

export function mergePlayerArena(player, arena) {
  return {
    type: MERGE_PLAYER_ARENA,
    player,
    arena
  };
}

export function resetArena() {
  return {
    type: RESET_ARENA
  };
}

export function updateArena(newArena) {
  return {
    type: UPDATE_ARENA,
    newArena
  };
}

export function pauseToggle() {
  return {
    type: PAUSE_TOGGLE
  };
}
