// Rethink:

// ___________________________________________________________________

import React from 'react'

import { Box, Flex, Text, Heading } from '../../../../elements'

import Section from '../../../Section'

import theme from '../../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {}

const Rethink: React.FC = () => {
  return (
    <Section border={true}>
      <Box width={2 / 3}>
        <Heading as="h2">
          We create better value for the implants you already know and use on an
          everyday basis.
        </Heading>
      </Box>
    </Section>
  )
}

export default Rethink
