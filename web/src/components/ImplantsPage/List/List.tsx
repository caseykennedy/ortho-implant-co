// List: List view products

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Libraries
import { useTransition } from 'react-spring'

// Elements
import { Box, Flex, Heading, Text, AnimatedFlex } from '../../../elements'

// Components
import Icon from '../../Icons'
import ImgMatch from '../../ImgMatch'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Item: React.FC<{ item: ProductEdges; transition: any }> = ({
  item,
  transition
}) => {
  const slug = item.node.slug.current
  const categorySlug = () => {
    const toLowerCase = item.node.categories[0].title.toLowerCase()
    const dashCat = toLowerCase.replace(/\s/g, '-')
    return dashCat
  }
  return (
    <Link to={`/implants/${categorySlug()}/#${slug}`}>
      <S.Item>
        <Box className="thumb">
          {!item.node.mainImage ? (
            <ImgMatch
              src="DRP-3-Hole-Narrow-Left 1.png"
              altText="placeholder"
            />
          ) : (
            <Img
              fluid={item.node.mainImage.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={item.node.name}
            />
          )}
        </Box>

        <Heading as="h3" fontSize="2rem" mb={0}>
          {item.node.shortName}
        </Heading>

        <Heading as="h5" className="t--small" mb={0}>
          {item.node.categories[0].title}
        </Heading>

        <span className="meta">
          details
          <Icon name="nextArrow" />
        </span>
      </S.Item>
    </Link>
  )
}

const List: React.FC<{ items: ProductEdges[] }> = ({ items }) => {
  // Card enter/exit trail animation
  const itemTransitions = useTransition(
    items ? items : [],
    item => item.node.name,
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
    <S.List width={1}>
      {itemTransitions.map(({ item, props, key }) => (
        <Item item={item} transition={props} key={key} />
      ))}
    </S.List>
  )
}

export default List
