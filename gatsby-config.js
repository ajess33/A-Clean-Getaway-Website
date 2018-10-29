module.exports = {
  siteMetadata: {
    title: `A Clean Getaway, LLC - Residential and Commercial Cleaning Service`,
    siteUrl: `https://acleangetawayllc.com`,
    description: `Tired of coming home to a dirty house? Let us clean it for you! A Clean Getaway, LLC is a professional cleaning service that you can trust. Serving both residential and commercial customers.`,
    keywords: `cleaning, service, cedar rapids`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-122671806-2',
        // puts tracking script in head instead of body
        head: false,
      },
    },
  ],
}
