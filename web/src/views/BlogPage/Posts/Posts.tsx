// Posts

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

// Libraries
import { useTransition } from 'react-spring'

// Elements
import { Box, Heading, Text } from '../../../elements'

// Components
import BlockContent from '../../../components/BlockContent'
import Icon from '../../../components/Icons'

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
    <S.Post>
      <Link to={`/news/${post.slug.current}`}>
        <div>
          <Heading as="h5" mb={4}>
            <Box
              as="mark"
              bg={post.categories[0].title !== 'News' ? 'quinary' : 'primary'}
            >
              {post.categories[0].title}
            </Box>
          </Heading>

          <Box className="post__img">
            {post.mainImage && (
              <GatsbyImage
                image={post.mainImage.asset.gatsbyImageData}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={post.title}
              />
            )}
          </Box>

          <Heading as="h4">{post.title}</Heading>
        </div>

        <div className="card__meta">
          <Text className="t--uppercase">
            <span>{post.publishedAt}</span>
          </Text>
          <Icon name="arrow" />
        </div>
      </Link>
    </S.Post>
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
    <S.Posts>
      <div className="grid">
        {itemTransitions.map(({ item, props, key }) => (
          <Post item={item} transition={props} key={key} />
        ))}
      </div>
    </S.Posts>
  )
}

export default Posts
