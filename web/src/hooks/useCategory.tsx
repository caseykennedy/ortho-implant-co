// useCategory hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useCategory = () => {
  const data = useStaticQuery<CategoryShape>(graphql`
    query CategoryQuery {
      categories: allSanityProductCategory(sort: { fields: title, order: ASC }) {
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
                )
                url
              }
              alt
            }
            image {
              asset {
                gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
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
