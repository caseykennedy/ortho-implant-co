// BlogPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Libraries
import Swiper from 'react-id-swiper'
import { Grid, Cell } from 'styled-css-grid'

// Components
import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Section from '../Section'
import BlockContent from '../BlockContent'
import Icon from '../Icons'

import Aside from '../Post/Aside'

// Hooks
import usePost from '../../hooks/usePost'
import useRethinkPage from '../../hooks/useRethinkPage'

// Elements
import { Flex, Box, Heading, Text } from '../../elements'
import Divider from '../../elements/Divider'

import * as S from './styles.scss'
import theme from '../../../config/theme'
import Prefooter from '../Footer/Prefooter'

// ___________________________________________________________________

const billboardProps = {
  bg: theme.colors.primary,
  btnText: 'See our implants',
  color: theme.colors.text,
  message: 'we make orthopaedic implants<br />that are good for all.',
  title: 'Mantra',
  invert: true
  // src: 'operating-room.jpg',
  // altText: 'Doctors in the operating room.'
}

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
        spaceBetween: -2
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

const BlogPage = () => {
  const posts = usePost()
  const newsPosts = posts.filter(
    ({ node: post }) => 'News' === post.categories[0].title
  )

  const blogPosts = posts.filter(
    ({ node: post }) => 'Blog' === post.categories[0].title
  )

  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.fluid,
    message: 'Blog',
    title: 'OIC'
  }
  return (
    <S.BlogPage>
      <PageTitle {...pageTitle} />

      <Flex width={1}>
        <Flex flexWrap="wrap" mb={'-2px'}>
            {posts.map(({ node: post }, idx) => (
              <S.Card key={idx} width={1/3}>
                <Link to={`/blog/${post.slug.current}`}>
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
                      <Heading as="h5">{post.categories[0].title}</Heading>
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
                </Link>
              </S.Card>
            ))}
        </Flex>
      </Flex>

      <Prefooter />
    </S.BlogPage>
  )
}

export default BlogPage
