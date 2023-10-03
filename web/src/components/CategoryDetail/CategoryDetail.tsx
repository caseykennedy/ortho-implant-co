// Category Detail Page:

import React from 'react'

// Components
import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Implant from './Implant'

// Hooks
import useProduct from '@/hooks/useProduct'

// Styles + theme
import * as S from './styles.scss'
import theme from '../../../config/theme'

const CategoryDetail: React.FC<{ pageContext: CategoryNode }> = ({ pageContext }) => {
  // Page context
  const page = pageContext
  const category = page.title

  // Product + Filter products that match the page title (category)
  const products = useProduct()
  const filteredProducts = products.node.products.filter(product => {
    if (product.categories[0].title.includes(category)) {
      return product
    }
    if (product.categories[1] && product.categories[1].title.includes(category)) {
      return product
    }
  })

  const implants = filteredProducts

  // console.log('----|- implants -|----')
  // console.log(implants)

  // Page title props
  const pageTitle = {
    altText: page.title,
    image: page.image.asset.gatsbyImageData,
    message: page.title,
    title: 'Category',
  }

  // Billboard props
  const billboardProps = {
    bg: theme.colors.secondary,
    color: theme.colors.white,
    message: "Let's schedule<br />a one-on-one",
    title: 'Ready to chat?',
    invert: false,
    to: '/contact',
    btnText: 'talk to us',
    // src: page.image.asset.gatsbyImageData,
    // altText: 'Doctors in the operating room.'
  }
  return (
    <S.CategoryDetail>
      <PageTitle {...pageTitle} />

      {implants.map((implant, idx) => (
        <Implant implant={implant} key={idx} />
      ))}

      <Billboard {...billboardProps} />
    </S.CategoryDetail>
  )
}

export default CategoryDetail
