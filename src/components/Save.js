import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Save.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Save;
