// Layout:
// TODO: create hook for siteMetaData

// ___________________________________________________________________

import React, { useRef } from 'react'

import Header from '../Header'
import Footer from '../Footer'

import * as S from './styles.scss'
import 'swiper/css/swiper.css'

// ___________________________________________________________________

export type LayoutProps = {
  children: React.ReactNode
  isShowing?: boolean
  toggleOverlay?: () => void
  location?: {
    pathname: string
  }
  // mainRef: React.RefObject<HTMLDivElement>
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)

  // const { pathname } = location
  // const isHome = pathname === '/'

  // eslint-disable-next-line no-console
  console.log(
    `%c Site by CaseyKennedy.me `,
    `background: #FFC907; color: #000000`
  )
  return (
    <S.Wrapper>
      <Header mainRef={mainRef} />
      <S.Main ref={mainRef}>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  )
}

export default Layout

// ___________________________________________________________________

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      )
    }
  }
