// Blog Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Libraries
import Swiper from 'react-id-swiper'

// Components
import BlockContent from '../../../BlockContent'
import Section from '../../../Section'
import ImgMatch from '../../../ImgMatch'
import Icon from '../../../Icons'

// Hooks
import usePost from '../../../../hooks/usePost'

// Elements
import Button from '../../../../elements/Button'
import { Box, Flex, Heading, Text } from '../../../../elements'

// Theme
import theme from '../../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Swipe: React.FC = ({ children }) => {
  const params = {
    // autoplay: {
    //   delay: 25000,
    //   disableOnInteraction: false
    // },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },
    freeMode: false,
    slidesPerView: 2,
    spaceBetween: -2,
    // centeredSlides: true,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: -2
      },
      768: {
        slidesPerView: 1,
        spaceBetween: -2,
        grabCursor: true
      },
      640: {
        slidesPerView: 1,
        spaceBetween: -2,
        grabCursor: true
      },
      320: {
        slidesPerView: 1,
        spaceBetween: -2,
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

  const newsPosts = posts.filter(
    ({ node: post }) => 'News' === post.categories[0].title
  )
  const blogPosts = posts.filter(
    ({ node: post }) => 'Blog' === post.categories[0].title
  )

  return (
    <Box bg="white" color="text">
      {/* <Box p={theme.gutter.axis}>
        <Heading as="h4">What's Happening</Heading>
      </Box> */}
      <S.CardHolder width={1}>
        <Box width={[1, 1 / 2, '65%']}>
          <Swipe>
            {newsPosts.map(({ node: post }, idx) => (
              <Link
                to={`/blog/${post.slug.current}`}
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
        </Box>

        {/* <S.CardColumn width={[1, '47%', '30%']}>
          {posts.slice(4, 5).map(({ node: post }, idx) => (
            <Link to={`/blog/${post.slug.current}`} key={idx}>
              <S.Card bg={theme.colors.background}>
                <Box className="card__image">
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
                    <Text as="p" className="lead">
                      {post.title}
                    </Text>
                    {post._rawExcerpt && (
                      <BlockContent blocks={post._rawExcerpt || []} />
                    )}
                  </Box>
                  <Text as="p" className="card__meta  t--uppercase">
                    {post.categories[0].title} —{' '}
                    <Text as="span" color="tertiary"></Text>
                    <Icon name="nextArrow" />
                  </Text>
                </Flex>
              </S.Card>
            </Link>
          ))}
        </S.CardColumn> */}

        <S.CardColumn width={[1, 1 / 2, '35%']}>
          {blogPosts.slice(4, 6).map(({ node: post }, idx) => (
            <Link
              to={`/blog/${post.slug.current}`}
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

          {/* <S.Card width={[1, 1 / 2, 1]} border={true}>
            <Flex className="card__content">
              <Box>
                <Heading as="h5">value</Heading>
                <Text as="p">
                  We create better value for the implants you already know and
                  use on an everyday basis.
                </Text>
              </Box>
              <Text as="p" className="card__meta">
                BLOG — Apr 19, 2020
                <Icon name="nextArrow" />
              </Text>
            </Flex>
          </S.Card> */}
        </S.CardColumn>
      </S.CardHolder>
    </Box>
  )
}

export default Blog
