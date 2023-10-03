// ValueLandingPage Styles:

import styled from 'styled-components'
import { Box, Flex, Heading } from '@/components/elements'
import theme from '../../../config/theme'

export const ValueLandingPage = styled.div`
  position: relative;
  z-index: 999999999;
  width: 100%;
`

export const Intro = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  width: 100%;
  position: relative;
  margin-top: ${theme.space[3]};
  padding: ${theme.space[4]};

  @media ${theme.mq.tablet} {
    margin-top: 0;
    padding: ${theme.space[6]};
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
  width: 100%;

  .stats {
    display: flex;
    flex-flow: column nowrap;
    gap: ${theme.space[6]};
    width: 100%;

    @media ${theme.mq.tablet} {
      flex-flow: row wrap;
    }

    &__panel {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .title {
        border-bottom: ${theme.border};
        margin-bottom: ${theme.space[3]};
        width: 100%;

        a {
          color: ${theme.colors.text};
          font-size: calc(${theme.fontSizes[1]} / 1);
          float: right;

          svg {
            margin-left: ${theme.space[1]};
          }
        }
      }

      .savings {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: ${theme.colors.primary};
        clip-path: circle(40%);
        min-height: 180px;
        width: 100%;

        @media ${theme.mq.tablet} {
          min-height: 222px;
        }
      }
    }
  }
`
