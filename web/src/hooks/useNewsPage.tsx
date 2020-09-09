// useContactPage hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  newsPage: {
    edges: {
      node: {
        billboard: {
          title: string
          message: string
          linkTo: string
          linkTitle: string
          figure: {
            asset: {
              fluid: ImageShape
              title: string
            }
          }
        }
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

const useNewsPage = () => {
  const data = useStaticQuery<Props>(graphql`
    query NewsPageQuery {
      newsPage: allSanityNewsPage {
        edges {
          node {
            billboard {
              title
              message
              linkTo
              linkTitle
              figure {
                asset {
                  fluid(maxWidth: 1080) {
                    ...GatsbySanityImageFluid
                  }
                  title
                }
              }
            }
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

  return data.newsPage.edges[0].node
}

export default useNewsPage
