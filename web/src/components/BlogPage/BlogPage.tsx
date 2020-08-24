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

const BlogPage = () => {
  const posts = usePost()
  const newsPosts = posts.filter(
    ({ node: post }) => post.categories[0].title === 'News'
  )

  const blogPosts = posts.filter(
    ({ node: post }) => 'Blog' === post.categories[0].title
  )

  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.fluid,
    message: 'News | Blog',
    title: 'OIC'
  }
  return (
    <>
      <S.BlogPage>
        <PageTitle {...pageTitle} />

        <Flex width={[1, 1 / 2, '65%']} flexWrap="wrap">
          {newsPosts.map(({ node: post }, idx) => (
            <S.Card key={idx} width={1 / 2} border={true}>
              <Link to={`/blog/${post.slug.current}`}>
                <Box>
                  <Box className="card__img">
                    {post.mainImage && (
                      <Img
                        fluid={post.mainImage.asset.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt={post.title}
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
                  </Flex>
                </Box>
                <Text as="p" className="card__meta  t--uppercase">
                  <Text as="span">{post.publishedAt}</Text>
                  <Icon name="nextArrow" />
                </Text>
              </Link>
            </S.Card>
          ))}
        </Flex>

        <S.CardColumn width={[1, 1 / 2, '35%']}>
          {blogPosts.map(({ node: post }, idx) => (
            <S.Card width={[1, 1, 1]} className="card" border={true} key={idx}>
              <Link
                to={`/blog/${post.slug.current}`}
                key={idx}
                className="card--highlight"
              >
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
              </Link>
            </S.Card>
          ))}
        </S.CardColumn>

        {/* <Prefooter /> */}
      </S.BlogPage>
      <Billboard {...billboardProps} />
    </>
  )
}

export default BlogPage

// ___________________________________________________________________

const billboardProps = {
  bg: theme.colors.black,
  color: theme.colors.white,
  message: 'We make orthopaedic implants<br />that are good for all',
  title: 'mantra',
  invert: false,
  btnText: 'See our implants',
  to: '/implants'
  // src: 'im-nail.jpg',
  // altText: 'Doctors in the operating room.'
}
