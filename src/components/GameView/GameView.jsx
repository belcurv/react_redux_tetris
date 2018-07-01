import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Canvas from '../Canvas/Canvas';

class GameView extends React.Component {

  state = { context : null };
  colors = [
    null,      '#FF0D72', '#0DC2FF', '#0DFF72',
    '#F538FF', '#FF8E0D', '#FFE138', '#3877FF'
  ];

  draw() {
    const { context } = this.state;
    context.fillStyle = '#000';
    context.fillRect(0, 0, this.props.arena.width, this.props.arena.height);
    // console.log('draw arena');
    this.drawMatrix(this.props.arena, { x : 0, y : 0 });
    // console.log('draw player');
    this.drawMatrix(this.props.player.matrix, this.props.player.pos);
  }

  drawMatrix(matrix, offset) {
    // console.log('matrix', matrix);
    // console.log('offset', offset);
    const { context } = this.state;
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          context.fillStyle = this.colors[value];
          context.fillRect(x + offset.x, y + offset.y, 1, 1);
        }
      });
    });
  }

  render() {
    const { width, height, scale } = this.props.canvas;
    const { context } = this.state;
    if (context) {
      context.clearRect(0, 0, width, height);
      this.draw();
    }
    return (
      <Canvas className="game-canvas"
        width={ width } height={ height } scale={ scale }
        onContext={ context => this.setState({ context })}
      />
    );
  }

}

GameView.propTypes = {
  arena : PropTypes.array.isRequired,
  canvas : PropTypes.shape({
    width  : PropTypes.number,
    height : PropTypes.number,
    scale  : PropTypes.number
  }).isRequired,
  player : PropTypes.shape({
    score  : PropTypes.number,
    matrix : PropTypes.array,
    pos : PropTypes.shape({
      x : PropTypes.number,
      y : PropTypes.number
    })
  }).isRequired
};

const mapStateToProps = (state) => ({
  arena  : state.game.arena,
  canvas : state.game.canvas,
  player : state.game.player
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameView);
