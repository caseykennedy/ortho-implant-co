// ValueLandingPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex, Heading } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const ValueLandingPage = styled(Box)`
  flex-wrap: wrap;
  width: 100%;

  .aside {
    border-top: ${theme.border};

    @media ${theme.mq.tablet} {
      border-top: none;
    }
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
      width: 50%;

      @media ${theme.mq.desktop} {
        padding: ${theme.space[3]};
        width: 50%;
      }

      .title {

        border-bottom: ${theme.border};
        margin-bottom: ${theme.space[3]};
        width: 100%;

        a {
          color: ${theme.colors.text};
          font-size: calc(${theme.fontSizes[1]} / 1.25);
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
