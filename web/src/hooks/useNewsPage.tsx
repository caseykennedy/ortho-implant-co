// useContactPage hook
// Hook for querying data

import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type Props = {
  newsPage: {
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

const useNewsPage = () => {
  const data = useStaticQuery<Props>(graphql`
    query NewsPageQuery {
      newsPage: allSanityNewsPage {
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
                  gatsbyImageData(
                    fit: FILLMAX
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, AVIF, WEBP]
                    sizes: "(max-width: 800px) 60vw, 33vw"
                  )
                  url
                }
              }
            }
            pageTitle {
              image {
                asset {
                  gatsbyImageData(
                    fit: FILLMAX
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, AVIF, WEBP]
                    sizes: "(max-width: 800px) 60vw, 33vw"
                  )
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

  return data.newsPage.edges[0].node
}

export default useNewsPage
