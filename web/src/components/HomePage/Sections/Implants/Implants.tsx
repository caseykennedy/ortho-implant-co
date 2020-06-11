// Implants Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

import BlockContent from '../../../BlockContent'
import Section from '../../../Section'
import Button from '../../../../elements/Button'

import { Box, Flex, Heading, Text } from '../../../../elements'
import theme from '../../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Product = () => {
  return
}

// ___________________________________________________________________

const Implants = () => {
  const data: RethinkSectionQueryShape = useStaticQuery(graphql`
    query ImplantsSectionQuery {
      allSanityHomeRethink {
        edges {
          node {
            heading
            title
            linkTitle
            linkTo
            id
            tabPanels {
              linkTo
              linkTitle
              tag
              title
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
              _rawMessage
            }
          }
        }
      }
    }
  `)
  const query = data.allSanityHomeRethink.edges[0].node
  // console.log('---_- Rethink -_---')
  // console.log(query)
  const params = {
    centeredSlides: true,
    freeMode: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    ContainerEl: 'section',
    WrapperEl: 'section',
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    },
    renderSrollbar: () => (
      <Box>
        <hr />
      </Box>
    )
  }
  return (
    <Section bg="secondary" color="white">
      <Box className="cta">
        <Button to={`/implants`}>All Implants</Button>
      </Box>
      <Box width={1 / 2}>
        <Heading as="h5" color="primary" fontWeight={500}>
          Implants
        </Heading>
        <Heading as="h3" fontWeight={400}>
          We create better value for the implants you already know and use on an
          everyday basis.
        </Heading>
      </Box>
      <S.Carousel>
        <Swiper {...params}>
          <Box p={5} bg="tertiary">
            <Heading as="h3">Plates and Screws</Heading>
            <Text as="p" mt={12}>Plates and Screws</Text>
          </Box>
          <Box p={5} bg="tertiary">
            <Heading as="h3">Plates and Screws</Heading>
            <Text as="p" mt={12}>Plates and Screws</Text>
          </Box>
          <Box p={5} bg="tertiary">
            <Heading as="h3">Plates and Screws</Heading>
            <Text as="p" mt={12}>Plates and Screws</Text>
          </Box>
          <Box p={5} bg="tertiary">
            <Heading as="h3">Plates and Screws</Heading>
            <Text as="p" mt={12}>Plates and Screws</Text>
          </Box>
        </Swiper>
      </S.Carousel>
    </Section>
  )
}

export default Implants
