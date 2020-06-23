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

type TeamMateProps = {
  item: {
    name: string
    src: string
  }
}

const TeamMate = ({ item }: TeamMateProps) => {
  const [hoverRef, isHovered] = useHover()
  const AccordionProps = {
    chevronColor: theme.colors.white,
    color: theme.colors.white,
    colorActive: theme.colors.white,
    borderColor: theme.colors.tertiary,
    bg: 'black'
  }
  return (
    // @ts-ignore: Unreachable code error
    <div ref={hoverRef} style={{ position: 'relative' }}>
      <Accordion title={item.name} {...AccordionProps}>
        <Box pt={6} pb={2} pr={7}>
          <Text as="p">content</Text>
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
      <S.About>
        <Box
          width={[1, 2 / 3]}
          bg="secondary"
          p={theme.gutter.axis}
          mt={[0, -5]}
        >
          <Heading as="h5" color="primary">
            question
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

          {projectList.map((item, idx) => (
            <TeamMate key={idx} item={item} />
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

const projectList = [
  {
    name: 'purpose',
    src: 'reading.jpg'
  },
  {
    name: 'mission',
    src: 'drib__neon_4x.png'
  },
  {
    name: 'vision',
    src: 'meeting.jpg'
  }
]
