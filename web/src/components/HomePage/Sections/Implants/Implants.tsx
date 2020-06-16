// Implants Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import Swiper from 'react-id-swiper'

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
  // const data: RethinkSectionQueryShape = useStaticQuery(graphql`
  //   query ImplantsSectionQuery {
  //     allSanityHomeRethink {
  //       edges {
  //         node {
  //           heading
  //           title
  //           linkTitle
  //           linkTo
  //           id
  //           tabPanels {
  //             linkTo
  //             linkTitle
  //             tag
  //             title
  //             image {
  //               asset {
  //                 fluid(maxWidth: 1080) {
  //                   src
  //                   aspectRatio
  //                   base64
  //                   sizes
  //                   srcSet
  //                   srcSetWebp
  //                   srcWebp
  //                 }
  //               }
  //             }
  //             _rawMessage
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // const query = data.allSanityHomeRethink.edges[0].node
  // console.log('---_- Rethink -_---')
  // console.log(query)
  const params = {
    centeredSlides: true,
    freeMode: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    ContainerEl: 'div',
    WrapperEl: 'div',
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
    // parallax: true,
    // parallaxEl: {
    //   el: '.parallax-bg',
    //   value: '-23%'
    // },
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
    <Section bg="secondary" color="white" overflow="hidden">
      <Box className="cta">
        <Button to={`/implants`}>All Implants</Button>
      </Box>
      <Box width={[1, 1 / 2]} mt={[8, 0]}>
        <Heading as="h5" color="primary" fontWeight={500}>
          Implants
        </Heading>
        <Heading as="h3" fontSize={3} fontWeight={400}>
          We create better value for the implants you already know and use on an
          everyday basis.
        </Heading>
      </Box>
      <S.Carousel>
        <Swiper {...params}>
          {Products.map(product => (
            <S.Card key={product.category}>
              <Heading as="h3" fontSize={4}>
                {product.category}
              </Heading>
              <Text as="h4" mb={0}>
                VIEW ALL
              </Text>
            </S.Card>
          ))}
        </Swiper>
      </S.Carousel>
    </Section>
  )
}

export default Implants

const Products = [
  {
    category: 'hip fractures'
  },
  {
    category: 'plates and screws'
  },
  {
    category: 'external fixation'
  },
  {
    category: 'im nails'
  },
  {
    category: 'sports'
  }
]
