// Aside:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Components

// Hooks

// Elements
import { AnimatedBox, Box, Heading, Text } from '../../../elements'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Aside: React.FC<{ data: PostQuery }> = ({ data }) => {
  return (
    <S.Aside as="aside" width={[1, 3 / 10]} p={5}>
      <Heading as="h4" color="text" className="t--uppercase">
        Recent Posts
      </Heading>
    </S.Aside>
  )
}

export default Aside
