export const MERGE_PLAYER_ARENA = 'MERGE_PLAYER_ARENA';
export const RESET_ARENA = 'RESET_ARENA';

export function mergePlayerArena(player, arena) {
  return {
    type: MERGE_PLAYER_ARENA,
    payload: { player, arena }
  };
}

export function resetArena() {
  return {
    type: RESET_ARENA
  };
}
