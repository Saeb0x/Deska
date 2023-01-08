import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  
  const signUserOut = () => {
    signOut(auth).then(() => {
        localStorage.clear()
        window.location.pathname = "/login";
    })
  }
  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>Deska</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "reviews" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Reviews</Link>
            </li>
            {localStorage.getItem("isAuth") && <li className='nav-item'>
              <Link to = "writeReview" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Create Review</Link>
            </li>}
            {localStorage.getItem("isAuth") && <li className='nav-item'>
              <Link to = "profile" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Profile</Link>
            </li>}
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
            </li>
            {!localStorage.getItem("isAuth") ?<li className='nav-item'>
              <Link to = "login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Join Us</Link>
            </li> : <li className='nav-item'><button onClick={signUserOut} className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'> LogOut </button></li>}
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar