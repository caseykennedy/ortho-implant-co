// Implants Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import Swiper from 'react-id-swiper'

import BlockContent from '../../../BlockContent'
import Section from '../../../Section'
import Button from '../../../../elements/Button'
import Icon from '../../../Icons'
import ImgMatch from '../../../ImgMatch'

import { Box, Flex, Heading, Text } from '../../../../elements'
import theme from '../../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Product = () => {
  return
}

// ___________________________________________________________________

const Implants = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    freeMode: false,
    slidesPerView: 2,
    spaceBetween: 2,
    // centeredSlides: true,
    breakpoints: {
      1440: {
        slidesPerView: 4,
        spaceBetween: 2
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 2
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 2,
        grabCursor: true
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 2,
        grabCursor: true
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 2,
        grabCursor: true
      }
    }
  }
  return (
    <div style={{ position: 'relative' }}>
    <S.Decorator>
      <ImgMatch src="sports.jpg" altText="Running up stairs" />
    </S.Decorator>
      <Section color="white" border={true}>
        {/* <Box className="cta">
        <Button to={`/implants`}>All Implants</Button>
      </Box> */}
        <Box width={[1, 1 / 2]} mt={[8, 0]} mb={10}>
          <Heading as="h5" color="primary" fontWeight={500}>
            Implants
          </Heading>
          <Heading as="h3" fontSize={3} fontWeight={400}>
            We create better value for the implants you already know and use on
            an everyday basis.
          </Heading>
        </Box>
      </Section>
      <S.Carousel>
        <Swiper {...params}>
          {Products.map(product => (
            <S.Card key={product.category}>
              <Flex className="card__content">
                <Heading as="h3">{product.category}</Heading>
              </Flex>

              <Text as="p" className="card__meta  t--uppercase">
                <Text as="span">see all</Text>

                <Icon name="nextArrow" />
              </Text>
            </S.Card>
          ))}
        </Swiper>
      </S.Carousel>
    </div>
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
