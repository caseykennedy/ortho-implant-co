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
            alt: string
            asset: {
              fluid: ImageShape
              title: string
            }
          }
        }
        intro: {
          _rawBody: string
          _rawLead: string
          heading: string
          title: string
          positioning: {
            _rawBody: string
            figure: {
              asset: {
                fluid: {
                  fluid: ImageShape
                }
              }
              alt: string
            }
            lead: string
            title: string
          }[]
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
                alt
                asset {
                  fluid(maxWidth: 800) {
                    ...GatsbySanityImageFluid
                  }
                  title
                }
              }
            }
            intro {
              _rawBody
              _rawLead
              heading
              title
              positioning {
                _rawBody
                figure {
                  asset {
                    fluid(maxWidth: 600) {
                      ...GatsbySanityImageFluid
                    }
                  }
                  alt
                }
                lead
                title
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
