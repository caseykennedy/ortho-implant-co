// useHomePage hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

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
              fluid: ImageShape
              title: string
            }
          }
        }
        hero: {
          image: {
            asset: {
              fluid: ImageShape
            }
          }
          link: string
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
                fluid: ImageShape
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
            fluid: ImageShape
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
                  fluid(maxWidth: 800) {
                    ...GatsbySanityImageFluid
                  }
                  title
                }
              }
            }
            hero {
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
            rethink {
              heading
              title
              linkTo
              linkTitle
              tabPanels {
                image {
                  asset {
                    fluid(maxWidth: 800) {
                      ...GatsbySanityImageFluid
                    }
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
                fluid(maxWidth: 1080) {
                  ...GatsbySanityImageFluid
                }
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
