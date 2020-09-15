// useTerms hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  terms: {
    edges: {
      node: {
        _id: string
        _rawBody: string
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

const useTerms = () => {
  const data = useStaticQuery<Props>(graphql`
    query TermsQuery {
      terms: allSanityTermsConditions {
        edges {
          node {
            _id
            _rawBody
            pageTitle {
              title
              message
              link
              image {
                asset {
                  fluid(maxWidth: 800) {
                    srcWebp
                    srcSetWebp
                    srcSet
                    sizes
                    base64
                    src
                    aspectRatio
                  }
                  title
                }
              }
            }
            billboard {
              figure {
                asset {
                  fluid(maxWidth: 800) {
                    srcWebp
                    srcSetWebp
                    srcSet
                    src
                    sizes
                    base64
                    aspectRatio
                  }
                  title
                }
              }
              linkTitle
              linkTo
              message
              title
            }
          }
        }
      }
    }
  `)

  return data.terms.edges[0].node
}

export default useTerms
