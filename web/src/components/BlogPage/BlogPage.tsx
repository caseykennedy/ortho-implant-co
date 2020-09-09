// BlogPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Components
import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import BlockContent from '../BlockContent'
import Icon from '../Icons'
import Section from '../Section'
import ImgMatch from '../ImgMatch'
import Aside from '../Post/Aside'
import Filter from './Filter'

// Hooks
import usePost from '../../hooks/usePost'

// Elements
import { Flex, Box, Heading, Text } from '../../elements'
import Button from '../../elements/Button'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const RecentNews: React.FC<{ post: PostQuery }> = ({ post }) => {
  return (
    <Section pt={8} pb={8} border={true}>
      <S.RecentNews>
        <Box width={[1, 1 / 2]} mb={7}>
          {post.mainImage && (
            <Img
              fluid={post.mainImage.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={post.title}
            />
          )}
        </Box>
        <Box width={[1, 1 / 2]}>
          <Flex flexDirection="column" pr={[0, 8]}>
            <Box>
              <Heading as="h5">
                <mark>Recent {post.categories[0].title}</mark>
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
      </S.RecentNews>
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

  const blogPosts = posts.filter(
    ({ node: post }) => 'Blog' === post.categories[0].title
  )

  const pageTitle = {
    // altText: page.pageTitle.message,
    // image: page.pageTitle.image.asset.fluid,
    message: 'News | Blog',
    title: 'OIC'
  }
  return (
    <>
      <S.BlogPage>
        <PageTitle {...pageTitle} />

        <Box width={1} bg="black" py={9} />

        {newsPosts.slice(0, 1).map(({ node: post }, idx) => (
          <RecentNews post={post} key={idx} />
        ))}

        {/* <S.CardColumn width={[1, 1 / 2, '35%']}>
          {blogPosts.slice(0, 1).map(({ node: post }, idx) => (
            <S.Card width={[1, 1, 1]} className="card" border={true} key={idx}>
              <Link
                to={`/news/${post.slug.current}`}
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
        </S.CardColumn> */}
      </S.BlogPage>
      <Filter />

      {/* <Section border={true}>
        <S.NewsBox width={1}>
          {blogPosts.map(({ node: post }, idx) => (
            <S.Card key={idx} width={1 / 3}>
              <Link to={`/news/${post.slug.current}`}>
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
        </S.NewsBox>
      </Section> */}
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
