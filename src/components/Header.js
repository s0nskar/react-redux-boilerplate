import React, {Component, PropTypes} from 'react';

class Header extends Component {
  render(){
    const {text} = this.props;

    return (
      <h1>{text}</h1>
    )
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header;
