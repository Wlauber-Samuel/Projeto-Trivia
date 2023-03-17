import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  state = {
    email: '',
    name: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    // const REGEX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const MIN_LENGTH = 1;
    const { email, name } = this.state;
    const { history } = this.props;
    return (
      <div>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={ name }
            placeholder="Digite seu nome"
            onChange={ this.handleChange }
            data-testid="input-player-name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="Digite seu email"
            onChange={ this.handleChange }
            data-testid="input-gravatar-email"
          />
        </label>
        <button
          type="button"
          disabled={
            name.length < MIN_LENGTH || email.length < MIN_LENGTH
          }
          data-testid="btn-play"
        >
          Play
        </button>
        <button
          type="button"
          onClick={ () => history.push('/settings') }
          data-testid="btn-settings"
        >
          Settings
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
