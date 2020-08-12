// Implants Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import Swiper from 'react-id-swiper'

import BlockContent from '../../../BlockContent'
import Section from '../../../Section'
import Button from '../../../../elements/Button'
import Icon from '../../../Icons'
import ImgMatch from '../../../ImgMatch'

// Hooks
import useHover from '../../../../hooks/useHover'
import useCategory from '../../../../hooks/useCategory'

import { Box, Flex, Heading, Text } from '../../../../elements'
import theme from '../../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Category: React.FC<{ cat: CategoryNode }> = ({ cat }) => {
  const [hoverRef, isHovered] = useHover()

  return (
    // @ts-ignore: Unreachable code error
    <Box ref={hoverRef} position="relative">
      <Link to={`/implants/${cat.slug.current}`}>{cat.title}</Link>
      <Box width="600px" p={0} className={`popup  ${isHovered ? 'show' : ''}`}>
        {cat.image && (
          <Img
            fluid={cat.image.asset.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={cat.title}
            className="article__img"
          />
        )}
      </Box>
    </Box>
  )
}

// ___________________________________________________________________

const Implants = () => {
  const categories = useCategory()
  // console.log(categories)

  return (
    <Section color="white">
      {/* <Box className="cta">
          <Button to={`/implants`}>All Implants</Button>
        </Box> */}
      <Box width={[1, 1 / 2]} mt={[8, 0]} mb={10}>
        <Heading as="h5" color="primary" fontWeight={500}>
          Implants
        </Heading>
        <Heading as="h3" fontSize={3} fontWeight={400}>
          We create better value for the implants you already know and use on an
          everyday basis.
        </Heading>
      </Box>
      <S.Categories width={[1, 1 / 2]}>
        {categories.map(({ node: cat }, idx) => (
          <Category cat={cat} key={idx} />
        ))}
      </S.Categories>
    </Section>
  )
}

export default Implants

{
  /* <div style={{ position: 'relative' }}>
  <S.Decorator>
    <ImgMatch src="sports.jpg" altText="Running up stairs" />
  </S.Decorator>
  <S.Carousel>
    <Swiper {...params}>
      {categories.map(({ node: cat }, idx) => (
        <Link to={`/implants/${cat.slug.current}`} key={idx}>
          <S.Card>
            <Flex className="card__content">
              <Heading as="h3">{cat.title}</Heading>
            </Flex>

            <Box className="card__img">
              {cat.image && (
                <Img
                  fluid={cat.image.asset.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={cat.title}
                />
              )}
            </Box>

            <Text as="p" className="card__meta  t--uppercase">
              <Text as="span">see all</Text>

              <Icon name="nextArrow" />
            </Text>
          </S.Card>
        </Link>
      ))}
    </Swiper>
  </S.Carousel>
</div> */
}
