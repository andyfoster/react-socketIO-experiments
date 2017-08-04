import React from 'react';

class Header extends React.Component {

  propTypes: {
    title: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    );
  }

}

export default Header;
