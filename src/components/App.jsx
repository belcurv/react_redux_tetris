/* ================================= SETUP ================================= */

import React from 'react';
import PropTypes from 'prop-types';
import Mousetrap from 'mousetrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { collides } from '../utils';

import {
  playerDrop,
  playerMove,
  playerReset,
  playerRotate
} from '../store/actions/playerActions';

import {
  mergePlayerArena,
  resetArena
} from '../store/actions/gameActions';

import GameView from './GameView/GameView';


/* =========================== CLASS DEFINITION ============================ */

class App extends React.Component {

  componentDidMount() {
    this.props.actions.playerReset(this.props.player);
    Mousetrap.bind('left',  () => this.playerMove(-1));
    Mousetrap.bind('right', () => this.playerMove(1));
    Mousetrap.bind('down',  () => this.playerDrop());
    Mousetrap.bind('up',  () => this.playerUnDrop());
    Mousetrap.bind('a',     () => this.playerRotate(-1));
    Mousetrap.bind('d',     () => this.playerRotate(1));
  }

  componentWillUnmount() {
    Mousetrap.unbind('left');
    Mousetrap.unbind('right');
    Mousetrap.unbind('a');
    Mousetrap.unbind('d');
    Mousetrap.unbind('s');
  }

  playerMove(direction) {
    this.props.actions.playerMove(direction);
    if (collides(this.props.arena, this.props.player)) {
      this.props.actions.playerMove(-direction);
    }
  }

  playerUnDrop() {
    this.props.actions.playerDrop(-1);
  }

  playerDrop() {
    this.props.actions.playerDrop();
    if (collides(this.props.arena, this.props.player)) {
      this.props.actions.playerDrop(-1);
      this.props.actions.mergePlayerArena(this.props.player, this.props.arena);
      this.props.actions.playerReset(this.props.player);
      // if we collide immediately after resetting, it means we've filed
      // rubble to the top or the arena = game over
      if (collides(this.props.arena, this.props.player)) {
        // 1. reset the game board
        this.props.actions.resetArena();
        // 2. reset player's score
        // this.props.actions.resetScore();  // --> TODO
      }
    }
  }

  playerRotate(direction) {
    this.props.actions.playerRotate(direction);
  }

  render() {
    return (
      <div>
        <GameView />
      </div>
    );
  }

}

App.propTypes = {
  arena : PropTypes.array.isRequired,
  player : PropTypes.shape({
    matrix : PropTypes.array,
    pos : PropTypes.shape({
      x : PropTypes.number,
      y : PropTypes.number
    })
  }).isRequired,
  actions : PropTypes.shape({
    playerDrop       : PropTypes.func,
    playerMove       : PropTypes.func,
    playerReset      : PropTypes.func,
    playerRotate     : PropTypes.func,
    mergePlayerArena : PropTypes.func,
    resetArena       : PropTypes.func
  }).isRequired
};

/* ====================== CONNECT COMPONENT TO STORE ======================= */

const mapStateToProps = (state) => ({
  arena  : state.game.arena,
  player : state.game.player
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    playerDrop, 
    playerMove,
    playerReset,
    playerRotate,
    mergePlayerArena,
    resetArena
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
