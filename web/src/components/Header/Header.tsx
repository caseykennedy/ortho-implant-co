// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

import { Box, Flex, Text } from '../../elements'

import ImgMatch from '../ImgMatch'
import Navigation from './Navigation'
import NavLinks from './NavLinks'
import Overlay from './Overlay'
import Icon from '../Icons'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type HeaderShape = { mainRef: React.RefObject<HTMLDivElement> }

const Header: React.FC<HeaderShape> = ({ mainRef }) => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  return (
    <>
      <Overlay
        id="nav-root"
        root="root"
        isOpen={isNavOpen}
        handleExit={() => setNavOpen(false)}
        mainRef={mainRef}
        className={`nav-bg ${isNavOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
      >
        <NavLinks
          handleExit={() => setNavOpen(false)}
          isNavOpen={isNavOpen}
        />
      </Overlay>
      <S.Headroom style={{ zIndex: 999 }}>
        <S.Header as="header">
          <Link to="/" aria-label="Cahuilla, back to home">
            <S.Symbol as="span">
              <ImgMatch src="logo@4x.png" altText="Cahuilla Band of Indians" />
            </S.Symbol>
            <S.Logo>
              <Box>CAHUILLA</Box>
              <span>band of indians</span>
            </S.Logo>
          </Link>
          <Flex alignItems="center">
            <Navigation />
            <S.Toggle onClick={toggleModal} aria-label="toggle menu">
              <Icon name="hamburger" color="black" />
            </S.Toggle>
          </Flex>
        </S.Header>
      </S.Headroom>
    </>
  )
}

export default Header
