// Account page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

// @ts-ignore
import { isAuthenticated, login } from '../utils/auth'

// Hooks
import useToggle from '../hooks/useToggle'

// Elements
import { AnimatedBox } from '../elements'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Account from '../components/Account'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const AccountPage = () => {
  // Check if authenticated
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
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
      <SEO />
      <AnimatedBox>
        <Account />
      </AnimatedBox>
    </Layout>
  )
}

export default AccountPage

// ___________________________________________________________________
