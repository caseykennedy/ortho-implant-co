// List: List view products

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image';

// Libraries
import { useTransition } from 'react-spring'

// Elements
import { Box, Flex, Heading, Text, AnimatedFlex } from '../../../elements'

// Components
import Icon from '../../../components/Icons'
import ImgMatch from '../../../components/ImgMatch'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Item: React.FC<{ item: ProductNode; transition: any }> = ({
  item,
  transition
}) => {
  const slug = item.slug.current
  const categorySlug = () => {
    const toLowerCase = item.categories[0].title.toLowerCase()
    const dashCat = toLowerCase.replace(/\s/g, '-')
    return dashCat
  }
  return (
    <Link to={`/implants/${categorySlug()}/#${slug}`}>
      <S.Item>
        <Box className="thumb">
          {!item.mainImage ? (
            <ImgMatch
              src="DRP-3-Hole-Narrow-Left 1.png"
              altText="placeholder"
            />
          ) : (
            <GatsbyImage
              image={item.mainImage.asset.gatsbyImageData}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={item.name}
            />
          )}
        </Box>

        <Heading as="h3" fontSize="2rem" mb={0}>
          {item.shortName}
        </Heading>

        <Heading as="h5" className="t--small" mb={0}>
          {item.categories[0].title}
        </Heading>

        <span className="meta">
          details
          <Icon name="nextArrow" />
        </span>
      </S.Item>
    </Link>
  )
}

const List: React.FC<{ items: ProductNode[] }> = ({ items }) => {
  // Card enter/exit trail animation
  const itemTransitions = useTransition(
    items ? items : [],
    item => item.name,
    {
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 1
      },
      trail: 0,
      unique: false
    }
  )

  return (
    <S.List>
      {itemTransitions.map(({ item, props, key }) => (
        <Item item={item} transition={props} key={key} />
      ))}
    </S.List>
  )
}

export default List
