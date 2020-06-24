// useAboutPage hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  aboutPage: {
    edges: {
      node: {
        pageTitle: {
          image: {
            asset: {
              fluid: ImageShape
            }
          }
          link: string
          message: string
          title: string
        }
      }
    }[]
  }
}

const useAboutPage = () => {
  const data = useStaticQuery<Props>(graphql`
    query AboutPageQuery {
      aboutPage: allSanityAboutPage {
        edges {
          node {
            pageTitle {
              image {
                asset {
                  fluid(maxWidth: 1080) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
              link
              message
              title
            }
          }
        }
      }
    }
  `)

  return data.aboutPage.edges[0].node
}

export default useAboutPage
