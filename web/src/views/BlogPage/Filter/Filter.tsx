// Filter Section:

// ___________________________________________________________________

import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Libraries

// Hooks
import usePost from '../../../hooks/usePost'

// Elements
import { Box, Flex, Heading } from '../../../elements'

// Components
import Posts from '../Posts'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Filter = () => {
  const posts = usePost()
  const categories = [{ title: 'Blog' }, { title: 'News' }]

  // Filter posts
  const [items, setItems] = useState(posts)
  const setFilteredItems = (category: string) => {
    setItems(
      posts.filter(item => {
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
    setItems(posts)
  }

  return (
    <S.Filter id="product-grid">
      <AnchorLink href="#product-grid" className="anchor-link">
        <div className="filter__inner">
          {categories.map((cat, idx) => (
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
      </AnchorLink>

      <Box>
        <Posts items={items} />
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
