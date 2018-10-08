module.exports = {
  siteMetadata: {
    title: `A Clean Getaway, LLC`,
    siteUrl: `https://acleangetawayllc.com`,
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
        trackingId: '',
        // puts tracking script in head instead of body
        head: false,
      },
    },
  ],
}
