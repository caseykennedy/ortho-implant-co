// Template pages

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const ProductTemplate = require.resolve('./src/templates/product.tsx')
  const JobPostTemplate = require.resolve('./src/templates/job-post.tsx')

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
              asset {
                fluid(maxWidth: 1080) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                  base64
                  srcWebp
                  srcSetWebp
                }
              }
            }
            publishedAt(formatString: "MM-DD-YYYY")
            slug {
              current
            }
            name
            shortName
            videoLink
            categories {
              title
            }
          }
          previous {
            name
            shortName
            slug {
              current
            }
            _rawExcerpt
          }
          next {
            name
            shortName
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
        component: ProductTemplate,
        context: {
          slug: edge.node.slug.current,
          page: edge.node,
          next: edge.next,
          prev: edge.previous
        }
      })
    })
  })

  // Job Post
  // ___________________________________________________________________
  const jobPost = graphql(`
    {
      jobs: allSanityJobPost {
        edges {
          node {
            _rawExcerpt
            _rawBody
            publishedAt(formatString: "dddd, MMMM yyyy")
            title
            slug {
              current
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.jobs.edges.forEach(edge => {
      createPage({
        path: `/careers/${edge.node.slug.current}`,
        component: JobPostTemplate,
        context: {
          slug: edge.node.slug.current,
          page: edge.node,
          next: edge.next,
          prev: edge.previous
        }
      })
    })
  })

  // Return a Promise which will wait for all queries to resolve
  return Promise.all([product, jobPost])
}
