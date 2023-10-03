// PageTitle Section:

// ___________________________________________________________________

import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useSpring, config } from 'react-spring'
import { Parallax } from 'react-scroll-parallax'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {
  altText?: string
  border?: boolean
  image?: IGatsbyImageData
  message: string
  title?: string
  parallaxY?: number | number[]
}

const PageTitle: React.FC<Props> = ({ altText, border, image, message, title, parallaxY = [0, 15] }) => {
  const fadeAnimation = useSpring({
    config: config.molasses,
    delay: 260,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to },
  })
  return (
    <>
      <S.PageTitle image={image}>
        <S.Billboard border={border}>
          <AnimatedBox style={fadeAnimation}>
            <Heading as="h5" color="tertiary">
              {title}
            </Heading>

            <Heading as="h1" mb={0} dangerouslySetInnerHTML={{ __html: message }} />
          </AnimatedBox>
        </S.Billboard>
      </S.PageTitle>

      <Parallax y={parallaxY}>
        <S.Figure>
          {image && <GatsbyImage image={image} objectFit="cover" objectPosition="50% 50%" alt={altText || message} />}
        </S.Figure>
      </Parallax>
    </>
  )
}

export default PageTitle
