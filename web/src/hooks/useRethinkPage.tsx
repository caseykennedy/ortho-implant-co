// useRethinkPage hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

// ___________________________________________________________________

type Props = {
  rethinkPage: {
    edges: {
      node: {
        approach: {
          _rawBody: string
          _rawLead: string
          figure: {
            alt: string
            asset: {
              gatsbyImageData: IGatsbyImageData
              url: string
            }
          }
          heading: string
          title: string
        }
        purpose: {
          _rawBody: string
          _rawLead: string
          figure: {
            alt: string
            asset: {
              gatsbyImageData: IGatsbyImageData
              url: string
            }
          }
          heading: string
          title: string
          statement: string
        }
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
        rethinkNotions: {
          _rawContent: string
          lead: string
          subTitle: string
          title: string
          image: {
            alt: string
            asset: {
              gatsbyImageData: IGatsbyImageData
              url: string
            }
          }
        }[]
        pageTitle: {
          image: {
            alt: string
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

const useRethinkPage = () => {
  const data = useStaticQuery<Props>(graphql`
    query RethinkPageQuery {
      rethinkPage: allSanityRethinkPage {
        edges {
          node {
            approach {
              _rawBody
              _rawLead
              figure {
                alt
                asset {
                  gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                  url
                }
              }
              heading
              title
            }
            purpose {
              _rawBody
              _rawLead
              figure {
                alt
                asset {
                  gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                  url
                }
              }
              heading
              title
              statement
            }
            billboard {
              title
              message
              linkTo
              linkTitle
              figure {
                alt
                asset {
                  gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                  url
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
                  gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                  url
                }
              }
            }
            pageTitle {
              image {
                asset {
                  gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                  url
                }
              }
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
