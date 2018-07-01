/* ================================= SETUP ================================= */

import React from 'react';
import PropTypes from 'prop-types';
import Mousetrap from 'mousetrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { playerMove, playerRotate } from './store/actions';


/* =========================== CLASS DEFINITION ============================ */

class App extends React.Component {

  componentDidMount() {
    Mousetrap.bind('left',  () => this.playerRotate('CCW'));
    Mousetrap.bind('right', () => this.playerRotate('CW'));
    Mousetrap.bind('a',     () => this.playerMove('LEFT'));
    Mousetrap.bind('d',     () => this.playerMove('RIGHT'));
    Mousetrap.bind('s',     () => this.playerMove('DOWN'));
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
  }

  playerRotate(direction) {
    this.props.actions.playerRotate(direction);
  }

  render() {
    return (
      <div>
        <h1>I can haz exists?</h1>
      </div>
    );
  }

}

App.propTypes = {
  playerSate : PropTypes.shape({
    score  : PropTypes.number,
    matrix : PropTypes.array,
    pos : PropTypes.shape({
      x : PropTypes.number,
      y : PropTypes.number
    })
  }).isRequired,
  arenaState : PropTypes.shape({
    width  : PropTypes.number,
    height : PropTypes.number,
    matrix : PropTypes.array
  }).isRequired,
  actions : PropTypes.shape({
    playerMove   : PropTypes.func,
    playerRotate : PropTypes.func
  }).isRequired
};

/* ====================== CONNECT COMPONENT TO STORE ======================= */

const mapStateToProps = (state) => ({
  playerState : state.playerState,
  arenaState  : state.arenaState
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    playerMove,
    playerRotate
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
