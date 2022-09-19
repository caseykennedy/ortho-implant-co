// useResources hook:

import { graphql, useStaticQuery } from "gatsby";

// ___________________________________________________________________

const useResources = () => {
  const data = useStaticQuery<ResourcesShape>(graphql`
    query ResourcesQuery {
      resources: allSanityResource {
        edges {
          node {
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
  `);

  return data.resources.edges;
};

export default useResources;
