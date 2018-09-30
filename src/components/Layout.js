import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Nav from './Nav'
import '../styles/layout.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="A Clean Getaway, LLC"
      meta={[
        {
          name: 'description',
          content: 'This is the website for A Clean Getaway, LLC',
        },
        { name: 'keywords', content: 'cleaning, service, cedar rapids' },
      ]}
    />
    <Nav />
    <div>{children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
