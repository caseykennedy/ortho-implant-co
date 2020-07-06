// Blog Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { Grid, Cell } from 'styled-css-grid'

import BlockContent from '../../../BlockContent'
import Section from '../../../Section'
import ImgMatch from '../../../ImgMatch'
import Icon from '../../../Icons'

import Button from '../../../../elements/Button'
import { Box, Flex, Heading, Text } from '../../../../elements'

import theme from '../../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Blog = () => {
  // const data: MantraSectionQueryShape = useStaticQuery(graphql`
  //   query MantraSectionQuery {
  //     allSanityHomeMantra {
  //       edges {
  //         node {
  //           heading
  //           linkTitle
  //           linkTo
  //           title
  //           _rawMessage
  //           image {
  //             asset {
  //               fluid(maxWidth: 1080) {
  //                 src
  //                 aspectRatio
  //                 base64
  //                 sizes
  //                 srcSet
  //                 srcSetWebp
  //                 srcWebp
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // const query = data.allSanityHomeMantra.edges[0].node
  // console.log('---_- Mantra -_---')
  // console.log(query)
  return (
    <Section bg="primary" color="text" border={true}>
      <Heading as="h4">What's Happening</Heading>
      <S.CardHolder width={1}>
        <S.CardColumn width={[1, '47%', '30%']}>
          <S.Card bg={theme.colors.background}>
            <Box className="card__image">
              <ImgMatch src="blog.jpg" altText="blog" />
            </Box>
            <Flex className="card__content">
              <Box>
                <Heading as="h5" color="tertiary">
                  value
                </Heading>
                <Text as="p">
                  We create better value for the implants you already know and
                  use on an everyday basis.
                </Text>
              </Box>
              <Text as="p" className="card__meta">
                BLOG — Apr 19, 2020
                <Icon name="nextArrow" />
              </Text>
            </Flex>
          </S.Card>
        </S.CardColumn>

        <S.CardColumn width={[1, '47%', '30%']}>
          <S.Card bg={theme.colors.black} color={theme.colors.white}>
            <Box className="card__image">
              <ImgMatch src="blog.jpg" altText="blog" />
            </Box>
            <Flex className="card__content">
              <Box>
                <Heading as="h5">value</Heading>
                <Text as="p">
                  We create better value for the implants you already know and
                  use on an everyday basis.
                </Text>
              </Box>
              <Text as="p" className="card__meta">
                BLOG — Apr 19, 2020
                <Icon name="nextArrow" color="white" />
              </Text>
            </Flex>
          </S.Card>
        </S.CardColumn>

        <S.CardColumn width={[1, 1, '30%']}>
          <S.Card width={[1, 1 / 2, 1]} bg="tertiary">
            <Flex className="card__content">
              <Box>
                <Heading as="h5">value</Heading>
                <Text as="p" color="white">
                  We create better value for the implants you already know and
                  use on an everyday basis.
                </Text>
              </Box>
              <Text as="p" className="card__meta">
                BLOG — Apr 19, 2020
                <Icon name="nextArrow" />
              </Text>
            </Flex>
          </S.Card>

          <S.Card width={[1, 1 / 2, 1]} border={true}>
            <Flex className="card__content">
              <Box>
                <Heading as="h5">value</Heading>
                <Text as="p">
                  We create better value for the implants you already know and
                  use on an everyday basis.
                </Text>
              </Box>
              <Text as="p" className="card__meta">
                BLOG — Apr 19, 2020
                <Icon name="nextArrow" />
              </Text>
            </Flex>
          </S.Card>
        </S.CardColumn>
      </S.CardHolder>
    </Section>
  )
}

export default Blog
