// useLegal hook
// Hook for querying data

import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type Props = {
  legal: {
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
            alt: string
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

const useLegal = () => {
  const data = useStaticQuery<Props>(graphql`
    query LegalQuery {
      legal: allSanityLegalStatements {
        edges {
          node {
            _id
            _rawBody
            pageTitle {
              title
              message
              image {
                asset {
                  gatsbyImageData(
                    fit: FILLMAX
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, AVIF, WEBP]
                    sizes: "(max-width: 800px) 50vw, 75vw"
                  )
                  url
                }
              }
            }
            billboard {
              figure {
                alt
                asset {
                  gatsbyImageData(
                    fit: FILLMAX
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, AVIF, WEBP]
                    sizes: "(max-width: 800px) 50vw, 75vw"
                  )
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

  return data.legal.edges[0].node
}

export default useLegal
