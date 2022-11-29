import React from 'react'
import Layout from './src/components/Layout'
import GlobalStyles from './src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './config/theme'
import { ParallaxProvider } from 'react-scroll-parallax'

export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <ParallaxProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  </ParallaxProvider>
)

export const wrapRootElement = ({ element }) => element
