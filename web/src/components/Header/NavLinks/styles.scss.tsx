// Navigation Styles:

import styled from 'styled-components'
import { animated } from 'react-spring'
import theme from '../../../../config/theme'

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: ${theme.space[5]};
  width: 100%;
`

export const NavLink = styled(animated.div)`
  flex-direction: column;
  width: 100%;
  /* padding: ${theme.space[2]} 0; */

  .nav-mobile {
    &__link {
      color: ${theme.colors.white};
      font-size: ${theme.fontSizes[3]};
      text-transform: uppercase;
      padding: ${theme.space[4]};
    }

    &-sub {
      padding: ${theme.fontSizes[1]} 0 ${theme.fontSizes[1]} 0;
      border-bottom: ${theme.border};

      &__link {
        display: block;
        padding: ${theme.space[3]} ${theme.space[4]};
        color: ${theme.colors.text};
        font-size: calc(${theme.fontSizes[2]} / 1.15);
      }
    }
  }
`
