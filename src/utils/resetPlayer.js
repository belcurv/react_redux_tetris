import createPiece from './createPiece';

/**
 * picks a piece at random,
 * resets player x/y position
 * @param    {Object}   player   Player object to update
 * @param    {Object}   arena    Arena. We need its width to center new piece
 * @returns  {Object}            Updated player object
*/
const resetPlayer = (player, arena) => {
  const pieces = 'ILJOTSZ';
  const newPlayer = Object.assign({}, player, { matrix: [], pos: { } });
  newPlayer.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
  newPlayer.pos.y = 0;
  newPlayer.pos.x = (arena[0].length / 2 | 0) - (newPlayer.matrix[0].length / 2 | 0);
  
  console.log(player);
  return newPlayer;
};

export default resetPlayer;
