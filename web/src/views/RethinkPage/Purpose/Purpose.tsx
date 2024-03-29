// Purpose Section:

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Libraries
import { useSpring, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'

// Components
import BlockContent from '@/components/BlockContent'

// Hooks
import useRethinkPage from '@/hooks/useRethinkPage'

// UI + Styles
import * as S from './styles.scss'
import { Box, Heading, AnimatedBox } from '@/components/elements'
import theme from '../../../../config/theme'

const Purpose = () => {
  const page = useRethinkPage()
  // Only show item when in view
  const [manifestoRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-360px 0px',
  })
  const manifestoSpring = useSpring({
    config: config.molasses,
    opacity: !inView ? 0 : 1,
    transform: !inView ? theme.transform.matrix.from : theme.transform.matrix.to,
  })
  return (
    <S.Purpose pt={[7, 8]} pb={[7, 8]}>
      <div className="purpose-inner">
        <Box width={[1, 2 / 3]} pr={[0, 8]} mb={[7, 0]}>
          <Heading as="h4" color="primary">
            {page.purpose.title && page.purpose.title}
          </Heading>

          {page.purpose.heading && (
            <Heading as="h3" fontWeight={400} dangerouslySetInnerHTML={{ __html: page.purpose.heading }} />
          )}

          {page.purpose._rawLead && <BlockContent blocks={page.purpose._rawLead || []} />}

          <p dangerouslySetInnerHTML={{ __html: page.purpose.statement }} />
        </Box>

        <AnimatedBox width={[1, 1 / 3]} ref={manifestoRef} style={manifestoSpring}>
          {page.purpose.figure && (
            <GatsbyImage
              image={page.purpose.figure.asset.gatsbyImageData}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={page.purpose.figure.alt}
            />
          )}
        </AnimatedBox>
      </div>
    </S.Purpose>
  )
}

export default Purpose
