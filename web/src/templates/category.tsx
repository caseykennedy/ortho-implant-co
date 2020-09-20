// Category template

// ___________________________________________________________________

// Libraries
import React from 'react'

// Elements
import { AnimatedBox } from '../elements'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CategoryDetail from '../components/CategoryDetail'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const CategoryTemplate: React.FC<{ pageContext: CategoryNode }> = ({
  pageContext
}) => {
  const page = pageContext
  return (
    <Layout>
      <SEO
        pathname={`/implants/${page.slug.current}`}
        title={`${page.title}`}
        desc={`${page.title}`}
        banner={`${page.image.asset.fluid.src}`}
        individual={false}
      />
      <AnimatedBox>
        <CategoryDetail pageContext={pageContext} />
      </AnimatedBox>
    </Layout>
  )
}

export default CategoryTemplate

// ___________________________________________________________________
