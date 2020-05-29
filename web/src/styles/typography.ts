// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../../config/theme'
import { darken } from 'polished'

// Aeonik Regular
import MediaSansRegularEot from './fonts/MediaSans-Regular.eot'
import MediaSansRegularWoff2 from './fonts/MediaSans-Regular.woff2'
import MediaSansRegularWoff from './fonts/MediaSans-Regular.woff'
import MediaSansRegularOtf from './fonts/MediaSans-Regular.otf'

// BergenMono Regular
import BergenMonoRegularEot from './fonts/BergenMono-Regular.eot'
import BergenMonoRegularWoff2 from './fonts/BergenMono-Regular.woff2'
import BergenMonoRegularWoff from './fonts/BergenMono-Regular.woff'
import BergenMonoRegularOtf from './fonts/BergenMono-Regular.otf'

// ___________________________________________________________________

const Typography = css`
  /* Aeonik Regular */
  @font-face {
    font-family: 'MediaSans';
    src: url(${MediaSansRegularEot});
    src: url(${MediaSansRegularWoff2}) format('woff2'),
      url(${MediaSansRegularWoff}) format('woff'),
      url(${MediaSansRegularOtf}) format('opentype'),
      url(${MediaSansRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* BergenMono Regular */
  @font-face {
    font-family: 'BergenMono';
    src: url(${BergenMonoRegularEot});
    src: url(${BergenMonoRegularWoff2}) format('woff2'),
      url(${BergenMonoRegularWoff}) format('woff'),
      url(${BergenMonoRegularOtf}) format('opentype'),
      url(${BergenMonoRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }

  body {
    font-size: ${theme.root.font.baseSize};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.bodyLineHeight};
    letter-spacing: ${theme.root.font.baseLetterSpacing};

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'pnum';

    text-rendering: geometricPrecision;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    font-variant-ligatures: discretionary-ligatures;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.root.font.headingLineHeight};
    letter-spacing: 2px;
    margin: 0 0 0.25em;
    transition: ${theme.transition.all};
  }

  .text--xxxl {
    font-size: calc(${theme.root.font.xxxl} / 1.25);
    line-height: calc(${theme.root.font.headingLineHeight} / 1);

    @media ${theme.mq.small} {
      font-size: calc(${theme.root.font.xxxl} * 1.25);
    }
  }

  h1,
  .text--xxl {
    font-size: calc(${theme.root.font.xl});
    font-weight: ${theme.fontWeights.regular};
    line-height: calc(${theme.root.font.headingLineHeight} / 1.1);

    @media ${theme.mq.small} {
      font-size: ${theme.root.font.xxl};
    }
  }

  h2,
  .text--xl {
    font-size: ${theme.root.font.lg};
    font-weight: ${theme.fontWeights.regular};

    @media ${theme.mq.small} {
      font-size: ${theme.root.font.xl};
    }
  }

  h3,
  .text--lg {
    font-size: ${theme.root.font.md};
    line-height: ${theme.root.font.bodyLineHeight};
    margin: 0 0 1em;

    @media ${theme.mq.small} {
    }
  }

  h4,
  .text--md {
    font-size: ${theme.root.font.sm};
    line-height: ${theme.root.font.bodyLineHeight};
    margin: 0 0 1em;
  }

  h5,
  .text--sm {
    font-family: ${theme.fonts.body};
    font-size: calc(${theme.fontSizes[1]} * 1);
    letter-spacing: 0.5px;
    line-height: ${theme.root.font.bodyLineHeight};
    text-transform: uppercase;
    margin: 0 0 0.5em;
  }

  small {
    font-size: ${theme.root.font.sm};
  }

  .text--xs {
    font-size: ${theme.root.font.xs};
  }

  p {
    font-size: calc(${theme.root.font.baseSize} / 1);
    line-height: ${theme.root.font.bodyLineHeight};
    margin-bottom: 1.5em;

    @media ${theme.mq.small} {
      font-size: calc(${theme.root.font.baseSize} / 1.25);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: 500;
  }

  .t-underline {
    text-decoration: underline;
  }

  .t--dual-col {
    column-count: 1;

    @media ${theme.mq.small} {
      column-count: 2;
    }
  }

  .t--uppercase {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  a {
    text-decoration: none;
    position: relative;
    z-index: 1;

    transition: ${theme.transition.all};

    color: ${theme.colors.primary};

    &:hover,
    &:focus {
      text-decoration: none;
      color: ${darken(0.05, `${theme.colors.secondary}`)};
    }
  }

  .t--link {
    position: relative;

    &::before {
      content: '';
      background: ${theme.colors.secondary};
      width: 0;
      height: 6px;

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;

      transition: width 0.222s ease-in-out;
    }

    /* &:hover {
      &::before {
        width: 100%;
      }
    } */

    &:active {
      &::after {
        mix-blend-mode: difference;
      }
    }
  }

  ul {
    margin: 0 0 1.5em 1.75rem;
    list-style-type: disc;

    li {
      list-style-position: outside;
      font-size: calc(${theme.root.font.baseSize} / 1);
      line-height: ${theme.root.font.bodyLineHeight};

      @media ${theme.mq.small} {
        font-size: calc(${theme.root.font.baseSize} / 1.25);
      }
    }
  }
`

export default Typography

// ___________________________________________________________________
