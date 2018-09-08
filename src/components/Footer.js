import React from 'react'
import styled from 'styled-components'
import SmallLogo from '../assets/logo-small.png'
import Link from 'gatsby-link'
import '../styles/footer.css'

const Img = styled.img`
  margin: 0;
`

const Section = styled.section`
  width: 100%;
  background: #224364;
  color: #e9eef3;
  height: 200px;
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  align-items: baseline;
  font-size: 0.9rem;
`

const Div = styled.div``

const Footer = () => (
  <Section>
    <Div>
      <p>
        A Clean Getaway, LLC
        <Img src={SmallLogo} alt="leaf logo" />
      </p>
      <p>(319)-929-2816</p>
      <p>jjjess3219@aol.com</p>
    </Div>
    <Div>
      <Link className="footer__link" exact to="/">
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
    </Div>
  </Section>
)

export default Footer
