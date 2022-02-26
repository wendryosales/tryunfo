import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Attribute from './Attribute';
import Description from './Description';
import Name from './Name';
import Image from './Image';
import Trunfo from './Trunfo';
import Rare from './Rare';
import Save from './Save';

class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      cardItems,
    } = this.props;
    return (
      <div>
        <form>
          <Name cardName={ cardName } onInputChange={ onInputChange } />
          <Description
            cardDescription={ cardDescription }
            onInputChange={ onInputChange }
          />
          <Attribute
            onInputChange={ onInputChange }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
          />
          <Image
            onInputChange={ onInputChange }
            cardImage={ cardImage }
          />
          <Rare
            onInputChange={ onInputChange }
            cardRare={ cardRare }
          />
          <Trunfo
            cardItems={ cardItems }
            onInputChange={ onInputChange }
            cardTrunfo={ cardTrunfo }
          />
          <Save
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ onSaveButtonClick }
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  cardItems: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Form;
