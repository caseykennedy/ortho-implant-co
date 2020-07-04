// useProduct hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useProduct = () => {
  const data = useStaticQuery<ProductShape>(graphql`
    query ProductsQuery {
      products: allSanityProduct(sort: {fields: categories___title, order: DESC}) {
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
