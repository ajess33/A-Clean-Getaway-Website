import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styled from 'styled-components'
import data from '../assets/reviewData'
import { H2, PageWrap, Wrapper } from '../styles/globals'
import Nav from '../components/Nav'

class Testimonails extends React.Component {
  render() {
    return (
      <PageWrap>
        <Helmet>
          <title>Our Testimonials</title>
          <meta
            name="description"
            content="Check out what previous customers have to say about A Clean Getaway, LLC."
          />
        </Helmet>
        <Wrapper>
          <Nav />
          <Header />
          <Container>
            <H2>See What Others Have Said</H2>
            <Ul>
              {data.map(review => {
                return (
                  <div>
                    <Li key={review.quote}>
                      <p>"{review.quote}"</p>
                      <PAuth>
                        <br />~ {review.author} ({review.location})
                      </PAuth>
                    </Li>
                  </div>
                )
              })}
            </Ul>
          </Container>
          <Footer />
        </Wrapper>
      </PageWrap>
    )
  }
}

const Container = styled.section`
  padding: 80px 20px 60px 20px;
  text-align: center;

  @media (max-width: 400px) {
    padding: 80px 10px 60px 10px;
  }
`

const Ul = styled.ul`
  margin: 80px auto 0 auto;
  width: 100%;
  column-count: 2;
  column-gap: 10px;

  @media (max-width: 930px) {
    column-count: 1;
  }
`

const Li = styled.li`
  list-style-type: none;
  padding: 50px;
  text-align: left;
  border: 2px solid #224264;
  line-height: 1.8;
  background: #224264;
  color: #e9eef3;
  box-shadow: 0 4px 4px -10px rgba(0, 0, 0, 0.1);
  width: 450px;
  display: inline-block;

  @media (max-width: 400px) {
    padding: 50px 10px;
    width: 300px;
    font-size: 0.8rem;
  }
`

const PAuth = styled.p`
  text-align: right;
  color: #66c3cc;
  font-size: 1.1rem;

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`

export default Testimonails
