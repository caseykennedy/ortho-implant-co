// useCategory hook
// Hook for querying data

import { graphql, useStaticQuery } from 'gatsby'

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
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                  aspectRatio: 1
                  sizes: "(max-width: 800px) 60vw, 33vw"
                )
                url
              }
              alt
            }
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
          }
        }
      }
    }
  `)

  return data.categories.edges
}

export default useCategory
