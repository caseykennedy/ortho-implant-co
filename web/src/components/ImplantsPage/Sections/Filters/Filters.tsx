// Filters Section:

// ___________________________________________________________________

import React, { useState } from 'react'
import { useTransition } from 'react-spring'
import Img from 'gatsby-image/withIEPolyfill'

import useProduct from '../../../../hooks/useProduct'
import useCategory from '../../../../hooks/useCategory'

import Icon from '../../../Icons'
import ImgMatch from '../../../ImgMatch'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedFlex } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

const ProductCard: React.FC<{ implant: ProductEdges; transition: any }> = ({
  implant,
  transition
}) => {
  const slug = implant.node.slug.current
  return (
    <AnimatedFlex width={[1 / 2, 1 / 3, 1 / 4]} style={transition}>
      <S.Card to={`/implants/${slug}`}>
        <Box width={[7 / 10]} className="card__thumb">
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
          <Box mt={3}>
            <Heading as="h4" mt={5} color="text">
              {implant.node.shortName}
            </Heading>

            <Text as="h5" className="t--small">
              {implant.node.categories[0].title}
            </Text>
          </Box>

          <Text as="span" mt={5} className="card__meta  t--uppercase">
            details
            <Icon name="nextArrow" />
          </Text>
        </Box>
      </S.Card>
    </AnimatedFlex>
  )
}

const ProductPanel: React.FC<{ items: ProductEdges[] }> = ({ items }) => {
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
    <Box width={1}>
      <S.CardHolder width={1}>
        {/* <Flex width={[1 / 2, 1 / 3, 1 / 4]}>
          <S.Card to="/" className="card--title">
            <div className="card__content">
              <Box mt={3}>
                <Heading as="h4" mt={5} color="text">
                  Hip Fractures
                </Heading>
              </Box>

              <Text as="span" mt={5} className="card__meta  t--uppercase">
                details
              </Text>
            </div>
          </S.Card>
        </Flex> */}
        {implantTransitions.map(({ item, key, props }) => (
          <ProductCard implant={item} transition={props} key={key} />
        ))}
      </S.CardHolder>
    </Box>
  )
}

const Filters = () => {
  const implants = useProduct()
  const categories = useCategory()
  const [items, setItems] = useState(implants)
  const setFilteredItems = (category: string) => {
    setItems(
      implants.filter(item => item.node.categories[0].title === category)
    )
  }
  const resetFilteredItems = () => {
    setItems(implants)
  }
  // console.log('—————|— filterCategory —|—————')
  // console.log(items)
  return (
    <S.ProductGrid id="product-grid">
      <S.Filter href="#product-grid">
        <Box width={[0, 0, theme.logoWidth]} />
        <div className="filter__inner">
          {categories.map(({ node: cat }, idx) => (
            <Heading
              className="filter__btn"
              onClick={() => setFilteredItems(cat.title)}
              key={idx}
            >
              {cat.title}
            </Heading>
          ))}
          <Box className="filter__btn filter__btn--all" onClick={resetFilteredItems}>
            See all
          </Box>
        </div>
      </S.Filter>

      <Flex>
        <ProductPanel items={items} />
      </Flex>
    </S.ProductGrid>
  )
}

export default Filters
