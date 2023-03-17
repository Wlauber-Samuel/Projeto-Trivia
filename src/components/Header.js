import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { name } = this.props;
    // const { player: { score } } = JSON.parse(localStorage.getItem('state'));
    return (
      <div>
        <p data-testid="header-player-name">{ name }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.gamepage.completeName,
  // gravatar: state.gamepage.gravatar,
  // score: state.gamepage.score,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  // gravatar: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
