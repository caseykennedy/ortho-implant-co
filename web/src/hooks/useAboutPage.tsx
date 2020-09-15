// useAboutPage hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  aboutPage: {
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

const useAboutPage = () => {
  const data = useStaticQuery<Props>(graphql`
    query AboutPageQuery {
      aboutPage: allSanityAboutPage {
        edges {
          node {
            billboard {
              title
              message
              linkTo
              linkTitle
              figure {
                asset {
                  fluid(maxWidth: 800) {
                    ...GatsbySanityImageFluid
                  }
                  title
                }
              }
            }
            pageTitle {
              image {
                asset {
                  fluid(maxWidth: 800) {
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
