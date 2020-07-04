// Intro Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { useSpring, config } from 'react-spring'

import useHover from '../../../../hooks/useHover'

import Accordion from '../../../Accordion'
import ImgMatch from '../../../ImgMatch'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

type PositionProps = {
  item: {
    name: string
    src: string
    content: string
  }
}

const Position = ({ item }: PositionProps) => {
  const [hoverRef, isHovered] = useHover()

  const AccordionProps = {
    chevronColor: theme.colors.secondary,
    color: theme.colors.secondary,
    colorActive: theme.colors.secondary,
    borderColor: theme.colors.secondary,
    bg: 'transparent',
    pt: [5, 6],
    pb: [5, 6],
    pr: [5],
    pl: [5, 7]
  }
  return (
    // @ts-ignore: Unreachable code error
    <div ref={hoverRef} style={{ position: 'relative' }}>
      <Accordion title={item.name} {...AccordionProps}>
        <Box bg="background" pt={6} p={[5, 7]}>
          <Text as="p" color="black">
            {item.content}
          </Text>
        </Box>
      </Accordion>

      <Box width="460px" p={6} className={`popup  ${isHovered ? 'show' : ''}`}>
        <ImgMatch src={item.src} altText="core37" />
      </Box>
    </div>
  )
}

const Intro = () => {
  const fadeAnimation = useSpring({
    config: config.molasses,
    delay: 260,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <S.Intro>
      <S.About width={[1, 8 / 10, 2 / 3]}>
        <Box bg="primary" mt={[0]}>
          <Box p={theme.gutter.axis} bg="secondary" color="white">
            <Heading as="h5" color="primary">
              work smarter
            </Heading>

            <Heading as="h2" fontSize={3}>
              We love the sound of rules breaking. It’s what we are trying to do
              to make ‘value’ a possibility in the orthopaedic implant industry.
            </Heading>

            <Text as="p" mt={12} width={1}>
              We shattered the myth that high value is a result of
              commoditization. Simply put, we have found a smarter way to create
              implants.
            </Text>
          </Box>

          {positioning.map((item, idx) => (
            <Position key={idx} item={item} />
          ))}
        </Box>
      </S.About>

      {/* <S.Values>
        <Box width={[1, 1 / 3]}>
          <ImgMatch
            src="girl-climbing-boulder.jpg"
            altText="Lady climbing bouldeer."
          />
        </Box>

        <Box width={[1, 2 / 3]}>asdf</Box>
      </S.Values> */}
    </S.Intro>
  )
}

export default Intro

const positioning = [
  {
    name: 'purpose',
    src: 'skeleton.jpg',
    content:
      'We believe that the way orthopaedic implants are priced and supplied is flawed to the detriment of everyone. Our purpose is to rethink and change that system.'
  },
  {
    name: 'mission',
    src: 'microscope.jpg',
    content:
      'Our mission is to lower the cost of orthopaedic procedures by developing more affordable implants with the perfect balance of quality, service and price for surgeons, hospitals and patients.'
  },
  {
    name: 'vision',
    src: 'ledge-think.jpg',
    content:
      'Because of our forward thinking view of the ay healthcare items should be sourced and implants developed and services, our vision is to play a role in making a more fair and equitable healthcare environment.'
  }
]
