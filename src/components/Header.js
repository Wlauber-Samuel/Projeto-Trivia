import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { name, gravatar } = this.props;
    const { player: { score } } = JSON.parse(localStorage.getItem('state'));
    return (
      <div>
        <img data-testid="header-profile-picture" src={ gravatar } alt="Profile" />
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.login.name,
  gravatar: state.gamepage.gravatar,
  score: state.gamepage.score,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatar: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
