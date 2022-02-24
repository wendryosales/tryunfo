import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { cardImage, onInputChange } = this.props;

    return (
      <input
        onChange={ onInputChange }
        data-testid="image-input"
        type="text"
        value={ cardImage }
        name="cardImage"
      />
    );
  }
}

export default Image;
