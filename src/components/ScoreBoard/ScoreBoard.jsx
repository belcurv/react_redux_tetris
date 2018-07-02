import React from 'react';
import PropTypes from 'prop-types';
import './ScoreBoard.css';

const ScoreBoard = ({ score, pauseToggle }) => (
  <div className="score-board">
    <h1 className="score-board__h1">Score: { score }</h1>
    <button onClick={ pauseToggle }>Pause</button>
  </div>
);

ScoreBoard.propTypes = {
  score       : PropTypes.number.isRequired,
  pauseToggle : PropTypes.func.isRequired
};

export default ScoreBoard;
