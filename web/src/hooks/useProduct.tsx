// useProduct hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby';

// ___________________________________________________________________

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
            }
          }
        }
      }
    }
  `);

  return data.productsOrder.edges[0];
};

export default useProduct;
