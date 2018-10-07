import React from 'react'
import Link from 'gatsby-link'
import '../styles/nav.css'
import SmallLogo from '../assets/logo-small.png'
import { FaBars } from 'react-icons/fa'

class Nav extends React.Component {
  componentDidMount() {
    let mainNav = document.getElementById('js-menu')
    let navBarToggle = document.getElementById('js-navbar-toggle')

    navBarToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active')
    })
  }
  render() {
    return (
      <div>
        <nav class="navbar">
          <span className="navbar-toggle" id="js-navbar-toggle">
            <FaBars size={25} />
          </span>
          <Link exact to="/" className="logo">
            A Clean Getaway{' '}
            <img className="pic" src={SmallLogo} alt="Leaf Logo" />
          </Link>
          <ul className="main-nav" id="js-menu">
            <li>
              <Link to="/services/" className="nav-links">
                Services
              </Link>
            </li>
            <li>
              <Link to="/tips/" className="nav-links">
                Cleaning Tips
              </Link>
            </li>
            <li>
              <Link to="/testimonials/" className="nav-links">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact/" className="nav-links">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
