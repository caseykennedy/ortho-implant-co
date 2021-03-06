// Filter Section:

// ___________________________________________________________________

import React, { useState } from 'react'

// Hooks
import useProduct from '../../../hooks/useProduct'
import useCategory from '../../../hooks/useCategory'

// Elements
import { Box, Flex, Heading } from '../../../elements'

// Components
import List from '../List'
import Icon from '../../Icons'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

type TogglerProps = {
  gridView: boolean
  setGridView: React.Dispatch<React.SetStateAction<boolean>>
}

const Toggler: React.FC<TogglerProps> = ({ gridView, setGridView }) => {
  function toggleView() {
    setGridView(!gridView)
  }
  return (
    <S.Toggler>
      <Box
        className={`toggler__btn ${!gridView ? '' : 'active'}`}
        onClick={() => toggleView()}
      >
        <Icon name="gridView" />
      </Box>
      <Box
        className={`toggler__btn ${gridView ? '' : 'active'}`}
        onClick={() => toggleView()}
      >
        <Icon name="listView" />
      </Box>
    </S.Toggler>
  )
}

const Filter = () => {
  const implants = useProduct()
  const categories = useCategory()

  // Filter implants
  const [items, setItems] = useState(implants)
  const setFilteredItems = (category: string) => {
    setItems(
      implants.filter(item => {
        if (item.node.categories[0].title.includes(category)) {
          return item
        }
        if (
          item.node.categories[1] &&
          item.node.categories[1].title.includes(category)
        ) {
          return item
        }
      })
    )
  }

  // Reset / Show all
  const resetFilteredItems = () => {
    setItems(implants)
  }

  // Toggle Grid/List views
  const [gridView, setGridView] = useState(true)
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
            onClick={resetFilteredItems}
          >
            All
          </Box>
        </div>

        {/* <Toggler gridView={gridView} setGridView={setGridView} /> */}
      </S.Navigation>

      <Box className="view">
        <List items={items} />
      </Box>

      {/* {gridView ? (
        <Flex style={{ marginRight: '-2px' }}>
          <Grid items={items} />
        </Flex>
      ) : (
        <Box className="view">
          <List items={items} />
        </Box>
      )} */}
    </S.Filter>
  )
}

export default Filter
