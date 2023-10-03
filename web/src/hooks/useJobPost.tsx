// useJobPost hook
// Hook for querying data

import { graphql, useStaticQuery } from 'gatsby'

const useJobPost = () => {
  const data: JobPostShape = useStaticQuery(graphql`
    query JobPostQuery {
      jobs: allSanityJobPost {
        edges {
          node {
            _rawExcerpt
            _rawBody
            publishedAt(formatString: "MM-DD-YYYY")
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)
  return data.jobs.edges
}

export default useJobPost
