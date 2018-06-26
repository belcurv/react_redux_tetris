import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

export default class Canvas extends Component {

  componentDidMount() {
    let canvas = findDOMNode(this.refs.canvas);
    let ctx    = canvas.getContext('2d');
    this.props.onContext(ctx);
  }

  render() {
    const { width, height } = this.props;
    const canvasCx = `Canvas ${this.props.className}`;
    return (
      <canvas className={ canvasCx } ref='canvas'
        width={ width + 'px' } height={ height + 'px '}
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