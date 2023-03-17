import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGravatar } from '../redux/actions';

class Header extends React.Component {
  componentDidMount() {
    const { dispatch, email } = this.props;
    dispatch(fetchGravatar(email));
  }

  render() {
    const { name, gravatar, score } = this.props;

    return (
      <div>
        <img src={ gravatar } alt="Gravatar" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.gamepage.completeName,
  email: state.gamepage.email,
  gravatar: state.gamepage.gravatar,
  score: state.gamepage.score,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  gravatar: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
