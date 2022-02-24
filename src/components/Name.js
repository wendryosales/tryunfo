import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Name extends Component {
  render() {
    const { cardName, onInputChange } = this.props;
    return (
      <input
        onChange={ onInputChange }
        data-testid="name-input"
        type="text"
        value={ cardName }
        name="cardName"
      />
    );
  }
}

Name.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Name;
