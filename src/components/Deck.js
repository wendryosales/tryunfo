import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Deck extends Component {
  render() {
    const { saveCardName,
      saveCardDescription,
      saveCardAttr1,
      saveCardAttr2,
      saveCardAttr3,
      saveCardImage,
      saveCardRare,
      saveCardTrunfo,
    } = this.props;

    return (
      <div>
        <p>
          { saveCardName }
        </p>
        <img src={ saveCardImage } alt={ saveCardName } />
        <p>
          { saveCardDescription }
        </p>
        <div>
          <p>
            { saveCardAttr1 }
          </p>
          <p>
            { saveCardAttr2 }
          </p>
          <p>
            { saveCardAttr3 }
          </p>
        </div>
        <p>
          { saveCardRare }
        </p>
        <p>
          { saveCardTrunfo }
        </p>
      </div>
    );
  }
}

Deck.propTypes = {
  saveCardName: PropTypes.string.isRequired,
  saveCardDescription: PropTypes.string.isRequired,
  saveCardAttr1: PropTypes.string.isRequired,
  saveCardAttr2: PropTypes.string.isRequired,
  saveCardAttr3: PropTypes.string.isRequired,
  saveCardImage: PropTypes.string.isRequired,
  saveCardRare: PropTypes.string.isRequired,
  saveCardTrunfo: PropTypes.bool.isRequired,
};

export default Deck;
