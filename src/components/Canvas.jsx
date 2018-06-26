import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Canvas extends Component {

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

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

Canvas.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onContext: PropTypes.func.isRequired,
  className: PropTypes.string
};