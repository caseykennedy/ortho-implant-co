// useContactPage hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  contactPage: {
    edges: {
      node: {
        companyName: string
        emails: string[]
        location: {
          lat: number
          lng: number
        }
        addressMailing: string
        addressOffice: string
        telDirect: string
        telFax: string
        telTollFree: string
        billboard: {
          title: string
          message: string
          linkTo: string
          linkTitle: string
          figure: {
            alt: string
            asset: {
              fluid: ImageShape
              title: string
            }
          }
        }
        pageTitle: {
          image: {
            asset: {
              fluid: ImageShape
            }
          }
          link: string
          message: string
          title: string
        }
      }
    }[]
  }
}

const useContactPage = () => {
  const data = useStaticQuery<Props>(graphql`
    query ContactPageQuery {
      contactPage: allSanityContactPage {
        edges {
          node {
            companyName
            emails
            location {
              lat
              lng
            }
            addressMailing
            addressOffice
            telDirect
            telFax
            telTollFree
            billboard {
              title
              message
              linkTo
              linkTitle
              figure {
                alt
                asset {
                  fluid(maxWidth: 800) {
                    ...GatsbySanityImageFluid
                  }
                  title
                }
              }
            }
            pageTitle {
              image {
                asset {
                  fluid(maxWidth: 800) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
              link
              message
              title
            }
          }
        }
      }
    }
  `)

  return data.contactPage.edges[0].node
}

export default useContactPage
