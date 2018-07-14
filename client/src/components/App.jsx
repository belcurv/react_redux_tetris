/* ================================= SETUP ================================= */

import React    from 'react';
import { Link } from 'react-router-dom';
import Events   from '../models/events';

/* testing event bus */
const events = new Events();

function cb(data) { console.log('Registered in App.jsx!', data); }

console.log('=== registering events in App.jsx ===');
events.on('TEST_EVENT_1', cb);
events.on('TEST_EVENT_2', cb);
events.on('TEST_EVENT_2', cb);
console.log('... done!');


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
