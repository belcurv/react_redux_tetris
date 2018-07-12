/* ================================= SETUP ================================= */

import React    from 'react';
import { Link } from 'react-router-dom';


/* =========================== CLASS DEFINITION ============================ */

class App extends React.Component {

  render() {
    return (
      <div className="app-container">
        <Link to="/play">Play Tetris</Link>
      </div>
    );
  }

}

export default App;
