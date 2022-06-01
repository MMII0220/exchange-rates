import React from 'react';
import './Header.css';

class Header extends React.Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    return (
      <header className='header'>
        <hr className='line' />
        <div className='container'>
          <h1 className='header__title'>React Lite Level</h1>
        </div>
      </header>
    );
  }
}

export default Header;
