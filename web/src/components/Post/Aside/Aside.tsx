// Aside:

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Components
import Icon from '../../Icons'

// Hooks
import usePost from '@/hooks/usePost'

// Elements
import { Flex, Box, Heading, Text } from '@/components/elements'

import * as S from './styles.scss'

const Aside = () => {
  const posts = usePost()

  return (
    <S.Aside as="aside" width={[1, 3 / 10]}>
      <div className="sticky">
        <Flex className="recent-posts">
          {posts.slice(5, 8).map(({ node: post }, idx) => (
            <S.Post to={`/news/${post.slug.current}`} key={idx}>
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

              <Box width={1} className="post__content">
                <Heading as="h4">{post.title}</Heading>
              </Box>

              <Text as="p" className="post__meta">
                {post.categories[0].title} — {post.publishedAt}
                <Icon name="nextArrow" />
              </Text>
            </S.Post>
          ))}
        </Flex>
      </div>
    </S.Aside>
  )
}

export default Aside
