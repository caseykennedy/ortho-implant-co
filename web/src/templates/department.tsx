// Department template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

// Elements
import { AnimatedBox } from '../elements'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Department from '../components/Department'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const DepartmentTemplate: React.FC<DepartmentShape> = ({ pageContext }) => {
  const page = pageContext.page
  let path
  if (!page.government) {
    path = 'departments'
  } else {
    path = 'government'
  }
  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { transform: theme.transform.matrix.from },
    to: { transform: theme.transform.matrix.to }
  })
  return (
    <Layout>
      <SEO
        pathname={`/${path}/${page.slug.current}`}
        title={`${page.department} | Cahuilla Band of Indians`}
        desc={`${page.pageTitle} | The Mission of the Cahuilla Tribal Administration is to bring about a better way of life for Cahuilla people, Tribal People, and the surrounding Communities by protecting and exercising self-governing rights.`}
        individual={false}
      />
      <AnimatedBox>
        <Department pageContext={pageContext} />
      </AnimatedBox>
    </Layout>
  )
}

export default DepartmentTemplate

// ___________________________________________________________________
