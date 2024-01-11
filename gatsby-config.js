/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-image',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-react-helmet',
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `HoldTML`,
          description: `Diseño web para bares y restaurantes`,
          icon: `src/images/HoldTML-ICON.png`,
        },
    },
  ],
}
