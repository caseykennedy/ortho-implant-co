// HomePage:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'
import Divider from '../../elements/Divider'

import ImgMatch from '../ImgMatch'
import Icon from '../Icons'

import Rethink from './Sections/Rethink'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <S.Hero>
        <S.Sideboard>
          <Heading as="h5">orthopaedic implant co.</Heading>
        </S.Sideboard>
        <S.Billboard>
          <Box>
            <Heading as="h5" color="tertiary">
              rethink value
            </Heading>
            <Heading as="h1" mb={0}>
              a better kind of
              <br />
              orthopaedic implant co.
            </Heading>
          </Box>
        </S.Billboard>
      </S.Hero>
      <Box width={1} className="hero__img">
        <ImgMatch
          src="man-hiking.jpg"
          altText="Man hiking - Orthopaedic Implant Co."
        />
      </Box>
      <Rethink />
    </S.HomePage>
  )
}

export default HomePage
