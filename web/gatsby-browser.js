// gatsby-browser

import React, { useState, useEffect } from 'react'
import { useSpring, config } from 'react-spring'
import Loading from './src/components/Loading'
import { AnimatedBox } from './src/elements'

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
    <Loading />
  )
}

export const wrapRootElement = ({ element }) => (
  <LoadAnimation>{element}</LoadAnimation>
)
