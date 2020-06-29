// Layout:
// TODO: create hook for siteMetaData

// ___________________________________________________________________

import React, { useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { ParallaxProvider } from 'react-scroll-parallax'

import Header from '../Header'
import Footer from '../Footer'
import Cursor from '../Cursor'

import theme from '../../../config/theme'
import GlobalStyles from '../../styles/global'
import * as S from './styles.scss'
import 'swiper/css/swiper.css'

// ___________________________________________________________________

type LayoutProps = {
  children: React.ReactNode
  isShowing?: boolean
  toggleOverlay?: () => void
  // mainRef: React.RefObject<HTMLDivElement>
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)
  
  // eslint-disable-next-line no-console
  console.log(
    `%c Site by CaseyKennedy.me `,
    `background: #FFC907; color: #000000`
  )
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ParallaxProvider>
        <S.Wrapper>
          <Header mainRef={mainRef} />
          <S.Main ref={mainRef}>{children}</S.Main>
          <Footer />
        </S.Wrapper>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default Layout
