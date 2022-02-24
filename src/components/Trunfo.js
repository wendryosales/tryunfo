import React, { Component } from 'react';

class Trunfo extends Component {
  render() {
    const { onInputChange, cardTrunfo } = this.props;
    return (
      <label htmlFor="trunfo">
        Trunfo
        <input
          onChange={ onInputChange }
          data-testid="trunfo-input"
          name="cardTrunfo"
          type="checkbox"
          checked={ cardTrunfo }
        />
      </label>
    );
  }
}

export default Trunfo;
