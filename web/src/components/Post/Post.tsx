// Post:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Components
import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Section from '../Section'
import BlockContent from '../BlockContent'
import Icon from '../Icons'

import Aside from './Aside'
import PrevNext from './PrevNext'
import SocialShare from './SocialShare'

// Hooks
import useRethinkPage from '../../hooks/useRethinkPage'

// Elements
import { Box, Flex, Heading, Text } from '../../elements'
import Divider from '../../elements/Divider'

// Theme
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const Author: React.FC<{ author: PostAuthor }> = ({ author }) => {
  return (
    <S.Author>
      <Img
        fluid={author.headshot.asset.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={author.name}
        className="author__img"
      />
      <Box className="author__name">
        {author.name}
        <br />
        <span>{author.jobTitle}</span>
      </Box>
    </S.Author>
  )
}

const Post: React.FC<PostContextShape> = ({ pageContext }) => {
  const data = pageContext.page

  console.log(pageContext)

  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.fluid,
    message: data.title,
    title: data.publishedAt
  }
  return (
    <S.Post>
      <PageTitle {...pageTitle} />

      <S.Article width={[1, 7 / 10]}>
        {data.mainImage && (
          <Img
            fluid={data.mainImage.asset.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.title}
            className="article__img"
          />
        )}

        <Section>
          {/* <Heading as="h3" color="" className="t--uppercase">{data.title}</Heading> */}
          <Box className="article__lead">
            {data._rawExcerpt && (
              <BlockContent blocks={data._rawExcerpt || []} />
            )}
          </Box>
        </Section>

        <Box className="article__meta">
          <Box width={1 / 2} className="author">
            <Author author={data.authors} />
          </Box>
          <Flex width={1 / 2} className="social-share">
            <p>Share:</p>
            <SocialShare name="facebook" slug={data.slug.current} />
            <SocialShare name="linkedIn" slug={data.slug.current} />
            <SocialShare name="twitter" slug={data.slug.current} />
          </Flex>
        </Box>

        <Section bg="quinary">
          {data._rawBody && <BlockContent blocks={data._rawBody || []} />}
        </Section>
      </S.Article>

      <Aside />

      <PrevNext pageContext={pageContext} />

      <Billboard {...billboardProps} />
    </S.Post>
  )
}

export default Post

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
