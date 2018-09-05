import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styled from 'styled-components'
import data from '../assets/reviewData'

class Testimonails extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5]

    return (
      <div>
        <Header />
        <Container>
          <H2>See What Others Have Said</H2>
          <Ul>
            {data.map(review => {
              return (
                <div>
                  <Li key={review.quote}>
                    <p>"{review.quote}"</p>
                    <p>
                      <br />
                      <br />~ {review.author} ({review.location})
                    </p>
                  </Li>
                </div>
              )
            })}
          </Ul>
        </Container>
        <Footer />
      </div>
    )
  }
}

const Container = styled.div`
  padding: 8% 20px 8% 20px;
  text-align: center;
`

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Li = styled.li`
  list-style-type: none;
  padding: 50px;
  text-align: left;
  border: 1px solid #e6e6e6;
  width: 500px;
  height: 500px;
`

const H2 = styled.h2`
  display: inline-block;
  color: #224364;
  background-color: #66c3cc;
  padding: 10px;
`

export default Testimonails
