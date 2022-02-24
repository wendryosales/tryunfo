import React, { Component } from 'react';

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

export default Description;
