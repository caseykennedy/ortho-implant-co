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
import HeadingStroked from '../../elements/HeadingStroked'

// Styles + theme
import * as S from './styles.scss'
import theme from '../../../config/theme'
import Prefooter from '../Footer/Prefooter'

// ___________________________________________________________________

const billboardProps = {
  bg: theme.colors.primary,
  btnText: 'See our implants',
  color: theme.colors.white,
  message: 'we make orthopaedic implants<br />that are good for all.',
  title: 'Mantra',
  invert: false,
  src: 'operating-room.jpg',
  altText: 'Doctors in the operating room.'
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
        <Flex width={1} flexWrap="wrap" flexDirection="row">
          <Box width={[1, 1 / 2]}>
            <Box p={theme.gutter.axis}>
              <Heading as="h3" color="tertiary" className="t--uppercase">
                {implant.shortName}
              </Heading>

              {implant._rawDescription && (
                <BlockContent blocks={implant._rawDescription || []} />
              )}
              {/* <HeadingStroked
              as="h3"
              strokeColor={theme.colors.tertiary}
              strokeWidth="1px"
              className="t--uppercase"
              fontSize={6}
            >
              {implant.shortName}
            </HeadingStroked> */}
            </Box>

            <S.AdditionalInfo>
              <Heading as="h4">
                Additional Info
              </Heading>

              {implant._rawAdditionalInfo && (
                <BlockContent blocks={implant._rawAdditionalInfo || []} />
              )}
            </S.AdditionalInfo>
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
