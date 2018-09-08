import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { H2, Center } from '../styles/globals'
import styled from 'styled-components'

class Tips extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Section>
          <Center>
            <H2>Cleaning Tips</H2>
          </Center>
        </Section>
        <Footer />
      </div>
    )
  }
}

const Section = styled.section`
  padding-top: 80px;
`

export default Tips
