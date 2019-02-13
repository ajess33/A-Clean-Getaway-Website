import React from 'react'
import Link from 'gatsby-link'
import '../styles/header.css'
import MedLogo from '../assets/logo-medium.png'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <div>
            <h1 className="header__title">A Clean Getaway</h1>
            <h2 className="header__slogan">
              <em>"We Don't Cut Corners, We Clean Them!"</em>
            </h2>
            <p className="header__phone">319-929-6266</p>
            <Link className="btn__link" to="/contact/">
              GET A QUOTE
            </Link>
          </div>
          <img src={MedLogo} alt="Illustration of a leaf" />
        </div>
      </header>
    )
  }
}

export default Header
