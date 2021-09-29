// Testimonials Section:

// ___________________________________________________________________

import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'

// Hooks
import useHomePage from '../../../hooks/useHomePage'

// Libraries
import Swiper from 'react-id-swiper'

// Components
import BlockContent from '../../../components/BlockContent'
import Section from '../../../components/Section'
import Pixels from '../../../components/Pixels'

// UI
import { Box, Flex, Heading, Text } from '../../../elements'

// Theme
import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const TestiSwiper: React.FC = ({ children }) => {
  const params = {
    freeMode: false,
    // effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 50
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 50,
        grabCursor: true
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 50,
        grabCursor: true
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
        grabCursor: true
      }
    }
  }
  return <Swiper {...params}>{children}</Swiper>
}

const Testimonials = () => {
  const data = useHomePage()

  const decoratorProps = {
    fillA: theme.colors.primary,
    fillB: theme.colors.secondary,
    fillC: theme.colors.secondary,
    fillD: theme.colors.tertiary
  }
  return (
    <S.Testimonials>
      <S.Decorator>
        <div className="pixels">
          <Pixels {...decoratorProps} />
        </div>
      </S.Decorator>
      <Box bg="tertiary">
        <Box>
          <Img
            fluid={data.testimonialsFigure.asset.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Healthy people jogging in the mountains."
          />
        </Box>
      </Box>
      <Section bg="secondary" color="white" pt={8} pb={7} border={false}>
        <Box position="relative">
          <TestiSwiper>
            {data.testimonials.map((review, idx) => (
              <Box key={idx}>
                <Heading as="h5" mb={0} fontWeight={500}>
                  {review.position}
                </Heading>
                <Heading as="h5" color="primary" fontWeight={500}>
                  {review.location}
                </Heading>
                <Text fontSize={[`1.5rem`, 3]} fontWeight={300}>
                  {review._rawQuote && (
                    <BlockContent blocks={review._rawQuote || []} />
                  )}
                </Text>
              </Box>
            ))}
          </TestiSwiper>
          {/* <span className="quotation" /> */}
        </Box>
      </Section>
    </S.Testimonials>
  )
}

export default Testimonials
