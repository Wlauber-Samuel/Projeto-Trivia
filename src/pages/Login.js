import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailChange, nameChange } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    name: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { history, dispatch } = this.props;
    const { email, name } = this.state;
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();
    const { token } = data;
    dispatch(emailChange(email));
    dispatch(nameChange(name));
    history.push('/game');
    localStorage.setItem('token', token);
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
          onClick={ () => this.handleClick() }
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
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
