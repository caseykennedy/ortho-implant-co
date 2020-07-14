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
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    freeMode: true,
    slidesPerView: 2,
    spaceBetween: 70,
    // centeredSlides: true,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: -2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
        grabCursor: true
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 40,
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

  // console.log('-----_- newsPosts -_-----')
  // console.log(newsPosts)

  return (
    <Section bg="quinary" color="text" border={true}>
      <Heading as="h4">What's Happening</Heading>

      <S.CardHolder width={1}>
        <Box width={[1, '47%', '65%']}>
          <Swipe>
            {posts.slice(4, 9).map(({ node: post }, idx) => (
              <Link to={`/blog/${post.slug.current}`} key={idx}>
                <S.Card bg={theme.colors.background} border={true}>
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
                      <Heading as="h5">
                        {post.categories[0].title}
                      </Heading>
                      <Heading as="h3">{post.title}</Heading>
                      {post._rawExcerpt && (
                        <BlockContent blocks={post._rawExcerpt || []} />
                      )}
                    </Box>
                    <Text as="p" className="card__meta  t--uppercase">
                      <Text as="span" color="tertiary">
                        {post.publishedAt}
                      </Text>
                      <Icon name="nextArrow" />
                    </Text>
                  </Flex>
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

        <S.CardColumn width={[1, 1, '30%']}>
          {newsPosts.map(({ node: post }, idx) => (
            <Link to={`/blog/${post.slug.current}`} key={idx} className="card--highlight">
              <S.Card width={[1, 1 / 2, 1]} border={true} mb={'-2px'}>
                <Flex className="card__content">
                  <Box>
                    <Heading as="h5">{post.categories[0].title}</Heading>
                    {/* <Heading as="h3">{post.title}</Heading> */}
                    {post._rawExcerpt && (
                      <BlockContent blocks={post._rawExcerpt || []} />
                    )}
                  </Box>
                  <Text as="p" className="card__meta  t--uppercase">
                    <Text as="span" color="tertiary">
                      {post.publishedAt}
                    </Text>
                    <Icon name="nextArrow" />
                  </Text>
                </Flex>
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
    </Section>
  )
}

export default Blog
