import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Image.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardImage: PropTypes.string.isRequired,
};

export default Image;
