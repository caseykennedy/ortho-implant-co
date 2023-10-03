// Post:

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Components
import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Section from '../Section'
import BlockContent from '../BlockContent'
import PrevNext from './PrevNext'
import SocialShare from './SocialShare'

// Elements
import { Box, Flex } from '@/components/elements'

// Theme
import * as S from './styles.scss'
import theme from '../../../config/theme'

const Author: React.FC<{ author: PostAuthor }> = ({ author }) => {
  return (
    <S.Author>
      <GatsbyImage
        image={author.headshot.asset.gatsbyImageData}
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
  const page = pageContext.page

  const pageTitle = {
    // altText: page.title,
    // image: page.pageTitle.image.asset.gatsbyImageData,
    message: page.title,
    title: page.publishedAt,
  }
  return (
    <S.Post>
      <PageTitle {...pageTitle} />

      <Box className="post__img">
        {page.mainImage && (
          <GatsbyImage
            image={page.mainImage.asset.gatsbyImageData}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={page.title}
          />
        )}
      </Box>

      <S.Article>
        <Section>
          <div className="article__lead">{page._rawExcerpt && <BlockContent blocks={page._rawExcerpt || []} />}</div>
          <Box className="article__meta">
            <Box width={1 / 2} className="author">
              {page.authors && <Author author={page.authors} />}
            </Box>
            <Flex width={1 / 2} className="social-share">
              <div className="title">Share:</div>
              <SocialShare name="linkedIn" slug={page.slug.current} />
              <SocialShare name="facebook" slug={page.slug.current} />
              <SocialShare name="twitter" slug={page.slug.current} />
            </Flex>
          </Box>
        </Section>

        <Section border={true}>
          <Box maxWidth="800px">{page._rawBody && <BlockContent blocks={page._rawBody || []} />}</Box>
        </Section>
      </S.Article>

      <PrevNext pageContext={pageContext} />

      <Billboard {...billboardProps} />
    </S.Post>
  )
}

export default Post

const billboardProps = {
  bg: theme.colors.black,
  btnText: 'See our implants',
  to: '/about',
  color: theme.colors.white,
  message: 'We make orthopaedic implants<br />that are good for all.',
  title: 'Mantra',
  // src: 'operating-room.jpg',
  // altText: 'Doctors in the operating room.'
}
