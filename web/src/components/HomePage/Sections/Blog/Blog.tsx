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
    freeMode: true,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        grabCursor: true
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
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
  console.log('-----_- Posts -_-----')
  console.log(posts)

  return (
    <Section bg="quinary" color="text" border={true}>
      <Heading as="h4">What's Happening</Heading>

      <S.CardHolder width={1}>
        <Swipe>
          {posts.map(({ node: post }, idx) => (
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
                    <Heading as="h3" className="t--uppercase">
                      {post.title}
                    </Heading>
                    {post._rawExcerpt && (
                      <BlockContent blocks={post._rawExcerpt || []} />
                    )}
                  </Box>
                  <Text as="p" className="card__meta  t--uppercase">
                    {post.categories[0].title} — {post.publishedAt}
                    <Icon name="nextArrow" />
                  </Text>
                </Flex>
              </S.Card>
            </Link>
          ))}
        </Swipe>

        {/* <S.CardColumn width={[1, '47%', '30%']}>
          {posts.slice(4, 5).map(({ node: post }, idx) => (
            <Link to={`/blog/${post.slug.current}`} key={idx}>
              <S.Card bg={theme.colors.secondary} color="white" key={idx}>
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
                    <Heading as="h3" className="t--uppercase">
                      {post.title}
                    </Heading>
                    {post._rawExcerpt && (
                      <BlockContent blocks={post._rawExcerpt || []} />
                    )}
                  </Box>
                  <Text as="p" className="card__meta  t--uppercase">
                    {post.categories[0].title} — {post.publishedAt}
                    <Icon name="nextArrow" />
                  </Text>
                </Flex>
              </S.Card>
            </Link>
          ))}
        </S.CardColumn>

        <S.CardColumn width={[1, 1, '30%']}>
          <S.Card width={[1, 1 / 2, 1]} bg="tertiary">
            <Flex className="card__content">
              <Box>
                <Heading as="h5">value</Heading>
                <Text as="p" color="white">
                  We create better value for the implants you already know and
                  use on an everyday basis.
                </Text>
              </Box>
              <Text as="p" className="card__meta">
                BLOG — Apr 19, 2020
                <Icon name="nextArrow" />
              </Text>
            </Flex>
          </S.Card>

          <S.Card width={[1, 1 / 2, 1]} border={true}>
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
          </S.Card>
        </S.CardColumn> */}
      </S.CardHolder>
    </Section>
  )
}

export default Blog
