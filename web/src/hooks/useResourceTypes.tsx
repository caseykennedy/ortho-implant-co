// useResourceTypes hook:

import { graphql, useStaticQuery } from 'gatsby'

const useResourceTypes = () => {
  const data = useStaticQuery<ResourceTypeShape>(graphql`
    query ResourceTypesQuery {
      resourceTypes: allSanityResourceType {
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
