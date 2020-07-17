// Product Detail Page:

// ___________________________________________________________________

import React from 'react'

// Components
import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import BlockContent from '../BlockContent'

// Sections
import Gallery from './Gallery'
import PrevNext from './PrevNext'
import Video from './Video'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '../../elements'

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

const ProductDetail: React.FC<ProductContextShape> = ({ pageContext }) => {
  // Page context
  const product = pageContext.page

  // Page title props
  const pageTitle = {
    altText: product.name,
    // image: page.pageTitle.image.asset.fluid,
    message: product.name,
    title: product.categories[0].title
  }
  return (
    <S.ProductDetail>
      <PageTitle {...pageTitle} />

      {/* <Box width={[1]}>
        <S.Resources>
          <Heading as="h4">Resources</Heading>

          {product._rawAdditionalInfo && (
            <BlockContent blocks={product._rawAdditionalInfo || []} />
          )}
        </S.Resources>
      </Box> */}

      <S.Details>
        <Box width={[1, 1 / 2]}>
          <Gallery product={product} />
        </Box>
        <Box width={[1, 1 / 2]} pr={10}>
          {product._rawDescription && (
            <BlockContent blocks={product._rawDescription || []} />
          )}
        </Box>
      </S.Details>

      <Flex
        width={[1]}
        bg="background"
        flexWrap="wrap"
        style={{ overflow: 'hidden', borderTop: theme.border }}
      >
        <Flex width={1} flexWrap="wrap" flexDirection="row">
          <Box bg="" p={theme.gutter.axis} width={[1]}>
            <Heading as="h4">Features</Heading>

            {product._rawFeatures && (
              <BlockContent blocks={product._rawFeatures || []} />
            )}
          </Box>
        </Flex>
      </Flex>

      {product.videoURL && <Video src={product.videoURL} />}

      <PrevNext pageContext={pageContext} />

      {/* <Billboard {...billboardProps} /> */}
      <Prefooter />
    </S.ProductDetail>
  )
}

export default ProductDetail
