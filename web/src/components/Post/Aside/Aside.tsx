// Aside:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

// Components
import { Card } from '../../../elements/Card'
import Icon from '../../Icons'

// Hooks
import usePost from '../../../hooks/usePost'

// Elements
import { Flex, Box, Heading, Text } from '../../../elements'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Aside = () => {
  const posts = usePost()

  return (
    <S.Aside as="aside" width={[1, 3 / 10]}>
      <div className="sticky">
        <Flex className="recent-posts">
          {/* <Heading as="h4" color="tertiary" className="t--uppercase">
        Recent Posts
      </Heading> */}
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
