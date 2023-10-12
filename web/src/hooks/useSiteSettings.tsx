// useSiteSettings hook
// Hook for querying site settings data

import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type Props = {
  settings: {
    edges: {
      node: {
        author: string
        backgroundColor: string
        banner: {
          asset: {
            gatsbyImageData: IGatsbyImageData
            url: string
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
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [WEBP]
                  aspectRatio: 1
                )
                url
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
