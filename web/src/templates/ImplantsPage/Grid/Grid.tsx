// CardGrid Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Libraries
import { useTransition } from 'react-spring'

// Elements
import { Box, Heading, Text, AnimatedFlex } from '../../../elements'

// Components
import Icon from '../../../components/Icons'
import ImgMatch from '../../../components/ImgMatch'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Card: React.FC<{ implant: ProductEdges; transition: object }> = ({
  implant,
  transition
}) => {
  const slug = implant.node.slug.current
  return (
    <S.Card width={[1 / 2, 1 / 3, 1 / 5]}>
      <Link to={`/implants/${slug}`}>
        <Box className="card__thumb">
          {!implant.node.mainImage ? (
            <ImgMatch
              src="DRP-3-Hole-Narrow-Left 1.png"
              altText="placeholder"
            />
          ) : (
            <Img
              fluid={implant.node.mainImage.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={implant.node.name}
            />
          )}
        </Box>
        <Box className="card__content">
          <Box mt={3} pr={[5, 7]}>
            <Heading as="h4">{implant.node.shortName}</Heading>

            <Text as="h5" className="t--small">
              {implant.node.categories[0].title}
            </Text>
          </Box>

          <span className="card__meta">
            details
            <Icon name="nextArrow" />
          </span>
        </Box>
      </Link>
    </S.Card>
  )
}

const Grid: React.FC<{ items: ProductEdges[] }> = ({ items }) => {
  // Card enter/exit trail animation
  const implantTransitions = useTransition(
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
    <S.Grid width={1}>
      {implantTransitions.map(({ item, key, props }) => (
        <Card implant={item} transition={props} key={key} />
      ))}
    </S.Grid>
  )
}

export default Grid
