// Post:

// ___________________________________________________________________

import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

// Components
import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Section from '../Section'
import BlockContent from '../BlockContent'

import Aside from './Aside'
import PrevNext from './PrevNext'
import SocialShare from './SocialShare'

// Elements
import { Box, Flex, Heading, Text } from '../../elements'

// Theme
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

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

  // console.log(pageContext)

  const pageTitle = {
    // altText: page.title,
    // image: page.pageTitle.image.asset.gatsbyImageData,
    message: page.title,
    title: page.publishedAt
  }
  return (
    <S.Post>
      <PageTitle {...pageTitle} />

      <Box width={1}>
        {page.mainImage && (
          <GatsbyImage
            image={page.mainImage.asset.gatsbyImageData}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={page.title}
            className="article__img"
          />
        )}
      </Box>

      <S.Article width={[1, 7 / 10]}>
        <Section bg="background" pb={4} pr={[5, 9]}>
          {/* <Heading as="h3" color="" className="t--uppercase">{page.title}</Heading> */}
          <Box className="article__lead">
            {page._rawExcerpt && (
              <BlockContent blocks={page._rawExcerpt || []} />
            )}
          </Box>
          <Box className="article__meta">
            <Box width={1 / 2} className="author">
              {page.authors && <Author author={page.authors} />}
            </Box>
            <Flex width={1 / 2} className="social-share">
              <p>Share:</p>
              <SocialShare name="facebook" slug={page.slug.current} />
              <SocialShare name="linkedIn" slug={page.slug.current} />
              <SocialShare name="twitter" slug={page.slug.current} />
            </Flex>
          </Box>
        </Section>

        <Section pr={[5, 9]} border={true}>
          <Box>
            {page._rawBody && <BlockContent blocks={page._rawBody || []} />}
          </Box>
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
  bg: theme.colors.black,
  btnText: 'See our implants',
  to: '/about',
  color: theme.colors.white,
  message: 'We make orthopaedic implants<br />that are good for all.',
  title: 'Mantra'
  // src: 'operating-room.jpg',
  // altText: 'Doctors in the operating room.'
}
