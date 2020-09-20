// Implants Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Components
import Section from '../../Section'

// Hooks
import useHover from '../../../hooks/useHover'
import useCategory from '../../../hooks/useCategory'

// UI + Styles
import { Box, Flex, Heading, Text } from '../../../elements'
import Button from '../../../elements/Button'
import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Category: React.FC<{ cat: CategoryNode }> = ({ cat }) => {
  const [hoverRef, isHovered] = useHover()

  return (
    // @ts-ignore: Unreachable code error
    <Box my={4} ref={hoverRef}>
      <Link to={`/implants/${cat.slug.current}`}>{cat.title}</Link>
      <Box
        width={[1, 1, 1]}
        p={0}
        className={`tip  ${isHovered ? 'tip--visible' : null}`}
      >
        {cat.illustration && (
          <Img
            fluid={cat.illustration.asset.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={cat.title}
          />
        )}
      </Box>
    </Box>
  )
}

const Implants = () => {
  const categories = useCategory()

  return (
    <S.Implants color="white" border={true} overflow="hidden">
      <Box className="cta">
        <Button to={`/implants`}>All Implants</Button>
      </Box>
      <Box
        width={[1, 1 / 2]}
        mb={10}
        pr={[0, 7]}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Heading as="h5" color="primary" fontWeight={500} mt={[7, 0]}>
          Implants
        </Heading>
        <Heading as="h3" fontSize={3} fontWeight={400}>
          We create better value for the implants you already know and use on an
          everyday basis.
        </Heading>
      </Box>
      <S.Categories width={1}>
        {categories.map(({ node: cat }, idx) => (
          <Category cat={cat} key={idx} />
        ))}
      </S.Categories>
    </S.Implants>
  )
}

export default Implants
