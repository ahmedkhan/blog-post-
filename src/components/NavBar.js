import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
  
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href='/' className="brand-logo">Poke' Times</a>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/newpost'>New Post</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
export default Navbar