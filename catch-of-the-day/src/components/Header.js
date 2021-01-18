import React, { Component } from 'react';

const Header = ({ tagline }) => (
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
      <span>{tagline}</span>
    </h3>
  </header>
);

export default Header;
