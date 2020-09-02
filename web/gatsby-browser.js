// gatsby-browser

import React, { useState, useEffect } from 'react'

// ___________________________________________________________________

const LoadAnimation = ({ children }) => {
  const [loading, stillLoading] = useState(true)
  useEffect(() => stillLoading(false))
  return !loading && <div>{children}</div>
}

export const wrapRootElement = ({ element }) => (
  <LoadAnimation>{element}</LoadAnimation>
)
