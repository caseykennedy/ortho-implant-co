// Purpose Section:

// ___________________________________________________________________

import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'

// Libraries
import { useSpring, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'

// Components
import BlockContent from '../../../components/BlockContent'

// Hooks
import useRethinkPage from '../../../hooks/useRethinkPage'

// UI + Styles
import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../elements'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Purpose = () => {
  const page = useRethinkPage()
  // Only show item when in view
  const [manifestoRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-360px 0px'
  })
  const manifestoSpring = useSpring({
    config: config.molasses,
    opacity: !inView ? 0 : 1,
    transform: !inView ? theme.transform.matrix.from : theme.transform.matrix.to
  })
  return (
    <S.Purpose pt={[7, 8]} pb={[7, 8]}>
      <div className="purpose-inner">
        <Box width={[1, 2 / 3]} pr={[0, 8, 12]} mb={[7, 0]}>
          <Heading as="h4" color="primary">
            {page.purpose.title && page.purpose.title}
          </Heading>

          {page.purpose.heading && (
            <Heading
              as="h3"
              fontWeight={400}
              dangerouslySetInnerHTML={{ __html: page.purpose.heading }}
            />
          )}

          {page.purpose._rawLead && (
            <BlockContent blocks={page.purpose._rawLead || []} />
          )}

          {/* {page.purpose._rawBody && (
            <BlockContent blocks={page.purpose._rawBody || []} />
          )} */}

          <p dangerouslySetInnerHTML={{ __html: page.purpose.statement }} />
        </Box>

        <AnimatedBox
          width={[1, 1 / 3]}
          ref={manifestoRef}
          style={manifestoSpring}
        >
          {page.purpose.figure && (
            <Img
              fluid={page.purpose.figure.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={page.purpose.figure.asset.title}
            />
          )}
        </AnimatedBox>
      </div>
    </S.Purpose>
  )
}

export default Purpose
