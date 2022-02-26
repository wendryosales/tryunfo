import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <input
        onChange={ onInputChange }
        data-testid="description-input"
        type="textarea"
        value={ cardDescription }
        name="cardDescription"
      />
    );
  }
}

Description.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardDescription: PropTypes.string.isRequired,
};

export default Description;
