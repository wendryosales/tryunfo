import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Deck from './Deck';

class CardList extends Component {
  render() {
    const { save, cardItems } = this.props;
    if (save === true) {
      const cards = cardItems.map((elem) => (<Deck
        saveCardName={ elem[0] }
        saveCardDescription={ elem[1] }
        saveCardAttr1={ elem[2] }
        saveCardAttr2={ elem[3] }
        saveCardAttr3={ elem[4] }
        saveCardImage={ elem[5] }
        saveCardRare={ elem[6] }
        saveCardTrunfo={ elem[7] }
        key={ elem[0] }
      />));
      return (
        <div>
          {cards}
        </div>
      );
    }
    return (
      <div />
    );
  }
}

CardList.propTypes = {
  save: PropTypes.bool.isRequired,
  cardItems: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CardList;
