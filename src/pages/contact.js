import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import '../styles/home.css'
import { PageWrap, Wrapper } from '../styles/globals'

const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
`

const H2 = styled.h2`
  color: #224364;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 2rem;
`
// background-color: #66c3cc;

const Paragraph = styled.p`
  color: #435c7f;
  font-weight: light;
  font-size: 1rem;
  line-height: 1.7;
  text-align: center;
  max-width: 450px;
  margin: 0 auto;
`

const FlexWrapper = styled.div`
  display: flex;
  padding: 20px 75px 20px 75px;
  justify-content: space-evenly;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px auto 80px auto;
  max-width: 600px;
  text-align: center;
  padding: 40px;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23224364' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  border: 1px solid #e6e6e6;
`

const Input = styled.input`
  display: block;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-shadow: inset 0 4px 2px -3px rgba(0, 0, 0, 0.1);
  width: 250px;
  height: 50px;
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 10px;
  padding: 0 10px 0 10px;
`

const ReferralInput = styled(Input)`
  width: 350px;
`

const MessageInput = styled.textarea`
  display: block;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-shadow: inset 0 4px 2px -3px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 200px;
  margin-bottom: 10px;
  padding: 10px;
`

const Label = styled.label`
  font-size: 0.9rem;
  text-align: left;
  font-weight: 600;
  color: #435c7f;
`

const Submit = styled.input`
  background: #66c3cc;
  border-radius: 3px;
  border: 2px solid #66c3cc;
  padding: 13px 20px;
  color: #224264;
  letter-spacing: 1.5px;
  box-shadow: 0 2px 5px 0 rgba(34, 67, 111, 0.14);
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
`

class Contact extends React.Component {
  render() {
    return (
      <PageWrap>
        <Helmet>
          <title>Contact Us</title>
          <meta
            name="description"
            content="Feel free to contact A Clean Getaway, LLC with and questions or comments you may have."
          />
        </Helmet>
        <Wrapper>
          <Nav />
          <FlexWrapper>
            <ContactForm />
          </FlexWrapper>
          <Footer />
        </Wrapper>
      </PageWrap>
    )
  }
}

class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <Title>
          <H2> Get Your Free Quote Today</H2>
          <Paragraph>
            We offer <strong>free estimates</strong> and{' '}
            <strong>guaranteed customer satisfaction</strong>. Contact us today
            using the form below or email directly at jjjess3219@aol.com.
          </Paragraph>
        </Title>
        <Form
          name="contact-form"
          method="post"
          data-netlify="true"
          netlify
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <Label>
            NAME <span className="red">*</span>
          </Label>
          <Input required type="text" name="name" for="name" />
          <Label>
            EMAIL <span className="red">*</span>
          </Label>
          <Input required type="email" name="email" for="email" />
          <Label>PHONE</Label>
          <Input type="phone" name="phone" for="phone" />
          <Label>HOW DID YOU HEAR ABOUT US?</Label>
          <ReferralInput type="text" name="referral" for="referral" />
          <Label>
            MESSAGE <span className="red">*</span>
          </Label>
          <MessageInput
            required
            type="textarea"
            name="message"
            placeholder="Please provide some information about the house like, location, size, ect. "
            for="message"
          />
          <Submit type="submit" value="SEND" />
        </Form>
      </div>
    )
  }
}

export default Contact
