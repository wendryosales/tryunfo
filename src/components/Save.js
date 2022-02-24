import React, { Component } from 'react';

class Save extends Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <button
        onClick={ onSaveButtonClick }
        type="submit"
        disabled={ isSaveButtonDisabled }
        data-testid="save-button"
      >
        Salvar
      </button>
    );
  }
}

export default Save;
