// useContactPage hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

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
              gatsbyImageData: IGatsbyImageData
              url: string
            }
          }
        }
        pageTitle: {
          image: {
            asset: {
              gatsbyImageData: IGatsbyImageData
              url: string
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
                  gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
                  url
                }
              }
            }
            pageTitle {
              image {
                asset {
                  gatsbyImageData(fit: FILLMAX, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
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
  `)

  return data.contactPage.edges[0].node
}

export default useContactPage
