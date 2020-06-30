// useCategory hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useCategory = () => {
  const data = useStaticQuery<CategoryShape>(graphql`
    query CategoryQuery {
      categories: allSanityCategory(sort: {fields: title, order: ASC}) {
        edges {
          node {
            title
            description
          }
        }
      }
    }
  `)

  return data.categories.edges
}

export default useCategory
