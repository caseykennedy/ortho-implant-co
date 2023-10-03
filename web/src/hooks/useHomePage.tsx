// useHomePage hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

// ___________________________________________________________________

type Props = {
  homePage: {
    edges: {
      node: {
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
        hero: {
          image: {
            asset: {
              gatsbyImageData: IGatsbyImageData
              url: string
            }
          }

          message: string
          title: string
        }
        rethink: {
          heading: string
          title: string
          linkTo: string
          linkTitle: string
          tabPanels: {
            image: {
              asset: {
                gatsbyImageData: IGatsbyImageData
                url: string
              }
            }
            _rawMessage: object
            linkTitle: string
            linkTo: string
            tag: string
            title: string
          }[]
        }
        testimonials: {
          _rawQuote: object
          location: string
          position: string
        }[]
        testimonialsFigure: {
          asset: {
            gatsbyImageData: IGatsbyImageData
            url: string
          }
        }
      }
    }[]
  }
}

const useHomePage = () => {
  const data = useStaticQuery<Props>(graphql`
    query HomePageQuery {
      homePage: allSanityHomePage {
        edges {
          node {
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
            hero {
              image {
                asset {
                  gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                  url
                }
              }
              message
              title
            }
            rethink {
              heading
              title
              linkTo
              linkTitle
              tabPanels {
                image {
                  asset {
                    gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                    url
                  }
                }
                _rawMessage
                linkTitle
                linkTo
                tag
                title
              }
            }
            testimonials {
              _rawQuote
              location
              position
            }
            testimonialsFigure {
              asset {
                gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                url
              }
            }
          }
        }
      }
    }
  `)

  return data.homePage.edges[0].node
}

export default useHomePage
