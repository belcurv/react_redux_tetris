import React from 'react';
import PropTypes from 'prop-types';
// import Canvas from './Canvas';

export default class GameView extends React.Component {

  state = { ctx : null };

  static propTypes = {
    scale: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  };

}