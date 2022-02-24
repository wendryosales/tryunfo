import React, { Component } from 'react';

class Rare extends Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <select
        onChange={ onInputChange }
        data-testid="rare-input"
        type="select"
        name="cardRare"
        value={ cardRare }
      >
        {' '}
        Trunfo
        <option
          name="normal"
          value="normal"
        >
          normal
        </option>

        <option
          name="raro"
          value="raro"
        >
          raro
        </option>
        <option
          name="muito raro"
          value="muito raro"
        >
          muito raro
        </option>
      </select>
    );
  }
}

export default Rare;
