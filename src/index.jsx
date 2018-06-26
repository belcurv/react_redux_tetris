import React     from 'react';
import ReactDOM  from 'react-dom';
import GridCanvas from './components/GridCanvas';


/* ============================= CONFIG STORE ============================== */


/* ============================== BIND EVENTS ============================== */


/* ================================ STARTUP ================================ */

ReactDOM.render(
  <GridCanvas
    width={ 600 }   height={ 400 }    color="teal"
    lineWidth={ 1 } squareSize={ 10 }
    offsetX={ 5 }   offsetY={ 5 }
  />,
  document.getElementById('app')
);
