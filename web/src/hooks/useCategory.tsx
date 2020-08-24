// useCategory hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useCategory = () => {
  const data = useStaticQuery<CategoryShape>(graphql`
    query CategoryQuery {
      categories: allSanityProductCategory(
        sort: { fields: title, order: ASC }
      ) {
        edges {
          node {
            _id
            description
            title
            slug {
              current
            }
            illustration {
              asset {
                fluid {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
                title
              }
              alt
            }
            image {
              asset {
                fluid(maxWidth: 1080) {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.categories.edges
}

export default useCategory
