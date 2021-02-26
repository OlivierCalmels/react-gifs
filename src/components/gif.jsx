/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const id = "26FxypSnWsXS69nTW"
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy/200.gif`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
