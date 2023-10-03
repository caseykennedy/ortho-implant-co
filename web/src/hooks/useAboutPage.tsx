// useAboutPage hook
// Hook for querying data

import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

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
              gatsbyImageData: IGatsbyImageData
              url: string
            }
          }
        }
        intro: {
          _rawBody: string
          heading: string
          title: string
          positioning: {
            _rawBody: string
            figure: {
              asset: {
                gatsbyImageData: IGatsbyImageData
                url: string
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
                  gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                  url
                }
              }
            }
            intro {
              _rawBody
              heading
              title
              positioning {
                _rawBody
                figure {
                  asset {
                    gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                    url
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

  return data.aboutPage.edges[0].node
}

export default useAboutPage
