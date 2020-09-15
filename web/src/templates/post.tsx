// Post template

// ___________________________________________________________________

// Libraries
import React from 'react'

// Elements
import { AnimatedBox } from '../elements'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Post from '../components/Post'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const PostTemplate: React.FC<PostContextShape> = ({ pageContext }) => {
  const page = pageContext.page
  return (
    <Layout>
      <SEO
        pathname={`/implants/${page.slug.current}`}
        title={`${page.title} | `}
        desc={`${page.title} | `}
        individual={false}
      />
      <AnimatedBox>
        <Post pageContext={pageContext} />
      </AnimatedBox>
    </Layout>
  )
}

export default PostTemplate
