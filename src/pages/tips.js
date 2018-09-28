import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { H2, Center } from '../styles/globals'
import { FaLightbulb } from 'react-icons/fa'
import styled from 'styled-components'
import Nav from '../components/Nav'

class Tips extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Section>
          <Center>
            <H2>Cleaning Tips</H2>
          </Center>
          <Div>
            <VinegarTip />
            <BakingSodaTip />
            <LemonTip />
          </Div>
        </Section>
        <Footer />
      </div>
    )
  }
}

const VinegarTip = () => {
  return (
    <TipWrapper>
      <H4>Vinegar</H4>
      <Ul>
        <li>
          <FaLight /> Clean stainless steel sinks with a paste of baking soda
          and vinegar. Foam is good!
        </li>
        <li>
          <FaLight /> Add 2-3 tablespoons white vinegar to hot water along with
          your regular dish-washing liquid to cut grease on dishes and crystal
        </li>
        <li>
          <FaLight /> Wipe down counter tops with undiluted white vinegar to
          kill ants
        </li>
        <li>
          <FaLight /> White vinegar added to a wet, lint-free rag will remove
          grease film from automobile windows and give you a streak-free shine
        </li>
      </Ul>
    </TipWrapper>
  )
}

const BakingSodaTip = () => {
  return (
    <TipWrapper>
      <H4>Baking Soda</H4>
      <Ul>
        <li>
          <FaLight /> Remove heel marks from hard floors using a damp cloth and
          baking soda
        </li>
        <li>
          <FaLight /> Put a thin layer in the bottom of a cat litter box and top
          with litter as usual to help eliminate odor
        </li>
        <li>
          <FaLight /> Use baking soda on a damp cloth to polish silver
        </li>
        <li>
          <FaLight /> Clean smudges on wallpaper with baking soda and water
        </li>
      </Ul>
    </TipWrapper>
  )
}

const LemonTip = () => {
  return (
    <TipWrapper>
      <H4>Lemon Juice</H4>
      <Ul>
        <li>
          <FaLight /> Apply to clothes, undiluted, to remove fruit based stains
        </li>
        <li>
          <FaLight /> Remove stains on hands with lemon juice
        </li>
        <li>
          <FaLight /> Remove rust from clothes by applying lemon juice and
          laying the garment in the sun
        </li>
        <li>
          <FaLight /> Apply lemon juice to chrome and buff to a shine
        </li>
      </Ul>
    </TipWrapper>
  )
}

const Section = styled.section`
  padding-top: 80px;
`

const Div = styled.div`
  padding-top: 80px;
  margin-bottom: 80px;
`

const TipWrapper = styled.div`
  width: 100%;
  padding: 20px 40px 20px 40px;
  border-top: 2px solid #e6e6e6;
  border-bottom: 2px solid #e6e6e6;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23224364' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
`

const Ul = styled.ul`
  list-style: none;
  font-size: 0.9rem;
`

const FaLight = styled(FaLightbulb)`
  margin-right: 10px;
  color: #66c3cc;
`

const H4 = styled.h4`
  color: #66c3cc;
  margin: 0 0 20px 25px;
  font-size: 1.1rem;
`

export default Tips
