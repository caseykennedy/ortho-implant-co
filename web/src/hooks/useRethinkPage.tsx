// useRethinkPage hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  rethinkPage: {
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

const useRethinkPage = () => {
  const data = useStaticQuery<Props>(graphql`
    query RethinkPageQuery {
      rethinkPage: allSanityRethinkPage {
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

  return data.rethinkPage.edges[0].node
}

export default useRethinkPage
