// useResourceTypes hook:

import { graphql, useStaticQuery } from 'gatsby'

const useResourceTypes = () => {
  const data = useStaticQuery<ResourceTypeShape>(graphql`
    query ResourceTypesQuery {
      resourceTypes: allSanityResourceType(
        sort: { order: ASC, fields: title }
      ) {
        edges {
          node {
            title
            resourceDocs {
              category
              title
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
  `)

  return data.resourceTypes.edges
}

export default useResourceTypes
