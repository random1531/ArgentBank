import React, { useEffect } from 'react'
import logo from '../../assets/argentBankLogo.webp';
import './header.css'
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [token, setToken] = React.useState(localStorage.getItem('token'))

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    
  }, [token])
  
  const handleClick = () => {
    localStorage.removeItem('token')
    setToken(null)
  }


  return (
    <>
      <header>
        <nav className="main-nav">
          <a className="main-nav-logo" href="#">
            <img
              className="main-nav-logo-image"
              src={logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div>


            {token === null ? (
              <NavLink className="main-nav-item" to="/login">
                <i className="fa fa-user-circle"></i> Sign In
              </NavLink>
            ) : (
              <NavLink className="main-nav-item"
              onClick={handleClick} to="/">
                <i className="fa fa-user-circle"></i>
                Log out
              </NavLink>
            )}



          </div>
        </nav>
      </header>
    </>
  )
}
