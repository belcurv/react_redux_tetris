export const MERGE_PLAYER_ARENA = 'MERGE_PLAYER_ARENA';
export const RESET_ARENA        = 'RESET_ARENA';
export const UPDATE_ARENA       = 'UPDATE_ARENA';

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
