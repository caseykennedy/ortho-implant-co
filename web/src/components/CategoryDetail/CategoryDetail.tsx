// Category Detail Page:

// ___________________________________________________________________

import React from 'react'

// Components
import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import BlockContent from '../BlockContent'
import Implant from './Implant'

// Hooks
import useProduct from '../../hooks/useProduct'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '../../elements'

// Styles + theme
import * as S from './styles.scss'
import theme from '../../../config/theme'
import Prefooter from '../Footer/Prefooter'

// ___________________________________________________________________

const CategoryDetail: React.FC<{ pageContext: CategoryNode }> = ({
  pageContext
}) => {
  // Page context
  const page = pageContext

  // console.log('----|- Page -|----')
  // console.log(page)

  // Product Data
  const products = useProduct()
  const filteredProducts = products.filter(
    product => product.node.categories[0].title === page.title
  )

  const implants = filteredProducts

  // console.log('----|- products -|----')
  // console.log(implants)

  // Page title props
  const pageTitle = {
    altText: page.title,
    image: page.image.asset.fluid,
    message: page.title,
    title: 'Category'
  }

  // Billboard props
  const billboardProps = {
    bg: theme.colors.primary,
    color: theme.colors.white,
    message: 'Let\'s schedule<br />a one-to-one',
    title: 'Ready to chat?',
    invert: false,
    to: '/contact',
    btnText: 'talk to us',
    src: page.image.asset.fluid,
    altText: 'Doctors in the operating room.'
  }
  return (
    <S.CategoryDetail>
      <PageTitle {...pageTitle} />

      {implants.map(({ node: implant }, idx) => (
        <Implant implant={implant} key={idx} />
      ))}

      <Billboard {...billboardProps} />
    </S.CategoryDetail>
  )
}

export default CategoryDetail
