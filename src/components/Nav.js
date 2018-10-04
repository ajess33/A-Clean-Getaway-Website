import React from 'react'
import Link from 'gatsby-link'
// import '../styles/header.css'
import '../styles/nav.css'
import SmallLogo from '../assets/logo-small.png'
import { FaBars } from 'react-icons/fa'

// class Nav extends React.Component {
//   render() {
//     return (
//       <div className="main">
//         <div className="navbar">
//           <nav className="navbar__brand">
//             <div>
//               <Link className="navbar__logo" exact to="/">
//                 A Clean Getaway
//                 <img className="logo" src={SmallLogo} alt="leaf logo" />
//               </Link>
//             </div>
//             <div id="js-toggle" className="navbar__item navbar__toggle">
//               <FaBars size={25} />
//             </div>
//           </nav>
//           <nav className="navbar__items--right" id="js-menu">
//             <div>
//               <Link className="navbar__item" to="/services/">
//                 Services
//               </Link>
//             </div>
//             <div>
//               <Link className="navbar__item" to="/tips/">
//                 Cleaning Tips
//               </Link>
//             </div>
//             <div>
//               <Link className="navbar__item" to="/testimonials/">
//                 Testimonials
//               </Link>
//             </div>
//             <div>
//               <Link className="navbar__item" to="/contact/">
//                 Contact Us
//               </Link>
//             </div>
//           </nav>
//         </div>
//       </div>
//     )
//   }
// }

// export default Nav

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
        <nav className="navbar">
          <span className="navbar-toggle" id="js-navbar-toggle">
            <FaBars size={25} />
          </span>
          <a className="navbar-brand">
            <Link exact to="/">
              A Clean Getaway
              <img className="logo" src={SmallLogo} alt="leaf logo" />
            </Link>
          </a>
          <ul className="main-nav" id="js-menu">
            <li>
              <Link className="navbar__item" to="/services/">
                Services
              </Link>
            </li>
            <li>
              <Link className="navbar__item" to="/tips/">
                Cleaning Tips
              </Link>
            </li>
            <li>
              <Link className="navbar__item" to="/testimonials/">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="navbar__item" to="/contact/">
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
