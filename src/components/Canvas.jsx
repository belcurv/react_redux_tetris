import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Canvas extends Component {

  canvasRef = React.createRef();

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onContext: PropTypes.func.isRequired,
    className: PropTypes.string
  };

  componentDidMount() {
    let canvas = this.canvasRef.current;
    let ctx    = canvas.getContext('2d');
    this.props.onContext(ctx);
  }

  render() {
    const { width, height } = this.props;
    const canvasClass = `Canvas ${this.props.className}`;
    return (
      <canvas className={ canvasClass } ref={ this.canvasRef }
        width={ `${width}px` } height={ `${height}px` }
        style={ { display: 'block' } }
      />
    );
  }

}
