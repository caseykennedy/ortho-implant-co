// Category template

// ___________________________________________________________________

// Libraries
import React from 'react'

// Elements
import { AnimatedBox } from '../elements'

// Components
import SEO from '../components/SEO'
import CategoryDetail from '../components/CategoryDetail'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const CategoryTemplate: React.FC<{ pageContext: CategoryNode }> = ({ pageContext }) => {
  const page = pageContext
  return (
    <>
      <SEO
        pathname={`/implants/${page.slug.current}`}
        title={`${page.title}`}
        desc={`${page.title}`}
        banner={`${page.image.asset.url}`}
        individual={false}
      />
      <AnimatedBox>
        <CategoryDetail pageContext={pageContext} />
      </AnimatedBox>
    </>
  )
}

export default CategoryTemplate

// ___________________________________________________________________
