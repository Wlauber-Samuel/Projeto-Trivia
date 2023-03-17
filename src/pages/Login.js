import React from 'react';

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
      </div>
    );
  }
}

export default Login;
