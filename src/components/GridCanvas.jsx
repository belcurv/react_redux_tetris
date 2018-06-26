import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Canvas from './Canvas';

export default class GridCanvas extends Component {

  constructor(props) {
    super(props);
    this.state = { ctx: null };
  }

  renderGrid() {
    const { color, lineWidth, squareSize, offsetX, offsetY, width, height } = this.props;
    const { ctx } = this.state;

    // adjust for vertical screens
    const limit = Math.max(width, height);

    ctx.beginPath();
    ctx.moveTo(0, 0);

    // draw horizontal lines
    for (let y = offsetY % squareSize; y < limit; y += squareSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }

    // draw vertical lines
    for (let x = offsetX % squareSize; x < limit; x += squareSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
  }

  render() {
    const { width, height } = this.props;
    const { ctx } = this.state;
    if (ctx) {
      // canvas render commands go here
      ctx.clearRect(0, 0, width, height);
      this.renderGrid();
    }
    return (
      <Canvas className={ `GridCanvas ${this.props.className}`}
        width={ width } height={ height }
        onContext={ ctx => this.setState({ ctx })}
      />
    );
  }

}

GridCanvas.propTypes = {
  // color for the stroke of the outline of the grid
  color: PropTypes.string,
  className: PropTypes.string,
  
  // the width, in pixels, for the grid line
  lineWidth: PropTypes.number,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  
  squareSize: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
