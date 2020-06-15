// Reviews Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import BlockContent from '../../../BlockContent'
import Section from '../../../Section'
import ImgMatch from '../../../ImgMatch'
import Pixels from '../../../Pixels'

import Button from '../../../../elements/Button'
import { Box, Flex, Heading, Text } from '../../../../elements'

import theme from '../../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Reviews = () => {
  const data: ReviewsSectionQueryShape = useStaticQuery(graphql`
    query ReviewsSectionQuery {
      allSanityHomeReviews {
        edges {
          node {
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
            reviews {
              _rawQuote
              location
              position
            }
            _key
          }
        }
      }
    }
  `)
  const query = data.allSanityHomeReviews.edges[0].node
  // console.log('---_- Reviews -_---')
  // console.log(query)
  const decoratorProps = {
    fillA: theme.colors.primary,
    fillB: theme.colors.secondary,
    fillC: theme.colors.secondary,
    fillD: theme.colors.tertiary
  }
  return (
    <>
      <S.Decorator>
        <div className="pixels">
          <Pixels {...decoratorProps} />
        </div>
      </S.Decorator>
      <Box bg="tertiary">
        <Box>
          <Img
            fluid={query.image.asset.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Healthy people jogging in the mountains."
          />
        </Box>
      </Box>
      <Section bg="secondary" color="white" pt={8} pb={10} border={false}>
        <Box>
          {query.reviews.map(review => (
            <Box key={review.position}>
              <Heading as="h5" mb={0} fontWeight={500}>
                {review.position}
              </Heading>
              <Heading as="h5" color="primary" fontWeight={500}>
                {review.location}
              </Heading>
              <Text fontSize={3} fontWeight={300}>
                {review._rawQuote && (
                  <BlockContent blocks={review._rawQuote || []} />
                )}
              </Text>
            </Box>
          ))}
        </Box>
      </Section>
    </>
  )
}

export default Reviews
