// BlogPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Components
import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import BlockContent from '../BlockContent'
import Section from '../Section'
import Filter from './Filter'

// Hooks
import usePost from '../../hooks/usePost'
import useNewsPage from '../../hooks/useNewsPage'

// Elements
import { Flex, Box, Heading, Text } from '../../elements'
import Button from '../../elements/Button'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const Featured: React.FC<{ post: PostQuery }> = ({ post }) => {
  return (
    <Section border={true}>
      <S.Featured>
        <Box width={[1, 1 / 2]} mb={7}>
          {post.mainImage && (
            <Link to={`/news/${post.slug.current}`}>
              <Img
                fluid={post.mainImage.asset.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={post.title}
              />
            </Link>
          )}
        </Box>
        <Box width={[1, 1 / 2]}>
          <Flex flexDirection="column" pr={[0, 8]}>
            <Box>
              <Heading as="h5">
                <mark>Featured {post.categories[0].title}</mark>
              </Heading>
              <Heading as="h3">{post.title}</Heading>
              <Box className="card__meta  t--uppercase">
                <Text as="span">{post.publishedAt}</Text>
              </Box>
              {post._rawExcerpt && (
                <BlockContent blocks={post._rawExcerpt || []} />
              )}
            </Box>

            <Box mt={7}>
              <Button to={`/news/${post.slug.current}`} invert={true}>
                Full article
              </Button>
            </Box>
          </Flex>
        </Box>
      </S.Featured>
    </Section>
  )
}

const BlogPage = () => {
  const posts = usePost()
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

  const page = useNewsPage()
  // Page title
  const pageTitle = {
    altText: page.pageTitle.title,
    image: page.pageTitle.image.asset.fluid,
    message: page.pageTitle.message,
    title: page.pageTitle.title
  }
  return (
    <>
      <PageTitle {...pageTitle} />
      <S.BlogPage>
        {newsPosts.slice(0, 1).map(({ node: post }, idx) => (
          <Featured post={post} key={idx} />
        ))}
        {blogPosts.slice(0, 1).map(({ node: post }, idx) => (
          <Featured post={post} key={idx} />
        ))}
      </S.BlogPage>
      <Filter />
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
