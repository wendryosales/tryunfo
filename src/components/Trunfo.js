import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Trunfo extends Component {
  render() {
    const { onInputChange, cardTrunfo, cardItems } = this.props;
    let cardItemsV = cardItems;
    if (cardItems === undefined) {
      cardItemsV = [];
      cardItemsV[7] = 'false';
    }
    const hasTrunfo = cardItemsV.some((element) => element[7] === true);

    if (hasTrunfo) {
      return (
        <label htmlFor="trunfo">
          <p>Você já tem um Super Trunfo em seu baralho</p>
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

Trunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardItems: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Trunfo;
