// Aside Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken, lighten } from 'polished'

import { Box, Flex, Heading } from '../../../elements'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Aside = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  background: ${darken(0, `${theme.colors.primary}`)};
  border-right: none;
  /* padding: ${theme.space[4]}; */

  @media ${theme.mq.small} {
    border-right: ${theme.border};
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${theme.space[4]};

    border-top: ${theme.border};
    color: ${theme.colors.text};
    text-transform: uppercase;

    &:hover {
      background: ${theme.colors.background};

      .ico {
        background: ${theme.colors.black};

        svg {
          fill: ${theme.colors.primary};
        }
      }
    }

    .ico {
      background: ${theme.colors.primary};
      border-left: ${theme.border};
      padding: ${theme.space[3]};
      display: block;

      transition: ${theme.transition.all};

      @media ${theme.mq.small} {
        padding: ${theme.space[4]};
      }

      svg {
        fill: ${theme.colors.black};
        width: ${theme.space[5]};
      }
    }

    &.sign-out {
      background: ${theme.colors.quaternary};
      color: ${theme.colors.text};

      &:hover {
        background: ${theme.colors.background};
        color: ${theme.colors.text};

        .ico {
          background: ${theme.colors.black};

          svg {
            fill: ${theme.colors.primary};
          }
        }
      }

      .ico {
        background: ${theme.colors.black};

        svg {
          fill: ${theme.colors.primary};
        }
      }
    }
  }
`

export const User = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  /* padding: ${theme.space[4]} ${theme.space[4]}; */
`

export const Tools = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;

  .updates {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    padding: ${theme.space[4]};
    /* background: ${theme.colors.tertiary}; */
    color: ${theme.colors.text};
    border-top: ${theme.border};
  }
`

export const WelcomeBox = styled(Flex)`
  position: relative;
  background: ${theme.colors.primary};
  border-bottom: ${theme.border};

  @media ${theme.mq.small} {
  }

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: ${theme.space[4]};
    position: relative;
    z-index: 9;
  }

  .decorator {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: 0;

    svg {
      width: 100%;
      fill: ${theme.colors.black};
    }
  }
`
