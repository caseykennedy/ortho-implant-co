// ValueLandingPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const ValueLandingPage = styled(Box)`
  flex-wrap: wrap;
  width: 100%;

  @media ${theme.mq.tablet} {
  }
`

export const Intro = styled(Flex)`
  flex-direction: column;
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  width: 100%;
  position: relative;
  margin-top: ${theme.space[3]};

  @media ${theme.mq.tablet} {
    margin-top: 0;
  }
`

export const Values = styled.div`
  width: 100%;

  @media ${theme.mq.tablet} {
  }
`

export const Aside = styled.div`
  display: flex;
  flex-direction: column;

  .stats {
    display: flex;
    flex-wrap: wrap;

    &__panel {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: ${theme.space[2]};
      margin-bottom: ${theme.space[4]};
      width: 50%;

      @media ${theme.mq.desktop} {
        padding: ${theme.space[3]};
        width: 50%;
      }

      .title {
        border-bottom: ${theme.border};
        margin-bottom: ${theme.space[3]};
        width: 100%;
      }

      .savings {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: ${theme.colors.primary};
        border-radius: 999px;
        padding: ${theme.space[4]};
        width: 100%;

        @media ${theme.mq.tablet} {
          padding: ${theme.space[5]};
          min-height: 200px;
        }
      }
    }
  }
`
