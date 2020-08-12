// useRethinkPage hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  rethinkPage: {
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
        rethinkNotions: {
          _rawContent: string
          lead: string
          subTitle: string
          title: string
          image: {
            asset: {
              fluid: ImageShape
            }
          }
        }[]
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

const useRethinkPage = () => {
  const data = useStaticQuery<Props>(graphql`
    query RethinkPageQuery {
      rethinkPage: allSanityRethinkPage {
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
            rethinkNotions {
              _rawContent
              lead
              subTitle
              title
              image {
                asset {
                  fluid(maxWidth: 1080) {
                    ...GatsbySanityImageFluid
                  }
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

  return data.rethinkPage.edges[0].node
}

export default useRethinkPage
