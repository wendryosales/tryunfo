import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    const isTrunfo = () => {
      if (cardTrunfo) {
        return <p data-testid="trunfo-card">Super Trunfo</p>;
      }
      return <p> </p>;
    };

    return (
      <div>
        <p data-testid="name-card">
          { cardName }
        </p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <div>
          <p data-testid="attr1-card">
            { cardAttr1 }
          </p>
          <p data-testid="attr2-card">
            { cardAttr2 }
          </p>
          <p data-testid="attr3-card">
            { cardAttr3 }
          </p>
        </div>
        <p data-testid="rare-card">
          { cardRare }
        </p>
        {isTrunfo()}
      </div>
    );
  }
}

export default Card;
