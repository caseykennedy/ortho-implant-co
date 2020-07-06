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
import PrevNext from './Sections/PrevNext'

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
      <Flex bg="background" flexWrap="wrap" style={{ overflow: 'hidden' }}>
        <Flex width={1} flexWrap="wrap">
          <Box p={theme.gutter.axis} width={[1, 1 / 2]}>
            <Heading as="h3" color="tertiary" className="t--uppercase">
              {implant.shortName}
            </Heading>

            {implant._rawDescription && (
              <BlockContent blocks={implant._rawDescription || []} />
            )}
            <Box>
              <Heading as="h4" mt={7}>
                Additional Info
              </Heading>

              {implant._rawAdditionalInfo && (
                <BlockContent blocks={implant._rawAdditionalInfo || []} />
              )}
            </Box>
          </Box>

          <Box
            bg="secondary"
            color="white"
            p={theme.gutter.axis}
            width={[1, 1 / 2]}
          >
            <Heading as="h4" color="primary">
              Features
            </Heading>

            {implant._rawFeatures && (
              <BlockContent blocks={implant._rawFeatures || []} />
            )}
          </Box>
        </Flex>
      </Flex>

      <PrevNext pageContext={pageContext} />

      <Billboard {...billboardProps} />
      {/* <Prefooter /> */}
    </S.ProductPage>
  )
}

export default ProductPage
