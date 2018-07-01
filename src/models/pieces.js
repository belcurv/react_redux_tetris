// returns 2d nested piece spec'd by param
const createPiece = (type) => {
  if (type === 'T') {
    return [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ];
  } else if (type === 'O') {
    return [
      [2, 2],
      [2, 2]
    ];
  } else if (type === 'L') {
    return [
      [0, 0, 3],
      [3, 3, 3],
      [0, 0, 0]
    ];
  } else if (type === 'J') {
    return [
      [4, 0, 0],
      [4, 4, 4],
      [0, 0, 0]
    ];
  } else if (type === 'I') {
    return [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [5, 5, 5, 5],
      [0, 0, 0, 0]
    ];
  } else if (type === 'S') {
    return [
      [0, 6, 6],
      [6, 6, 0],
      [0, 0, 0]
    ];
  } else if (type === 'Z') {
    return [
      [7, 7, 0],
      [0, 7, 7],
      [0, 0, 0]
    ];
  }
};

export default createPiece;
