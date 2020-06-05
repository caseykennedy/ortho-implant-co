// Dynamic query variables in GraphQl queries for Gatsby-Image
// https://github.com/gatsbyjs/gatsby/issues/10482#issuecomment-485349612

import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

type Props = {
  src: string
  altText: string
  objectFit?: string
  objectPosition?: string
}

const ImgMatch: React.FC<Props> = ({
  src,
  altText,
  objectFit,
  objectPosition,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () =>
      data.allFile.edges.find(
        ({ node }: { node: any }) => src === node.relativePath
      ),
    [data, src]
  )

  return (
    <Img
      className="img"
      objectFit={objectFit ? objectFit : 'cover'}
      objectPosition={objectPosition ? objectPosition : '50% 50%'}
      alt={altText ? altText : null}
      fluid={match.node.childImageSharp.fluid}
      {...props}
    />
  )
}

export default ImgMatch
