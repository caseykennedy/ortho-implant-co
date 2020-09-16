// useSiteSettings hook
// Hook for querying site settings data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'

// ___________________________________________________________________

type Props = {
  settings: {
    edges: {
      node: {
        author: string
        backgroundColor: string
        banner: {
          asset: {
            fluid: ImageShape
          }
        }
        description: string
        googleAnalyticsID: string
        headline: string
        language: string
        logo: string
        ogLanguage: string
        ogSiteName: string
        siteName: string
        themeColor: string
        title: string
        titleAlt: string
        titleShort: string
        url: string
        userTwitter: string
      }
    }[]
  }
}

const useSiteSettings = () => {
  const data = useStaticQuery<Props>(graphql`
    query SiteSettingsQuery {
      settings: allSanitySiteSettings {
        edges {
          node {
            author
            backgroundColor
            banner {
              asset {
                fluid {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
            }
            description
            googleAnalyticsID
            headline
            language
            logo
            ogLanguage
            ogSiteName
            siteName
            themeColor
            title
            titleAlt
            titleShort
            url
            userTwitter
          }
        }
      }
    }
  `)

  return data.settings.edges[0].node
}

export default useSiteSettings
