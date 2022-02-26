import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import CardList from './components/CardList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      save: false,
      cardItems: [],
    };
  }

  defaultState = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardItems,
    } = this.state;

    const card = [cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo];
    cardItems.push(card);
    this.setState({
      save: true,
    }, this.defaultState);
  }

  onDisableButtonSave = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      isSaveButtonDisabled,
    } = this.state;

    // Test if it's empty
    const isEmpty = [cardName, cardDescription, cardImage, cardRare]
      .some((elem) => elem.length <= 0);

    // convert to number and sum
    const numcardAttr1 = parseInt(cardAttr1, 10);
    const numcardAttr2 = parseInt(cardAttr2, 10);
    const numcardAttr3 = parseInt(cardAttr3, 10);
    const sum = numcardAttr1 + numcardAttr2 + numcardAttr3;

    const maxValue = 210;
    const maxValueIndividual = 90;

    const conditions = (!isEmpty
    && sum <= maxValue
    && numcardAttr1 <= maxValueIndividual
    && numcardAttr2 <= maxValueIndividual
    && numcardAttr3 <= maxValueIndividual
    && numcardAttr1 >= 0
    && numcardAttr2 >= 0
    && numcardAttr3 >= 0
    );

    // toogle
    if (isSaveButtonDisabled === false) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }

    if (conditions) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.onDisableButtonSave);
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardItems,
      save,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          checkIfHasTrunfo={ this.checkIfHasTrunfo }
          cardItems={ cardItems }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          <p>Baralho</p>
          <CardList
            save={ save }
            cardItems={ cardItems }
          />
        </div>
      </div>
    );
  }
}

export default App;
