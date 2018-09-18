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
          <div>
            <header>
              <div className="header">
                <div>
                  <h1 className="header__title">A Clean Getaway, LLC</h1>
                  <h4 className="header__slogan">
                    <em>"We Don't Cut Corners, We Clean Them!"</em>
                  </h4>
                  <p className="header__phone">319-929-2816</p>
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
