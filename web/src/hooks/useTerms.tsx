// useTerms hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

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
              gatsbyImageData: IGatsbyImageData
              url: string
            }
          }
        }
        pageTitle: {
          image: {
            asset: {
              gatsbyImageData: IGatsbyImageData
              url: string
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
              image {
                asset {
                  gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                  url
                }
              }
            }
            billboard {
              figure {
                asset {
                  gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                  url
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
