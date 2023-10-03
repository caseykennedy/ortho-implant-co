// Template pages

const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const CategoryTemplate = require.resolve("./src/templates/category.tsx");
  const JobPostTemplate = require.resolve("./src/templates/job-post.tsx");
  const PostTemplate = require.resolve("./src/templates/post.tsx");
  const LaningPageTemplate = require.resolve(
    "./src/templates/ValueLandingPage/index.tsx"
  );

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
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                )
                url
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
  `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }
    result.data.categories.edges.forEach((edge) => {
      createPage({
        path: `/implants/${edge.node.slug.current}`,
        component: CategoryTemplate,
        context: {
          slug: edge.node.title,
          title: edge.node.title,
          image: edge.node.image,
          next: edge.next,
          prev: edge.previous,
        },
      });
    });
  });

  // Job Post
  // ___________________________________________________________________
  const jobPost = graphql(`
    {
      job: allSanityJobPost {
        edges {
          node {
            _rawExcerpt
            _rawBody
            publishedAt(formatString: "MMMM DD, yyyy")
            title
            slug {
              current
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }
    result.data.job.edges.forEach((edge) => {
      createPage({
        path: `/careers/${edge.node.slug.current}`,
        component: JobPostTemplate,
        context: {
          slug: edge.node.slug.current,
          page: edge.node,
          next: edge.next,
          prev: edge.previous,
        },
      });
    });
  });

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
  `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }
    result.data.post.edges.forEach((edge) => {
      createPage({
        path: `/news/${edge.node.slug.current}`,
        component: PostTemplate,
        context: {
          slug: edge.node.slug.current,
          page: edge.node,
          next: edge.next,
          prev: edge.previous,
        },
      });
    });
  });

  // Landing Page
  // ___________________________________________________________________
  const landingPage = graphql(`
    {
      landingPage: allSanityLandingPage {
        edges {
          node {
            title
            slug {
              current
            }
            billboard {
              title
              message
              linkTo
              linkTitle
              figure {
                alt
                asset {
                  gatsbyImageData(
                    fit: FILLMAX
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, AVIF, WEBP]
                  )
                  url
                }
              }
            }
            intro {
              _rawBody
              heading
              title
              positioning {
                _rawBody
                figure {
                  asset {
                    gatsbyImageData(
                      fit: FILLMAX
                      layout: FULL_WIDTH
                      placeholder: BLURRED
                      formats: [AUTO, AVIF, WEBP]
                    )
                    url
                  }
                  alt
                }
                lead
                title
              }
            }
            pageTitle {
              image {
                asset {
                  gatsbyImageData(
                    fit: FILLMAX
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, AVIF, WEBP]
                  )
                  url
                }
              }
              message
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }
    result.data.landingPage.edges.forEach((edge) => {
      createPage({
        path: `/${edge.node.slug.current}`,
        component: LaningPageTemplate,
        context: {
          slug: edge.node.slug.current,
          page: edge.node,
        },
      });
    });
  });

  // Return a Promise which will wait for all queries to resolve
  return Promise.all([category, jobPost, post, landingPage]);
};
