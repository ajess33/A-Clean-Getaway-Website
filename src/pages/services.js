import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa'
import '../styles/home.css'

class Services extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>What You Can Expect</Title>
        <br />
        <H3>Residential</H3>
        <br />
        <Div>
          <ServiceBox>
            <h4>General Areas</h4>
          </ServiceBox>
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
        </Div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  width: 100%;
  padding: 8% 4%;
  color: #4a5155;
`

const Title = styled.h2`
  margin: 0 auto;
  display: inline-block;
`

const H3 = styled.h3`
  margin: 0 auto;
  display: inline-block;
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const ServiceBox = styled.div`
  border: 4px solid #224364;
  border-radius: 20px;
  height: 350px;
  width: 350px;
  margin: 0 30px 30px 0;
`

export default Services
