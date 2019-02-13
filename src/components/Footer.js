import React from 'react'
import SmallLogo from '../assets/logo-small.png'
import Link from 'gatsby-link'
import '../styles/footer.css'

// const Img = styled.img`
//   margin: 0;
// `

// const Section = styled.section`
//   width: 100%;
//   background: #224364;
//   color: #e9eef3;
//   height: 200px;
//   padding: 20px 0 0 40px;
//   font-size: 0.9rem;
//   display: flex;
//   align-items: baseline;
//   justify-content: space-between;
// `

const Footer = () => (
  <div className="wrapper">
    <div className="footer--container">
      <Link className="footer__link" exact="true" to="/">
        Home
      </Link>
      <Link className="footer__link" to="/services/">
        Services
      </Link>
      <Link className="footer__link" to="/tips/">
        Cleaning Tips
      </Link>
      <Link className="footer__link" to="/testimonials/">
        Testimonials
      </Link>
      <Link className="footer__link" to="/contact/">
        Contact Us
      </Link>
      <a
        className="footer__link"
        href="https://www.freeprivacypolicy.com/privacy/view/2e078912b219234418a351ee604265bc"
      >
        Privacy Policy
      </a>
    </div>
    <div className="footer--info">
      <p>(319)-929-6266</p>
      <p>jjjess3219@aol.com</p>
      <p>
        A Clean Getaway, LLC
        <img src={SmallLogo} size={32} alt="leaf logo" />
      </p>
    </div>
  </div>
)

export default Footer
