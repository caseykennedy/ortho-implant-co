// useSiteSettings hook
// Hook for querying site settings data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  settings: {
    edges: {
      node: {
        themeColor: string
        title: string
        titleAlt: string
        titleShort: string
        url: string
        userTwitter: string
        ogSiteName: string
        ogLanguage: string
        logo: string
        language: string
        headline: string
        googleAnalyticsID: string
        description: string
        backgroundColor: string
        author: string
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
            themeColor
            title
            titleAlt
            titleShort
            url
            userTwitter
            ogSiteName
            ogLanguage
            logo
            language
            headline
            googleAnalyticsID
            description
            backgroundColor
            author
          }
        }
      }
    }
  `)

  return data.settings.edges[0].node
}

export default useSiteSettings
