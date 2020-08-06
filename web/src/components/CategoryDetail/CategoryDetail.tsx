// Category Detail Page:

// ___________________________________________________________________

import React from 'react'

// Components
import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import BlockContent from '../BlockContent'
import Implant from './Implant'
import PrevNext from './PrevNext'

// Hooks
import useProduct from '../../hooks/useProduct'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '../../elements'

// Styles + theme
import * as S from './styles.scss'
import theme from '../../../config/theme'
import Prefooter from '../Footer/Prefooter'

// ___________________________________________________________________

const billboardProps = {
  bg: theme.colors.black,
  btnText: 'Mantra',
  color: theme.colors.white,
  message: 'we make orthopaedic implants<br />that are good for all.',
  title: 'Mantra',
  invert: false,
  to: '/contact',
  src: 'sports.jpg',
  altText: 'Doctors in the operating room.'
}

const CategoryDetail: React.FC<{ pageContext: CategoryNode }> = ({
  pageContext
}) => {
  // Page context
  const page = pageContext

  // Product Data
  const products = useProduct()
  const filteredProducts = products.filter(
    product => product.node.categories[0].title === page.title
  )

  const implants = filteredProducts

  // console.log(implants)

  // Page title props
  const pageTitle = {
    altText: page.title,
    image: page.image.asset.fluid,
    message: page.title,
    title: 'Category'
  }
  return (
    <S.CategoryDetail>
      <PageTitle {...pageTitle} />

      {implants.map(({ node: implant }, idx) => (
        <Implant implant={implant} key={idx} />
      ))}

      {/* {implant.videoURL && <Video src={implant.videoURL} />} */}

      <PrevNext pageContext={pageContext} />

      <Billboard {...billboardProps} />
      {/* <Prefooter /> */}
    </S.CategoryDetail>
  )
}

export default CategoryDetail
