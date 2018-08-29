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
  border-radius: 2px;
  padding: 30px;
`

const Section = styled.section`
  width: 85%;
  padding: 8% 12% 4% 12%;
  margin: 0 auto;
`

const Div = styled.div`
  width: 100%;
`

const Spacer = styled.div`
  display: flex;
  justify-content: center;
`

const SectionTitle = styled.h3`
  color: #224364;
  font-weight: heavy;
  display: inline-block;
  background-color: #66c3cc;
  padding: 0 5px 0 5px;
`

const Paragraph = styled.p`
  color: #435c7f;
  font-weight: light;
  font-size: 16px;
  line-height: 1.7;
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
        <Div>
          <Section>
            <SectionTitle>In Business For Over 30 Years</SectionTitle>
            <br />
            <Paragraph>
              A Clean Getaway is a family owned, professional cleaning service
              founded by Joanne Jess. For over 30 years, we have earned a
              reputation as a trusted and reliable cleaning service working
              around the <strong>Cedar Rapids area</strong>. We provide cleaning
              services to small businesses, families, couples, the elderly, and
              busy professionals like you. Our team of experienced home cleaning
              experts can handle business and homes of any shape, size, or
              layout. Families with children and/or pets welcomed!
            </Paragraph>
            <SectionTitle>Environmentally Friendly</SectionTitle>
            <br />
            <Paragraph>
              Whenever possible, we use Norwex brand cleaning products that are
              environmentally friendly and <strong>100% chemical free</strong>{' '}
              to make your home or business not only clean, but healthier to
              live in. We provide all of our cleaning supplies at{' '}
              <strong>no cost to you</strong>.
            </Paragraph>
          </Section>
        </Div>
        <Spacer>
          <img
            className="norwex__logo"
            src={norwexPhoto}
            alt="Norwex brand cleaning supplies. Reads: 'Improving Quality of Life'"
          />
        </Spacer>
      </div>
    )
  }
}

export default IndexPage
