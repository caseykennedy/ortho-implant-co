// Filter Section:

// ___________________________________________________________________

import React, { useState } from 'react'
import Img from 'gatsby-image/withIEPolyfill'

// Libraries
import { useTransition } from 'react-spring'

// Hooks
import useProduct from '../../../hooks/useProduct'
import useCategory from '../../../hooks/useCategory'

// Elements
import {
  Box,
  Flex,
  Heading,
  Text,
  AnimatedFlex,
  AnimatedBox
} from '../../../elements'

// Components
import Grid from '../Grid'
import List from '../List'

import Icon from '../../Icons'
import ImgMatch from '../../ImgMatch'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Filter = () => {
  const implants = useProduct()
  const categories = useCategory()
  const [items, setItems] = useState(implants)
  const setFilteredItems = (category: string) => {
    setItems(
      implants.filter(item => item.node.categories[0].title === category)
    )
  }
  function resetFilteredItems() {
    setItems(implants)
  }
  // console.log('—————|— filterCategory —|—————')
  // console.log(items)

  // Toggle Grid/List views
  const [gridView, setGridView] = useState(true)
  function toggle() {
    setGridView(!gridView)
  }
  return (
    <S.Filter id="product-grid">
      <S.Navigation href="#product-grid">
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
          <Box
            className="filter__btn filter__btn--all"
            onClick={() => resetFilteredItems()}
          >
            See all
          </Box>
          <Box className="filter__btn" onClick={() => toggle()}>
            TOGGLE
          </Box>
        </div>
      </S.Navigation>

      {gridView ? (
        <Flex style={{ marginRight: '-2px' }}>
          <Grid items={items} />
        </Flex>
      ) : (
        <Box className="view">
          <List items={items} />
        </Box>
      )}
    </S.Filter>
  )
}

export default Filter
