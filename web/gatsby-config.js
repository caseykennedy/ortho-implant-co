require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const config = require('./config')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteURL + pathPrefix,
    pathPrefix,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: config.googleTagID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' }
      }
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [AUTO, AVIF, WEBP],
          backgroundColor: 'transparent',
          placeholder: 'dominantColor',
          quality: 50,
          breakpoints: [750, 1080, 1366]
        }
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        // token: process.env.GATSBY_SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/config`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'goldenrod',
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'src/favicon.png'
      }
    }
  ]
}
