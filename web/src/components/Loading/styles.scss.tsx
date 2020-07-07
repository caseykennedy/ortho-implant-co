// Loading Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { AnimatedFlex } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Loading = styled(AnimatedFlex)`
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;

  @media ${theme.mq.tablet} {
  }

  .animation {
    justify-content: center;
    align-items: center;

    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: ${theme.colors.secondary};
  }

  svg {
    width: 15vw;
    fill: ${theme.colors.primary};
    position: relative;
    z-index: 999;

    animation: animateFill 5s;
    animation-delay: 0;
    /* animation-fill-mode: backwards; */
    /* animation-iteration-count: 2; */
    /* animation-direction: alternate; */
  }

  @keyframes animateFill {
    from {
      fill: ${theme.colors.secondary};
    }
    to {
      fill: ${theme.colors.primary};
    }
  }
`
