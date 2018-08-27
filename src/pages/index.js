import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ReviewsCard from '../components/ReviewsCard'
import '../styles/home.css'
import norwexPhoto from '../assets/norwex-photo.png'

const IndexPage = () => (
  <div>
    <Home />
  </div>
)

// OFFER: All new customers will receive a $25 donation to the charity organization of their choosing! If you plan to be cleaned bi-monthly, you will receive $50

const Offer = styled.div`
  margin: -80px auto 0 auto;
  max-width: 600px;
  border: 1px solid #f3f3f3;
  border-radius: 2px;
  padding: 30px;
  background: #f3f3f3;
`

const Section = styled.section`
  width: 85%;
  padding: 8% 12%;
`

const Spacer = styled.div`
  padding-top: 30px;
`

const SectionTitle = styled.h3`
  color: #4a5155;
  font-weight: normal;
`

const Paragraph = styled.p`
  color: hsl(0, 0%, 37%);
  font-weight: lighter;
  font-size: 0.9rem;
  line-height: 1.5;
`

// <Offer>
//   <Paragraph>
//     Whenever possible, we use environmentally friendly cleaning products
//     to make your home or business not only clean, but healthier to live
//     in. We provide all of our cleaning supplies at no cost to you.
//   </Paragraph>
// </Offer>
class Home extends React.Component {
  render() {
    return (
      <div>
        <Section>
          <SectionTitle>In Business For Over 30 Years</SectionTitle>
          <Paragraph>
            A Clean Getaway is a family owned, professional cleaning service
            founded by Joanne Jess. For over 30 years, we have earned a
            reputation as a trusted and reliable cleaning service working around
            the <strong>Cedar Rapids area</strong>. We provide cleaning services
            to small businesses, families, couples, the elderly, and busy
            professionals like you. Our team of experienced home cleaning
            experts can handle business and homes of any shape, size, or layout.
            Families with children and/or pets welcomed!
          </Paragraph>
          <Spacer>
            <SectionTitle>Environmentally Friendly</SectionTitle>
            <Paragraph>
              Whenever possible, we use Norwex brand cleaning products that are
              environmentally friendly and <strong>100% chemical free</strong>{' '}
              to make your home or business not only clean, but healthier to
              live in. We provide all of our cleaning supplies at{' '}
              <strong>no cost to you</strong>.
            </Paragraph>
          </Spacer>
        </Section>
        <img
          className="norwex__logo"
          src={norwexPhoto}
          alt="Norwex brand cleaning supplies. Reads: 'Improving Quality of Life'"
        />
      </div>
    )
  }
}

export default IndexPage
