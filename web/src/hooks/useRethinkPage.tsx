// useRethinkPage hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  rethinkPage: {
    edges: {
      node: {
        approach: {
          _rawBody: string
          _rawLead: string
          figure: {
            asset: {
              fluid: ImageShape
              title: string
            }
          }
          heading: string
          title: string
        }
        purpose: {
          _rawBody: string
          _rawLead: string
          figure: {
            asset: {
              fluid: ImageShape
              title: string
            }
          }
          heading: string
          title: string
        }
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
            approach {
              _rawBody
              _rawLead
              figure {
                asset {
                  fluid(maxWidth: 800) {
                    ...GatsbySanityImageFluid
                  }
                  title
                }
              }
              heading
              title
            }
            purpose {
              _rawBody
              _rawLead
              figure {
                asset {
                  fluid(maxWidth: 800) {
                    ...GatsbySanityImageFluid
                  }
                  title
                }
              }
              heading
              title
            }
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
            rethinkNotions {
              _rawContent
              lead
              subTitle
              title
              image {
                asset {
                  fluid(maxWidth: 800) {
                    ...GatsbySanityImageFluid
                  }
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

  return data.rethinkPage.edges[0].node
}

export default useRethinkPage
