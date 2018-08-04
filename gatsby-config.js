if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config({ path: './.env.development'})
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5pr5x9wlsg90`,
        accessToken: `f1c720ac5f54dc1a9a4452bb3160dfd3c04645b4ac5b0d9940a80d49b572c8cb`,
      },
    },
  ],
}
