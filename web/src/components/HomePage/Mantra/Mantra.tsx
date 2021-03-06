// Mantra Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import BlockContent from '../../BlockContent'

import Button from '../../../elements/Button'
import { Box, Flex, Heading, Text } from '../../../elements'

import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Mantra = () => {
  const data: MantraSectionQueryShape = useStaticQuery(graphql`
    query MantraSectionQuery {
      allSanityHomeMantra {
        edges {
          node {
            heading
            linkTitle
            linkTo
            title
            _rawMessage
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
          }
        }
      }
    }
  `)
  const query = data.allSanityHomeMantra.edges[0].node
  // console.log('---_- Mantra -_---')
  // console.log(query)
  return (
    <>
      <Box bg="quinary" color="text">
        <S.Panel>
          <Box width={[1, 1 / 2]}>
            {query.image && (
              <Img
                fluid={query.image.asset.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                className="img"
                alt={`Affordable Implants for ${query.title}`}
              />
            )}
          </Box>
          <Flex
            width={[1, 1 / 2]}
            p={theme.gutter.axis}
            flexDirection="column"
            justifyContent="space-between"
            className="content"
          >
            <Box>
              <Heading as="h5" color="tertiary">
                {query.title}
              </Heading>
              <Heading as="h3" fontWeight={400}>
                {query.heading}
              </Heading>
            </Box>
            <Box>
              {query._rawMessage && (
                <BlockContent blocks={query._rawMessage || []} />
              )}
              <Box>
                <Button to={`/${query.linkTo}`}>{query.linkTitle}</Button>
              </Box>
            </Box>
          </Flex>
        </S.Panel>
      </Box>
      {/* <Section bg="quinary" color="text" overflow="visible" pt={9} pb={10}>
        <Text as="p" fontSize={'1.5rem'} fontWeight={400} textAlign="center" px={10}>
          We believe that the way that orthopaedic implants are priced and supplied is flawed to the detriment of everyone. Our purpose is to rethink and change that system.
        </Text>
      </Section> */}
    </>
  )
}

export default Mantra
