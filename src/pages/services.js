import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa'

const Wrapper = styled.div`
  width: 100%;
  padding: 8% 12%;
  color: #4a5155;
`

const Title = styled.h2`
  width: 40%;
`

class Services extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>What You Can Expect</Title>
      </Wrapper>
    )
  }
}

export default Services
