// Mantra Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import BlockContent from '../../../BlockContent'
import Section from '../../../Section'

import Button from '../../../../elements/Button'
import { Box, Flex, Heading, Text } from '../../../../elements'

import theme from '../../../../../config/theme'
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
      <Section bg="primary" color="text">
        <S.Panel>
          <Box width={[1, 1, 1 / 2]}>
            {query.image && (
              <Img
                fluid={query.image.asset.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={`Affordable Implants for ${query.title}`}
              />
            )}
          </Box>
          <Flex
            width={[1, 1, 1 / 2]}
            p={[5, 7]}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading as="h5" color="tertiary" fontWeight={500}>
                {query.title}
              </Heading>
              <Heading as="h3" fontSize={`calc(${theme.fontSizes[3]} * 1.5)`} fontWeight={500}>
                {query.heading}
              </Heading>
            </Box>
            <Box>
              {query._rawMessage && (
                <BlockContent blocks={query._rawMessage || []} />
              )}
              <Box mb={[-5, -7]}>
                <Button to={`/${query.linkTo}`} invert={true}>
                  {query.linkTitle}
                </Button>
              </Box>
            </Box>
          </Flex>
        </S.Panel>
      </Section>
    </>
  )
}

export default Mantra
