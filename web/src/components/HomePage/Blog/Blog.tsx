// Blog Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Libraries
import Swiper from 'react-id-swiper'

// Components
import BlockContent from '../../BlockContent'
import Icon from '../../Icons'
import Section from '../../Section'

// Hooks
import usePost from '../../../hooks/usePost'

// Elements
import { Box, Flex, Heading, Text } from '../../../elements'

// Theme
import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Swipe: React.FC = ({ children }) => {
  const params = {
    freeMode: false,
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true
      }
    }
  }
  return <Swiper {...params}>{children}</Swiper>
}

const Blog = () => {
  const posts = usePost()
  // console.log('-----_- Posts -_-----')
  // console.log(posts)

  const newsPosts = posts.filter(({ node: post }) => {
    if (post.categories[0].title.includes('News')) {
      return post
    }
    if (post.categories[0] && post.categories[0].title.includes('Press')) {
      return post
    }
  })
  const blogPosts = posts.filter(({ node: post }) => {
    if (post.categories[0].title.includes('Blog')) {
      return post
    }
  })

  return (
    <>
      <S.Blog bg="white" color="text">
        <Section bg="quinary" border={true}>
          <Heading as="h4" mb={0}>
            <mark>In the news</mark>
          </Heading>
        </Section>
        <S.CardHolder width={1}>
          <Flex width={[1, 1 / 2, '65%']}>
            <Swipe>
              {newsPosts.map(({ node: post }, idx) => (
                <Link
                  to={`/news/${post.slug.current}`}
                  key={idx}
                  className="card--highlight"
                >
                  <S.Card width={[1, 1, 1]} border={true} className="card">
                    <Box className="card__img">
                      {post.mainImage && (
                        <Img
                          fluid={post.mainImage.asset.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                          alt={post.title}
                          className="article__img"
                        />
                      )}
                    </Box>

                    <Flex className="card__content">
                      <Box>
                        <Heading as="h5">{post.categories[0].title}</Heading>
                        <Heading as="h3">{post.title}</Heading>
                        {post._rawExcerpt && (
                          <BlockContent blocks={post._rawExcerpt || []} />
                        )}
                        <br />
                      </Box>
                    </Flex>

                    <Text as="p" className="card__meta  t--uppercase">
                      <Text as="span">{post.publishedAt}</Text>
                      read more
                      <Icon name="nextArrow" />
                    </Text>
                  </S.Card>
                </Link>
              ))}
            </Swipe>
          </Flex>

          <S.CardColumn width={[1, 1 / 2, '35%']}>
            {blogPosts.slice(2, 4).map(({ node: post }, idx) => (
              <Link
                to={`/news/${post.slug.current}`}
                key={idx}
                className="card--highlight"
              >
                <S.Card width={[1, 1, 1]} border={true} className="card">
                  <Flex className="card__content">
                    <Box>
                      <Heading as="h5" mb={7}>
                        {post.categories[0].title}
                      </Heading>
                      <Heading as="h3">{post.title}</Heading>
                      {post._rawExcerpt && (
                        <BlockContent blocks={post._rawExcerpt || []} />
                      )}
                    </Box>
                  </Flex>
                  <Text as="p" className="card__meta  t--uppercase">
                    <Text as="span">{post.publishedAt}</Text>
                    read more
                    <Icon name="nextArrow" />
                  </Text>
                </S.Card>
              </Link>
            ))}
          </S.CardColumn>
        </S.CardHolder>
      </S.Blog>
    </>
  )
}

export default Blog
