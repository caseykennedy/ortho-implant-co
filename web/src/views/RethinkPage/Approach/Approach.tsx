// Approach Section:

import React from 'react'

// Libraries
import { GatsbyImage } from 'gatsby-plugin-image'
import { useSpring, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'

// Components
import BlockContent from '@/components/BlockContent'

// Hooks
import useRethinkPage from '@/hooks/useRethinkPage'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '@/components/elements'
import theme from '../../../../config/theme'

const Approach = () => {
  const page = useRethinkPage()

  const [manifestoRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-360px 0px'
  })
  const manifestoSpring = useSpring({
    config: config.molasses,
    opacity: !inView ? 0 : 1,
    transform: !inView ? theme.transform.matrix.from : theme.transform.matrix.to
  })
  const fadeAnimation = useSpring({
    config: config.molasses,
    // delay: 160,
    from: { transform: theme.transform.matrix.from },
    to: { transform: theme.transform.matrix.to }
  })
  return (
    <S.Approach>
      <Flex width={1} color="white" flexWrap="wrap" alignItems="flex-end">
        <AnimatedBox
          bg="quinary"
          width={[1, 1 / 3]}
          ref={manifestoRef}
          style={manifestoSpring}
        >
          <Parallax className="custom-class" y={[-25, 15]} tagOuter="figure">
            {page.approach.figure && (
              <GatsbyImage
                image={page.approach.figure.asset.gatsbyImageData}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={page.approach.figure.alt}
              />
            )}
          </Parallax>
        </AnimatedBox>

        <AnimatedBox
          width={[1, 2 / 3]}
          bg="secondary"
          p={theme.gutter.axis}
          style={fadeAnimation}
        >
          <Heading as="h4" color="primary">
            {page.approach.title && page.approach.title}
          </Heading>

          <Heading as="h3" fontWeight={400}>
            {page.approach.heading && page.approach.heading}
          </Heading>

          <Flex
            width={1}
            mt={[
              `calc(${theme.space[3]} * 10)`,
              `calc(${theme.space[3]} * 16)`
            ]}
            flexWrap="wrap"
          >
            <Box width={[1, 1 / 3]}>
              {page.approach._rawLead && (
                <BlockContent blocks={page.approach._rawLead || []} />
              )}
            </Box>

            <Box width={[1, 2 / 3]} pl={[0, 7]}>
              {page.approach._rawBody && (
                <BlockContent blocks={page.approach._rawBody || []} />
              )}
            </Box>
          </Flex>
        </AnimatedBox>
      </Flex>
    </S.Approach>
  )
}

export default Approach
