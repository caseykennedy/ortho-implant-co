// useProduct hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  products: {
    edges: {
      node: {
        _rawAdditionalInfo: string
        _rawDescription: string
        _rawExcerpt: string
        _rawFeatures: string
        gallery: {
          asset: {
            fluid: ImageShape
          }
        }[]
        mainImage: {
          asset: {
            fluid: ImageShape
          }
        }
        publishedAt: string
        slug: {
          current: string
        }
        name: string
        shortName: string
        videoLink: string
        categories: {
          title: string
        }[]
      }
      previous: {
        name: string
        slug: {
          current: string
        }
        _rawExcerpt: string
      }
      next: {
        name: string
        slug: {
          current: string
        }
        _rawExcerpt: string
      }
    }[]
  }
}

const useProduct = () => {
  const data = useStaticQuery<Props>(graphql`
    query ProductsQuery {
      products: allSanityProduct {
        edges {
          node {
            _rawAdditionalInfo
            _rawDescription
            _rawExcerpt
            _rawFeatures
            gallery {
              asset {
                fluid(maxWidth: 1080) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            mainImage {
              asset {
                fluid(maxWidth: 1080) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            publishedAt
            slug {
              current
            }
            name
            shortName
            videoLink
            categories {
              title
            }
          }
          previous {
            name
            slug {
              current
            }
            _rawExcerpt
          }
          next {
            name
            slug {
              current
            }
            _rawExcerpt
          }
        }
      }
    }
  `)

  return data.products.edges
}

export default useProduct
