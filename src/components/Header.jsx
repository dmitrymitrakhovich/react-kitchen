import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className='green darken-1'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          React Kitchen
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://github.com/dmitrymitrakhovich/react-kitchen'
              target='_blank'
              rel='noreferrer'
            >
              Link
            </a>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
