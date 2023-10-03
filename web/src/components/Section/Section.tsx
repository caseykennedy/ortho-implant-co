// Section

import * as React from 'react'
import { Box } from '@/components/elements'
import styled from 'styled-components'
import theme from '../../../config/theme'

const Container = styled(Box)<{ border?: boolean; overflow?: string }>`
  border-top: ${p => (!p.border ? 'none' : `${theme.border}`)};
  position: relative;
  overflow: ${p => (!p.overflow ? 'visible' : p.overflow)};

  .cta {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;

    @media ${theme.mq.tablet} {
      right: ${theme.space[7]};
    }
  }
`

type Props = {
  bg?: string
  border?: boolean
  children: React.ReactNode
  color?: string
  pt?: number | number[] | string
  pb?: number | number[] | string
  pr?: number | number[] | string
  pl?: number | number[] | string
  id?: string
  width?: number | number[] | string | string[]
  overflow?: string
}

const Section: React.FC<Props> = ({ bg, border, children, color, pt, pb, pr, pl, id, width, overflow }) => (
  <Container
    as="section"
    border={border}
    bg={bg}
    color={color}
    pt={pt}
    pb={pb}
    id={id}
    width={width}
    overflow={overflow}
  >
    <Box width={1} pr={pr} pl={pl} m="0 auto">
      {children}
    </Box>
  </Container>
)

export default Section

const defaultProps = {
  pt: theme.gutter.axis,
  pb: theme.gutter.axis,
  pr: theme.gutter.axis,
  pl: theme.gutter.axis,
  width: 1,
}

Section.defaultProps = defaultProps
