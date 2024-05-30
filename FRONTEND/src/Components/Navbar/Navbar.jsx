import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <Link style={{textDecoration:'none'}} to='/'>
        <div className='nav-logo'>
          <img src={logo} alt="Logo" />
          <p>SHOPPER</p>
        </div>
      </Link>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{textDecoration:'none'}} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("mens") }}>
          <Link style={{textDecoration:'none'}} to='/mens'>Men</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("womens") }}>
          <Link style={{textDecoration:'none'}} to='/womens'>Women</Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{textDecoration:'none'}}to='/login'><button>Login</button></Link>
        <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt="Cart" /></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}
export default NavBar;

