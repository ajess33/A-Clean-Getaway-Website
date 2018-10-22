import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... </p>
    <p>Go Back to </p>
    <Link exact to="/">
      HOME
    </Link>
  </div>
)

export default NotFoundPage
