// Section:
// Global Section component

// ___________________________________________________________________

// Core
import * as React from 'react'

// Components
import { Box, Flex } from '../../elements'
import styled from 'styled-components'

// Theme
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {
  children: React.ReactNode
  bg?: string
  color?: string
  pt?: number | number[] | string
  pb?: number | number[] | string
  pr?: number | number[] | string
  pl?: number | number[] | string
  id?: string
  width?: number | number[] | string | string[]
  border: boolean
}

const Section: React.FC<Props> = ({
  children,
  bg,
  color,
  pt,
  pb,
  pr,
  pl,
  id,
  width,
  border
}) => (
  <Container
    as="section"
    bg={bg}
    color={color}
    pt={pt}
    pb={pb}
    id={id}
    width={width}
    border={border}
  >
    <Box
      width={1}
      // maxWidth={theme.maxWidth}
      pr={pr}
      pl={pl}
      m="0 auto"
    >
      {children}
    </Box>
  </Container>
)

export default Section

// ___________________________________________________________________

const defaultProps = {
  pt: [4, 8],
  pb: [4],
  pr: [3, 4],
  pl: [3, 4],
  width: 1,
  border: true
}

Section.defaultProps = defaultProps

// ___________________________________________________________________

const Container = styled(Box)<{ border: boolean }>`
  border-bottom: ${p => !p.border ? 'none' : `${theme.border}`};
`
