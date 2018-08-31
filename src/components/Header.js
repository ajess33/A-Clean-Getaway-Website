import React from 'react'
import Link from 'gatsby-link'
import '../styles/header.css'
import SmallLogo from '../assets/logo-small.png'
import MedLogo from '../assets/logo-medium.png'

class Header extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="center">
          <div className="navbar">
            <nav className="navbar__brand">
              <div>
                <Link className="navbar__logo" exact to="/">
                  A Clean Getaway
                  <img className="logo" src={SmallLogo} alt="leaf logo" />
                </Link>
              </div>
              <div className="navbar__item navbar__toggle">
                <p>Menu</p>
              </div>
            </nav>
            <nav className="navbar__items--right">
              <div>
                <Link className="navbar__item" to="/services/">
                  Services
                </Link>
              </div>
              <div>
                <Link className="navbar__item" to="/tips/">
                  Cleaning Tips
                </Link>
              </div>
              <div>
                <Link className="navbar__item" to="/testimonials/">
                  Testimonials
                </Link>
              </div>
              <div>
                <Link className="navbar__item" to="/contact/">
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
          <div>
            <header>
              <div className="header">
                <div>
                  <h1 className="header__title">A Clean Getaway, LLC</h1>
                  <h4 className="header__slogan">
                    <em>"We Don't Cut Corners, We Clean Them!"</em>
                  </h4>

                  <Link className="btn__link" to="/contact/">
                    GET A QUOTE
                  </Link>
                </div>
                <img src={MedLogo} alt="Illustration of a leaf" />
              </div>
            </header>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
