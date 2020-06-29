// ProductPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Section from '../Section'
import BlockContent from '../BlockContent'

import useRethinkPage from '../../hooks/useRethinkPage'

// Elements
import { AnimatedBox, Box, Heading } from '../../elements'
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

const ProductPage: React.FC<ProductContextShape> = ({ pageContext }) => {
  const implant = pageContext.page
  const prev = pageContext.prev
  const next = pageContext.next
  // console.log('Rethink Page')
  // console.log(page)
  const pageTitle = {
    altText: implant.name,
    // image: page.pageTitle.image.asset.fluid,
    message: implant.name,
    title: implant.name
  }
  return (
    <S.ProductPage>
      <PageTitle {...pageTitle} />
      <Section bg="quinary">
        {implant._rawExcerpt && (
          <BlockContent blocks={implant._rawExcerpt || []} />
        )}

        {implant._rawDescription && (
          <BlockContent blocks={implant._rawDescription || []} />
        )}

        {implant._rawFeatures && (
          <BlockContent blocks={implant._rawFeatures || []} />
        )}

        {implant._rawAdditionalInfo && (
          <BlockContent blocks={implant._rawAdditionalInfo || []} />
        )}

        <Box>
          {next && (
            <Link to={`implants/${next.slug.current}`}>Next: {next.name}</Link>
          )}
          <br />
          {prev && (
            <Link to={`implants/${prev.slug.current}`}>Prev: {prev.name}</Link>
          )}
        </Box>
      </Section>

      {/* <Billboard {...billboardProps} /> */}
      <Prefooter />
    </S.ProductPage>
  )
}

export default ProductPage
