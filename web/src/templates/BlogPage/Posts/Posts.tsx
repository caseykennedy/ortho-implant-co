// Posts

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Libraries
import { useTransition } from 'react-spring'
import { Grid, Cell } from 'styled-css-grid'

// Elements
import { Box, Heading, Text } from '../../../elements'

// Components
import BlockContent from '../../../components/BlockContent'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Post: React.FC<{ item: PostEdges; transition: any }> = ({
  item,
  transition
}) => {
  const post = item.node
  return (
    <Cell>
      <S.Post>
        <Link to={`/news/${post.slug.current}`}>
          <div>
          <Heading as="h5" mb={7}>
              <Box
                as="mark"
                bg={post.categories[0].title !== 'News' ? 'quinary' : 'primary'}
              >
                {post.categories[0].title}
              </Box>
            </Heading>
            <Box className="post__img">
              {post.mainImage && (
                <Img
                  fluid={post.mainImage.asset.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.title}
                />
              )}
            </Box>

            <Heading as="h4" fontSize={[2]}>
              {post.title}
            </Heading>
          </div>

          <div>
            <Text as="p" className="card__meta  t--uppercase">
              <Text as="span">{post.publishedAt}</Text>
            </Text>

            {post._rawExcerpt && (
              <BlockContent blocks={post._rawExcerpt || []} />
            )}
          </div>
        </Link>
      </S.Post>
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
      <Grid
        columns={`repeat(auto-fit, minmax(320px, 1fr))`}
        gap={theme.space[5]}
      >
        {itemTransitions.map(({ item, props, key }) => (
          <Post item={item} transition={props} key={key} />
        ))}
      </Grid>
    </S.Posts>
  )
}

export default Posts
