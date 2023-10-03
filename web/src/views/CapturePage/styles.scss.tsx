// CapturePage Styles:

import styled from 'styled-components'
import theme from '../../../config/theme'

export const CapturePage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  @media ${theme.mq.tablet} {
    flex-flow: row nowrap;
  }

  a {
    color: ${theme.colors.text};

    &:hover {
      color: ${theme.colors.tertiary};
    }
  }

  .mailing {
    flex: 1;
    border-left: none;
    border-top: ${theme.border};

    @media ${theme.mq.tablet} {
      border-left: ${theme.border};
      border-top: none;
    }
  }
`
