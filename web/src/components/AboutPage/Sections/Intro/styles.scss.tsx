// Intro Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../Section'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Intro = styled(Box)`
  width: 100%;
  position: relative;

  @media ${theme.mq.tablet} {
  }
`

export const About = styled(Flex)`
  border-bottom: ${theme.border};
  color: ${theme.colors.white};

  @media ${theme.mq.tablet} {
  }
`

export const Values = styled.div`
  width: 100%;

  @media ${theme.mq.tablet} {
  }
`
