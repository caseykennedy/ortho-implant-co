// Template pages

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = require.resolve('./src/templates/product.tsx')

  // Department pages
  // ___________________________________________________________________
  const product = graphql(`
    {
      products: allSanityProduct(sort: { fields: name, order: ASC }) {
        edges {
          node {
            _rawAdditionalInfo
            _rawDescription
            _rawExcerpt
            _rawFeatures
            gallery {
              _key
              _type
            }
            publishedAt
            slug {
              current
            }
            name
            videoLink
            categories {
              title
            }
          }
          previous {
            name
            slug {
              current
            }
            _rawExcerpt
          }
          next {
            name
            slug {
              current
            }
            _rawExcerpt
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.products.edges.forEach(edge => {
      createPage({
        path: `/implants/${edge.node.slug.current}`,
        component: productTemplate,
        context: {
          slug: edge.node.slug.current,
          next: edge.next,
          prev: edge.previous,
          page: edge.node
        }
      })
    })
  })

  // Return a Promise which will wait for all queries to resolve
  return Promise.all([product])
}
