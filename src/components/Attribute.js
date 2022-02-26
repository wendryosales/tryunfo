import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attribute extends Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3, onInputChange } = this.props;
    return (
      <div>
        <input
          onChange={ onInputChange }
          data-testid="attr1-input"
          type="number"
          value={ cardAttr1 }
          name="cardAttr1"
        />
        <input
          onChange={ onInputChange }
          data-testid="attr2-input"
          type="number"
          value={ cardAttr2 }
          name="cardAttr2"
        />
        <input
          onChange={ onInputChange }
          data-testid="attr3-input"
          type="number"
          value={ cardAttr3 }
          name="cardAttr3"
        />
      </div>
    );
  }
}

Attribute.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
};

export default Attribute;
