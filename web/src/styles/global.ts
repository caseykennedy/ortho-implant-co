// Global styles

// ___________________________________________________________________

import { createGlobalStyle } from 'styled-components'

import theme from '../../config/theme'

import RootVars from './root'
import Reset from './reset'
import Typography from './typography'

// ___________________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}
  
  body {
    background: ${theme.colors.secondary};
    color: ${theme.colors.text};
    
    border: 0;
    margin: 0;
    padding: 0;
    /* overflow-x: hidden; */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .img {
    width: 100%;
    height: 100%;
  }

  /* Cursor */
  /* html,
  a,
  button {
    cursor: none;

    &:hover {
      cursor: none;
    }
  } */

  #drawer-root {
    position: relative;
    z-index: 100;
  }

  /* hover popup: need to find a new home for this */
  .popup {
    color: white;
    position: absolute;
    pointer-events: none;
    z-index: 99999;
    font-size: 3rem;
    top: -${theme.space[7]};
    right: calc(${theme.space[3]} * -24);

    visibility: hidden;
    opacity: 0;
    transform: matrix(1, 0, 0, 1, 0, 32);
    transition: ${theme.transition.all};

    &.show {
      visibility: visible;
      opacity: 1;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }
`

export default GlobalStyles

// ___________________________________________________________________
