import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="of-the">
            <span className="of">of</span>
            <span class="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    );
  }
}

export default Header;
