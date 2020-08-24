// News page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogPage from '../components/BlogPage'

// Elements
import { AnimatedBox } from '../elements'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const News = () => {
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
      pathname={`/news`}
      title={`News | Orthopaedic Implant Co.`}
      desc={`Find company news, press and blog posts.`}
      individual={false}
    />
      <AnimatedBox>
        <BlogPage />
      </AnimatedBox>
    </Layout>
  )
}

export default News

// ___________________________________________________________________
