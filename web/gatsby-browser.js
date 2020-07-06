import React, { useState, useEffect } from 'react'
import { useSpring, config } from 'react-spring'

// Elements
import { AnimatedBox } from './src/elements'

const LoadAnimation = ({ children }) => {
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  return <AnimatedBox style={pageAnimation}>{children}</AnimatedBox>
}

export const wrapRootElement = ({ element }) => (
  <LoadAnimation>{element}</LoadAnimation>
)
