// Intro Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '@/components/elements'

// ___________________________________________________________________

export const Intro = styled.div`
  width: 100%;
  position: relative;
  top: -1rem;

  @media ${theme.mq.tablet} {
    margin-top: 0;
    top: -2rem;
  }

  @media ${theme.mq.desktop} {
    top: -3rem;
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
