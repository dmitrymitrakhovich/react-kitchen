import React from "react";

export default function Header() {
  return (
    <nav className='green darken-1'>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo'>
          React Kitchen
        </a>
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
        </ul>
      </div>
    </nav>
  );
}
