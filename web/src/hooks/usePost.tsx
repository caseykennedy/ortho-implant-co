// usePost hook
// Hook for querying data

import { graphql, useStaticQuery } from 'gatsby'

const usePost = () => {
  const data = useStaticQuery<PostShape>(graphql`
    query PostQuery {
      posts: allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        edges {
          node {
            title
            _rawExcerpt
            _rawBody
            _id
            publishedAt(formatString: "MMMM DD, yyyy")
            slug {
              current
            }
            mainImage {
              asset {
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                  aspectRatio: 1.75
                  sizes: "(max-width: 800px) 50vw, 75vw"
                )
                url
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
                  gatsbyImageData(
                    fit: FILLMAX
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, AVIF, WEBP]
                    sizes: "(max-width: 800px) 20vw, 15vw"
                  )
                  url
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
  `)

  return data.posts.edges
}

export default usePost
