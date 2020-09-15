// Template pages

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const ProductTemplate = require.resolve('./src/templates/product.tsx')
  const CategoryTemplate = require.resolve('./src/templates/category.tsx')
  const JobPostTemplate = require.resolve('./src/templates/job-post.tsx')
  const PostTemplate = require.resolve('./src/templates/post.tsx')

  // Category pages
  // ___________________________________________________________________
  const category = graphql(`
    {
      categories: allSanityProductCategory {
        edges {
          node {
            _id
            description
            title
            slug {
              current
            }
            image {
              asset {
                fluid(maxWidth: 1080) {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
          }
          next {
            _id
            title
            slug {
              current
            }
          }
          previous {
            _id
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
    result.data.categories.edges.forEach(edge => {
      createPage({
        path: `/implants/${edge.node.slug.current}`,
        component: CategoryTemplate,
        context: {
          slug: edge.node.title,
          title: edge.node.title,
          image: edge.node.image,
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
      job: allSanityJobPost {
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
    result.data.job.edges.forEach(edge => {
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

  // Post
  // ___________________________________________________________________
  const post = graphql(`
    {
      post: allSanityPost {
        edges {
          node {
            title
            _rawExcerpt
            _rawBody
            _id
            publishedAt(formatString: "dddd, MMMM yyyy")
            slug {
              current
            }
            mainImage {
              asset {
                fluid(maxWidth: 1080) {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
            }
            categories {
              title
            }
            authors {
              name
              jobTitle
              headshot {
                asset {
                  fluid(maxWidth: 600) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                  }
                }
              }
            }
          }
          previous {
            slug {
              current
            }
            title
            _rawExcerpt
          }
          next {
            slug {
              current
            }
            title
            _rawExcerpt
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.post.edges.forEach(edge => {
      createPage({
        path: `/news/${edge.node.slug.current}`,
        component: PostTemplate,
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
  return Promise.all([category, jobPost, post])
}
