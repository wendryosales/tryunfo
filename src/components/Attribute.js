import React, { Component } from 'react';

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

export default Attribute;
