// Template pages

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const departmentTemplate = require.resolve('./src/templates/department.tsx')

  // Department pages
  // ___________________________________________________________________
  const department = graphql(`
    {
      department: allSanityDepartment(
        filter: { government: { eq: false } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            address
            cell
            department
            email
            fax
            government
            id
            image {
              asset {
                fluid(maxWidth: 1080) {
                  src
                  aspectRatio
                  base64
                  sizes
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
            name
            pageTitle
            slug {
              current
            }
            telephone
            _rawContent
            _rawIntro
          }
          next {
            slug {
              current
            }
            pageTitle
          }
          previous {
            slug {
              current
            }
            pageTitle
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.department.edges.forEach(edge => {
      createPage({
        path: `/departments/${edge.node.slug.current}`,
        component: departmentTemplate,
        context: {
          slug: edge.node.slug.current,
          next: edge.next,
          prev: edge.previous,
          page: edge.node
        }
      })
    })
  })

  // Government pages
  // ___________________________________________________________________
  const government = graphql(`
    {
      government: allSanityDepartment(
        filter: { government: { eq: true } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            address
            cell
            department
            email
            fax
            government
            id
            image {
              asset {
                fluid(maxWidth: 1080) {
                  src
                  aspectRatio
                  base64
                  sizes
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
            name
            pageTitle
            slug {
              current
            }
            telephone
            _rawContent
            _rawIntro
          }
          next {
            slug {
              current
            }
            pageTitle
          }
          previous {
            slug {
              current
            }
            pageTitle
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.government.edges.forEach(edge => {
      createPage({
        path: `/government/${edge.node.slug.current}`,
        component: departmentTemplate,
        context: {
          slug: edge.node.slug.current,
          next: edge.next,
          prev: edge.previous,
          page: edge.node
        }
      })
    })
  })

  // Return a Promise which will wait for both the queries to resolve
  return Promise.all([department, government])
}
