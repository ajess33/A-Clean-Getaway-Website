import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import '../styles/home.css'

const IndexPage = () => (
  <div>
    <Home />
  </div>
)

const Section = styled.section`
  display: flex;
  justify-content: center;
  color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Wrapper = styled.div`
  width: 40%;
  margin: 5%;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 80%;
    margin: 5% auto;
  }
`

const SectionTitle = styled.h3`
  text-align: center;
  color: #333;
  padding-top: 8px;
`

const Paragraph = styled.p`
  width: 90%;
  margin: 5% auto;
  line-height: 1.75;
`

class Home extends React.Component {
  render() {
    return (
      <Section>
        <Wrapper>
          <SectionTitle>In Business for Over 30 Years</SectionTitle>
          <Paragraph>
            A Clean Getaway is a family owned, professional cleaning service
            founded by Joanne Jess. For nearly 30 years, we have earned a
            reputation as a trusted and reliable cleaning service working in the
            Center Point/Urbana area as well as Cedar Rapids and surrounding
            areas.
          </Paragraph>
        </Wrapper>
        <Wrapper>
          <SectionTitle>Environmentally Friendly</SectionTitle>
          <Paragraph>
            Whenever possible, we use environmentally friendly cleaning products
            to make your home or business not only clean, but healthier to live
            or work in. We provide all of our own supplies at no cost to you.
          </Paragraph>
        </Wrapper>
      </Section>
    )
  }
}

export default IndexPage
