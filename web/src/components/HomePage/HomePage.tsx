// HomePage:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'
import Divider from '../../elements/Divider'

import ImgMatch from '../ImgMatch'
import Icon from '../Icons'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <S.Hero>
        <S.Sideboard width={1 / 8} className="sideboard">
          <Heading as="h5">orthopaedic implant co.</Heading>
        </S.Sideboard>
        <S.Billboard width={7 / 8} className="billboard">
          <Heading as="h1" mb={0}>
            a better kind of
            <br />
            orthopaedic implant co.
          </Heading>
        </S.Billboard>
      </S.Hero>
      <Box width={1} className="hero__img">
        <ImgMatch
          src="man-hiking.jpg"
          altText="Man hiking - Orthopaedic Implant Co."
        />
      </Box>
      {/* <Divider bg="background" py={13} /> */}
    </S.HomePage>
  )
}

export default HomePage
