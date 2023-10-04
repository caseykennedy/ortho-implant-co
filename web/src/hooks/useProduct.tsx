// useProduct hook
// Hook for querying data

import { graphql, useStaticQuery } from 'gatsby'

const useProduct = () => {
  const data = useStaticQuery<ProductShape>(graphql`
    query ProductsQuery {
      productsOrder: allSanityProductsOrder {
        edges {
          node {
            products {
              _rawDescription
              _rawExcerpt
              _rawFeatures
              gallery {
                asset {
                  gatsbyImageData(
                    fit: FILLMAX
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, AVIF, WEBP]
                    sizes: "(max-width: 800px) 33vw, 25vw"
                  )
                  url
                }
              }
              mainImage {
                asset {
                  gatsbyImageData(
                    fit: FILLMAX
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, AVIF, WEBP]
                    sizes: "(max-width: 800px) 33vw, 25vw"
                  )
                  url
                }
              }
              publishedAt
              slug {
                current
              }
              name
              shortName
              videos {
                title
                url
              }
              categories {
                title
              }
              resources {
                title
                resource {
                  asset {
                    url
                  }
                }
              }
              resourceDocs {
                title
                resource {
                  document {
                    asset {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.productsOrder.edges[0]
}

export default useProduct
