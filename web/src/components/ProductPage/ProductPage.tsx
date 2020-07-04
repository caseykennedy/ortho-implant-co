// ProductPage:

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

// Libraries
import Img from 'gatsby-image/withIEPolyfill'
import { Grid, Cell } from 'styled-css-grid'

// Components
import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import BlockContent from '../BlockContent'

// Sections
import Gallery from './Sections/Gallery'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '../../elements'
import Divider from '../../elements/Divider'

// Styles + theme
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
  invert: false
  // src: 'operating-room.jpg',
  // altText: 'Doctors in the operating room.'
}

const ProductPage: React.FC<ProductContextShape> = ({ pageContext }) => {
  // Page context
  const implant = pageContext.page
  const prev = pageContext.prev
  const next = pageContext.next

  // Page title props
  const pageTitle = {
    altText: implant.name,
    // image: page.pageTitle.image.asset.fluid,
    message: implant.name,
    title: implant.categories[0].title
  }
  return (
    <S.ProductPage>
      <PageTitle {...pageTitle} />
      <Flex
        bg="secondary"
        width={1}
        style={{ borderBottom: '2px solid black' }}
      >
        <Gallery implant={implant} />
      </Flex>
      <Flex
        bg="quinary"
        py={theme.gutter.axis}
        pr={theme.gutter.axis}
        style={{ overflow: 'hidden' }}
      >
        <Box p={3} style={{ minWidth: theme.logoWidth }} />
        <Box width={1}>
          {/* <Grid columns={2} gap="1rem">
            {implant.gallery &&
              implant.gallery.map((img, idx) => (
                <Cell key={idx}>
                  <Img
                    fluid={img.asset.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={implant.shortName}
                  />
                </Cell>
              ))}
          </Grid> */}

          {implant._rawDescription && (
            <BlockContent blocks={implant._rawDescription || []} />
          )}

          <Heading as="h4" mt={7}>
            Features
          </Heading>

          {implant._rawFeatures && (
            <BlockContent blocks={implant._rawFeatures || []} />
          )}

          <Heading as="h4" mt={7}>
            Additional Info
          </Heading>

          {implant._rawAdditionalInfo && (
            <BlockContent blocks={implant._rawAdditionalInfo || []} />
          )}

          <Box>
            {next && (
              <Link to={`implants/${next.slug.current}`}>
                Next: {next.name}
              </Link>
            )}
            <br />
            {prev && (
              <Link to={`implants/${prev.slug.current}`}>
                Prev: {prev.name}
              </Link>
            )}
          </Box>
        </Box>
      </Flex>

      {/* <Billboard {...billboardProps} /> */}
      <Prefooter />
    </S.ProductPage>
  )
}

export default ProductPage
