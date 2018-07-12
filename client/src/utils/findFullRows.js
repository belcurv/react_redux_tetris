/**
 * Finds full rows in arena
 * A full row means all elements contain an integer between 1 - 7
 * @param    {Array}   arena   Game arena
 * @returns  {Array}           Indices of full rows in reverse order, eg: [4, 3]
*/
const findFullRows = (arena) => {
  return arena
    .reduce((fullRows, row, ind) => {
      return row.every(value => (value > 0 && value < 8))
        ? [ind, ...fullRows] // if row is full, add `ind` to front of fullRows
        : fullRows;
    }, []);
};

export default findFullRows;
