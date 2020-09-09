// Posts

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Libraries
import { useTransition } from 'react-spring'
import { Grid, Cell } from 'styled-css-grid'

// Elements
import { Box, Flex, Heading, Text, AnimatedFlex } from '../../../elements'

// Components
import Icon from '../../Icons'
import ImgMatch from '../../ImgMatch'
import BlockContent from '../../BlockContent'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Post: React.FC<{ item: PostEdges; transition: any }> = ({
  item,
  transition
}) => {
  const slug = item.node.slug.current
  const categorySlug = () => {
    const toLowerCase = item.node.categories[0].title.toLowerCase()
    const dashCat = toLowerCase.replace(/\s/g, '-')
    return dashCat
  }

  const post = item.node
  return (
    <Cell>
      <S.Item>
        <Box>
          <Heading as="h5" mb={7}>
            {post.categories[0].title}
          </Heading>
          <Heading as="h5">{post.title}</Heading>
          {post._rawExcerpt && <BlockContent blocks={post._rawExcerpt || []} />}
        </Box>
      </S.Item>
      <Text as="p" className="card__meta  t--uppercase">
        <Text as="span">{post.publishedAt}</Text>
      </Text>
    </Cell>
  )
}

const Posts: React.FC<{ items: PostEdges[] }> = ({ items }) => {
  // Card enter/exit trail animation
  const itemTransitions = useTransition(
    items ? items : [],
    item => item.node.title,
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
    <S.Posts width={1}>
      <Grid columns={`repeat(auto-fit, minmax(400px, 1fr))`} gap="2rem">
        {itemTransitions.map(({ item, props, key }) => (
          <Post item={item} transition={props} key={key} />
        ))}
      </Grid>
    </S.Posts>
  )
}

export default Posts
