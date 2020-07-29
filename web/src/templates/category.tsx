// Category template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import { useSpring, config } from 'react-spring'

// Elements
import { AnimatedBox, Box, Heading } from '../elements'
import Divider from '../elements/Divider'

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
  // console.log('—————|— Category —|—————')
  // console.log(page)

  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  return (
    <Layout>
      <SEO
        pathname={`/implants/${page.slug.current}`}
        title={`${page.title} | `}
        desc={`${page.title} | `}
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
