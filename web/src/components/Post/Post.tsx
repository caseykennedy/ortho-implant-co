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
import Prefooter from '../Footer/Prefooter'

import Aside from './Aside'

// Hooks
import useRethinkPage from '../../hooks/useRethinkPage'

// Elements
import { AnimatedBox, Box, Heading, Text } from '../../elements'
import Divider from '../../elements/Divider'

import * as S from './styles.scss'
import theme from '../../../config/theme'

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

const Post: React.FC<PostContextShape> = ({ pageContext }) => {
  const data = pageContext.page

  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.fluid,
    message: data.title,
    title: data.publishedAt
  }
  return (
    <S.Post>
      <PageTitle {...pageTitle} />

      <Aside data={data} />

      <S.Article width={[1, 7 / 10]}>
        <Img
          fluid={data.mainImage.asset.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={data.title}
          className="article__img"
        />
        
        <Section>
          {/* <Heading as="h3" color="" className="t--uppercase">{data.title}</Heading> */}
          {data._rawExcerpt && <BlockContent blocks={data._rawExcerpt || []} />}

          {data._rawBody && <BlockContent blocks={data._rawBody || []} />}
        </Section>
      </S.Article>

      <Billboard {...billboardProps} />
    </S.Post>
  )
}

export default Post
