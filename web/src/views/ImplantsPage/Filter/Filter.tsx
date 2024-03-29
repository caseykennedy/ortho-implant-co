// Filter Section:

import React, { useState } from 'react'

// Hooks
import useProduct from '@/hooks/useProduct'
import useCategory from '@/hooks/useCategory'

// Elements
import { Text } from '@/components/elements'

// Components
import List from '../List'
import Icon from '@/components/Icons'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

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
      <div
        className={`toggler__btn ${!gridView ? '' : 'active'}`}
        onClick={() => toggleView()}
      >
        <Icon name="gridView" />
      </div>
      <div
        className={`toggler__btn ${gridView ? '' : 'active'}`}
        onClick={() => toggleView()}
      >
        <Icon name="listView" />
      </div>
    </S.Toggler>
  )
}

const Filter = () => {
  const implants = useProduct()
  const categories = useCategory()

  // Filter implants
  const [items, setItems] = useState(implants.node.products)
  const setFilteredItems = (category: string) => {
    setItems(
      implants.node.products.filter(item => {
        if (item.categories[0].title.includes(category)) {
          return item
        }
        if (item.categories[1] && item.categories[1].title.includes(category)) {
          return item
        }
      })
    )
  }

  // Reset / Show all
  const resetFilteredItems = () => {
    setItems(implants.node.products)
  }

  // Toggle Grid/List views
  const [gridView, setGridView] = useState(true)
  return (
    <S.Filter id="product-grid">
      <S.Navigation href="#product-grid">
        {/* <Box width={[0, 0, theme.logoWidth]} /> */}
        <div className="filter__inner">
          <div
            className="filter__btn filter__btn--all"
            onClick={resetFilteredItems}
          >
            All
          </div>
          {categories.map(({ node: cat }, idx) => (
            <Text
              className="filter__btn"
              onClick={() => setFilteredItems(cat.title)}
              key={idx}
            >
              {cat.title}
            </Text>
          ))}
        </div>

        {/* <Toggler gridView={gridView} setGridView={setGridView} /> */}
      </S.Navigation>

      <div className="view">
        <List items={items} />
      </div>

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
