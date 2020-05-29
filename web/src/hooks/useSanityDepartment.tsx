// useSanityDepartment utility hook
// Hook for querying content YAML

// ___________________________________________________________________

// Core
import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type QueryShape = {
  content: {
    edges: {
      node: {
        cell: number
        department: string
        email: string
        fax: number
        government: string
        id: string
        name: string
        pageTitle: string
        slug: {
          current: string
        }
        telephone: number
      }
      next: {
        slug: {
          current: string
        }
        pageTitle: string
      }
    }[]
  }
}

const useSanityDepartment = () => {
  const data = useStaticQuery<QueryShape>(graphql`
    query contentQuery {
      content: allSanityDepartment(filter: { government: { eq: false } }) {
        edges {
          node {
            cell
            department
            email
            fax
            government
            id
            name
            pageTitle
            slug {
              current
            }
            telephone
          }
          next {
            slug {
              current
            }
            pageTitle
          }
        }
      }
    }
  `)

  return data.content
}

export default useSanityDepartment

// ___________________________________________________________________
