// gatsby-browser

import React, { useState, useEffect } from 'react'
import { useSpring, config } from 'react-spring'

// Components
import Logo from './src/components/Logo'

// Elements
import { AnimatedBox, Box } from './src/elements'

import theme from './config/theme'

// ___________________________________________________________________

const LoadAnimation = ({ children }) => {
  const [loading, stillLoading] = useState(true)
  useEffect(() => stillLoading(false))

  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  return loading === false ? (
    <AnimatedBox style={pageAnimation}>{children}</AnimatedBox>
  ) : (
    <Box>
      <h1>LOADING ANIMATION HERE...</h1>
      <br />
      <Box width="200px">
        <Logo />
      </Box>
    </Box>
  )
}

export const wrapRootElement = ({ element }) => (
  <LoadAnimation>{element}</LoadAnimation>
)
