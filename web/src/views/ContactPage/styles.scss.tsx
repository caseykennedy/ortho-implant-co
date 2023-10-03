// ContactPage Styles:

import styled from 'styled-components'

import theme from '../../../config/theme'
import { Box, Flex, Heading } from '@/components/elements'

export const ContactPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  a {
    color: ${theme.colors.text};

    &:hover {
      text-decoration: underline;
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

  .map {
    background: ${theme.colors.quinary};
    min-height: 40vh;
    border-top: ${theme.border};
    border-left: none;

    @media ${theme.mq.tablet} {
      border-top: none;
      border-left: ${theme.border};
    }
  }
`
