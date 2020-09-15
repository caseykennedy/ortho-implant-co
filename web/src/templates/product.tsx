// Product template

// ___________________________________________________________________

// Libraries
import React from 'react'

// Elements
import { AnimatedBox } from '../elements'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ProductDetail from '../components/ProductDetail'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const ProductTemplate: React.FC<ProductContextShape> = ({ pageContext }) => {
  const page = pageContext.page
  return (
    <Layout>
      <SEO
        pathname={`/implants/${page.slug.current}`}
        title={`${page.name} | `}
        desc={`${page.name} | `}
        individual={false}
      />
      <AnimatedBox>
        <ProductDetail pageContext={pageContext} />
      </AnimatedBox>
    </Layout>
  )
}

export default ProductTemplate
