import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

  const [isMenuActive, setMenuActive] = useState(true);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };


  return (
    <header className='header'>
      <nav className={`${isMenuActive ? 'header__nav' : 'header__active header__nav'}`}>
        <h1 className='header__title'>Shahin Gharbi</h1>
        <ul>
          <li>
            <NavLink className='header__lien' onClick={toggleMenu} >
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink className='header__lien' onClick={toggleMenu} to='/competences'>
              Compétences
            </NavLink>
          </li>
          <li>
            <NavLink className='header__lien' onClick={toggleMenu} to='/portfolio'>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className='header__lien' onClick={toggleMenu} to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className='header__icons' onClick={toggleMenu}>
            {isMenuActive ? (
                <span>&#9776;</span>
            ) : (
                <span>&#10005;</span>
            )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
