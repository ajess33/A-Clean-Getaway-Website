import React from 'react'
import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa'
import '../styles/home.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'

const FaCheck = styled(FaCheckCircle)`
  color: #66c3cc;
  margin: 2px 10px 0 -10px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px;
`

const Title = styled.h2`
  display: inline-block;
  color: #224364;
  padding: 10px;
  margin-top: 27px;
  font-size: 2rem;
`

const H3 = styled.h3`
  color: #66c3cc;
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.8rem;
`

const Div = styled.section`
  max-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 auto;
`

const ServicesWrapper = styled.div`
  padding: 0 0 40px 0;
  margin-bottom: 60px;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23224364' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  border: 1px solid #e6e6e6;
`

const ServiceBox = styled.div`
  border: 2px solid #e6e6e6;
  border-radius: 3px;
  height: 325px;
  width: 350px;
  background: #fff;
  box-shadow: 0 4px 4px -10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding-top: 15px;
`

const List = styled.ul`
  font-size: 0.8rem;
  list-style: none;
`

const H4 = styled.h4`
  color: #66c3cc;
  text-align: center;
  margin-top: 12px;
  letter-spacing: 1.2px;
  font-size: 1.3rem;
`

const P = styled.p`
  font-size: 0.9rem;
  text-align: left;
  color: #435c7f;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px 30px 20px;
`

class Services extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Container>
          <Title>What You Can Expect</Title>
          <br />
        </Container>
        <ServicesWrapper>
          <H3>Residential</H3>
          <P>
            Our cleaning services for homes and apartments are performed on a
            scheduled weekly, bi-monthly, or monthly basis. After the initial{' '}
            <strong>DEEP CLEAN</strong> if you decide to become a regular
            customer, you will be given a <strong>FLAT RATE</strong>. And you
            will <strong>NEVER SIGN A CONTRACT</strong>.<br /> <br /> <br />
            Our services vary from customer to customer, but outlined below is
            our basic cleaning service.
          </P>
          <Div>
            <ServiceBox>
              <H4>General Areas</H4>
              <List>
                <li>
                  <FaCheck />
                  Dust furniture, pictures, baseboards, ect.
                </li>
                <li>
                  <FaCheck />
                  Spot clean windows for smudges
                </li>
                <li>
                  <FaCheck />
                  Wipe flat surfaces
                </li>
                <li>
                  <FaCheck />
                  Vacuum and/or mop floors
                </li>
                <li>
                  <FaCheck />
                  Clean television screen
                </li>
                <li>
                  <FaCheck />
                  Dust cobwebs
                </li>
              </List>
            </ServiceBox>
            <ServiceBox>
              <H4>Kitchen</H4>
              <List>
                <li>
                  <FaCheck />
                  Wash sink
                </li>
                <li>
                  <FaCheck />
                  Clean counter tops
                </li>
                <li>
                  <FaCheck />
                  Vacuum and mop floor
                </li>
                <li>
                  <FaCheck />
                  Wipe outside of appliances and cabinents
                </li>
                <li>
                  <FaCheck />
                  Dust and wipe tables/chairs
                </li>
                <li>
                  <FaCheck />
                  Take out trash
                </li>
              </List>
            </ServiceBox>
            <ServiceBox>
              <H4>Bathrooms</H4>
              <List>
                <li>
                  <FaCheck />
                  Clean shower/tub
                </li>
                <li>
                  <FaCheck />
                  Clean and disenfect toilet
                </li>
                <li>
                  <FaCheck />
                  Dust and wipe counters/sinks
                </li>
                <li>
                  <FaCheck />
                  Wipe mirrors and glass
                </li>
                <li>
                  <FaCheck />
                  Take out trash
                </li>
              </List>
            </ServiceBox>
            <ServiceBox>
              <H4>Bedrooms</H4>
              <List>
                <li>
                  <FaCheck />
                  Dust pictures, ledges, window blinds
                </li>
                <li>
                  <FaCheck />
                  Wipe flat surfaces
                </li>
                <li>
                  <FaCheck />
                  Vacuum and/or mop floors
                </li>
                <li>
                  <FaCheck />
                  Clean television screen
                </li>
                <li>
                  <FaCheck />
                  Make bed (if needed)
                </li>
              </List>
            </ServiceBox>
          </Div>
        </ServicesWrapper>
        <Commercial />
        <Footer />
      </div>
    )
  }
}

const Commercial = () => {
  return (
    <div>
      <H3>Commercial</H3>
      <P>
        We have a low office cleaning rate that makes commercial cleaning
        services affordable for small businesses. We charge an{' '}
        <strong>HOURLY FEE</strong> so that you, the customer, have complete
        control of the service we provide you with.{' '}
        <strong>NO CONTRACTS REQUIRED</strong>. We know that your workplace
        represents your company, so we will work hard to give you a workable
        environment that gives your business a professional appearance.
      </P>
    </div>
  )
}

export default Services
