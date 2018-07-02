/* ================================= SETUP ================================= */

import React       from 'react';
import PropTypes   from 'prop-types';
import Mousetrap   from 'mousetrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { collides } from '../utils';

import {
  playerDrop,
  playerMove,
  playerReset,
  playerRotate,
  playerSetX,
  updateScore,
  resetScore
} from '../store/actions/playerActions';

import {
  mergePlayerArena,
  resetArena,
  updateArena
} from '../store/actions/gameActions';

import GameView   from './GameView/GameView';
import ScoreBoard from './ScoreBoard/ScoreBoard';


/* =========================== CLASS DEFINITION ============================ */

class App extends React.Component {

  // local component state for loop timing variables
  state = {
    dropCounter  : 0,
    dropInterval : 1000,
    lastTime     : 0
  }
  
  componentDidMount() {
    Mousetrap.bind('left',  () => this.playerMove(-1));
    Mousetrap.bind('right', () => this.playerMove(1));
    Mousetrap.bind('down',  () => this.playerDrop());
    Mousetrap.bind('a',     () => this.playerRotate(-1));
    Mousetrap.bind('d',     () => this.playerRotate(1));
    this.props.actions.playerReset(this.props.player);
    this.startLoop();
  }

  componentWillUnmount() {
    this.stopLoop();
    Mousetrap.unbind('left');
    Mousetrap.unbind('right');
    Mousetrap.unbind('a');
    Mousetrap.unbind('d');
    Mousetrap.unbind('s');
  }

  arenaSweep = () => {
    let rowCount = 1;
    let newArena = this.props.arena.map(row => row.slice(0));
    outer: for (let y = newArena.length - 1; y > 0; --y) {
      for (let x = 0; x < newArena[y].length; x++) {
        // if a row is NOT filled, continue
        if (newArena[y][x] === 0) {
          continue outer;
        }
      }

      // remove the row with all filled positions, return zero-filled row
      const row = newArena.splice(y, 1)[0].fill(0);
      // insert that zeroed row at the top of the arena
      newArena.unshift(row);
      // update actual arena
      this.props.actions.updateArena(newArena);
      // increment y since we removed a row
      y++;
      // update player score
      this.props.actions.updateScore(rowCount * 10);
      // make each additional filled row count 2x as much
      rowCount *= 2;
    }
  }

  playerMove = (direction) => {
    this.props.actions.playerMove(direction);
    if (collides(this.props.arena, this.props.player)) {
      this.props.actions.playerMove(-direction);
    }
  }

  playerDrop = () => {
    this.props.actions.playerDrop();
    if (collides(this.props.arena, this.props.player)) {
      this.props.actions.playerDrop(-1);
      this.props.actions.mergePlayerArena(this.props.player, this.props.arena);
      // check for filled rows
      this.arenaSweep();

      // reset player. Create new piece at top
      this.props.actions.playerReset(this.props.player);
      // if we collide immediately after resetting, it means we've filed
      // rubble to the top or the arena = game over
      if (collides(this.props.arena, this.props.player)) {
        this.props.actions.resetArena();
        this.props.actions.resetScore();
      }
    }
    this.setState({ dropCounter: 0 });
  }

  // tries to rotate the player matrix.
  playerRotate = (direction) => {
    this.props.actions.playerRotate(direction);
    if ((collides(this.props.arena, this.props.player))) {
      this.props.actions.playerRotate(-direction);
    }

    // if we colide with something, kick position left/right
    // KICK DOES NOT WORK WITH "I" PIECES YET
    // // capture initial x position
    // const xPos = this.props.player.pos.x;
    // let offset = 1;
    // while (collides(this.props.arena, this.props.player)) {
    //   this.props.actions.playerMove(offset);
    //   // grow offset by 1 in alternating opposite directions
    //   offset = -(offset + (offset > 0 ? 1 : -1));
    //   if (offset > this.props.player.matrix[0].length) {
    //     // offset exceeds width of the player; un-rotate
    //     this.props.actions.playerRotate(-direction);
    //     // reset player x position to captured initial x position
    //     this.props.actions.playerSetX(xPos);
    //     return;
    //   }
    // }
  }

  startLoop = () => {
    if (!this.frameId) {
      this.frameId = window.requestAnimationFrame(this.loop);
    }
  }

  stopLoop = () => {
    window.cancelAnimationFrame(this.frameId);
  }

  loop = (time = 0) => {
    // perform loop work here
    const deltaTime = time - this.state.lastTime;
    this.setState(prevState => ({ dropCounter: prevState.dropCounter + deltaTime }));

    if(this.state.dropCounter > this.state.dropInterval) {
      this.playerDrop();
    }

    this.setState({ lastTime: time });

    // set up next iteration of the loop
    this.frameId = window.requestAnimationFrame(this.loop);
  }

  render() {
    return (
      <div className="app-container">
        <ScoreBoard score={ this.props.player.score } />
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
    }),
    score : PropTypes.number
  }).isRequired,
  actions : PropTypes.shape({
    playerDrop       : PropTypes.func,
    playerMove       : PropTypes.func,
    playerReset      : PropTypes.func,
    playerRotate     : PropTypes.func,
    playerSetX       : PropTypes.func,
    updateScore      : PropTypes.func,
    resetScore       : PropTypes.func,
    mergePlayerArena : PropTypes.func,
    resetArena       : PropTypes.func,
    updateArena      : PropTypes.func
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
    playerSetX,
    updateScore,
    resetScore,
    mergePlayerArena,
    resetArena,
    updateArena
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
