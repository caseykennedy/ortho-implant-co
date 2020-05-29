// About Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Flex } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const About = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
`

export const Section = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  .content {
    flex-direction: column;
    justify-content: space-between;
    border-top: ${theme.border};
    border-left: 0;
    padding: ${theme.space[4]};

    @media ${theme.mq.small} {
      border-left: ${theme.border};
    }

    ul {
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      list-style: none;

      div {
        padding: ${theme.space[4]} 0;
      }
    }
  }

  .image {
    border-top: ${theme.border};
    mix-blend-mode: luminosity;
  }
`
