module.exports = {
  siteMetadata: {
    title: `A Clean Getaway, LLC`,
    siteUrl: `https://acleangetawayllc.com`,
    description: `Tired of coming home to a dirty house? Let us clean it for you! A Clean Getaway, LLC is a professional cleaning service that you can trust. Serving both residential and commercial customers.`,
    keywords: `cleaning, service, cedar rapids`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '',
        // puts tracking script in head instead of body
        head: false,
      },
    },
  ],
}
