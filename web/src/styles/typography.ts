// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../../config/theme'
import { darken } from 'polished'

// Helvetica Neue Condensed Regular
import HelveticaNeueLTStdCnEot from './fonts/HelveticaNeueLTStd-Cn.eot'
import HelveticaNeueLTStdCnWoff2 from './fonts/HelveticaNeueLTStd-Cn.woff2'
import HelveticaNeueLTStdCnWoff from './fonts/HelveticaNeueLTStd-Cn.woff'
import HelveticaNeueLTStdCnOtf from './fonts/HelveticaNeueLTStd-Cn.otf'

// Helvetica Neue Condensed Medium
import HelveticaNeueLTStdMdCnEot from './fonts/HelveticaNeueLTStd-MdCn.eot'
import HelveticaNeueLTStdMdCnWoff2 from './fonts/HelveticaNeueLTStd-MdCn.woff2'
import HelveticaNeueLTStdMdCnWoff from './fonts/HelveticaNeueLTStd-MdCn.woff'
import HelveticaNeueLTStdMdCnOtf from './fonts/HelveticaNeueLTStd-MdCn.otf'

// Helvetica Neue Light
import HelveticaNeueLTStdLtEot from './fonts/HelveticaNeueLTStd-Lt.eot'
import HelveticaNeueLTStdLtWoff2 from './fonts/HelveticaNeueLTStd-Lt.woff2'
import HelveticaNeueLTStdLtWoff from './fonts/HelveticaNeueLTStd-Lt.woff'
import HelveticaNeueLTStdLtOtf from './fonts/HelveticaNeueLTStd-Lt.otf'

// Helvetica Neue Roman
import HelveticaNeueLTStdRomanEot from './fonts/HelveticaNeueLTStd-Roman.eot'
import HelveticaNeueLTStdRomanWoff2 from './fonts/HelveticaNeueLTStd-Roman.woff2'
import HelveticaNeueLTStdRomanWoff from './fonts/HelveticaNeueLTStd-Roman.woff'
import HelveticaNeueLTStdRomanOtf from './fonts/HelveticaNeueLTStd-Roman.otf'

// Helvetica Monospace Regular
import HelveticaMonospacedProRgEot from './fonts/HelveticaMonospacedPro-Rg.eot'
import HelveticaMonospacedProRgWoff2 from './fonts/HelveticaMonospacedPro-Rg.woff2'
import HelveticaMonospacedProRgWoff from './fonts/HelveticaMonospacedPro-Rg.woff'
import HelveticaMonospacedProRgOtf from './fonts/HelveticaMonospacedPro-Rg.otf'

// ___________________________________________________________________

const Typography = css`
  /* Helvetica Neue Condensed Regular */
  @font-face {
    font-family: 'HelveticaCondensed';
    src: url(${HelveticaNeueLTStdCnEot});
    src: url(${HelveticaNeueLTStdCnWoff2}) format('woff2'),
      url(${HelveticaNeueLTStdCnWoff}) format('woff'),
      url(${HelveticaNeueLTStdCnOtf}) format('opentype'),
      url(${HelveticaNeueLTStdCnEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Helvetica Neue Condensed Medium */
  @font-face {
    font-family: 'HelveticaCondensed';
    src: url(${HelveticaNeueLTStdMdCnEot});
    src: url(${HelveticaNeueLTStdMdCnWoff2}) format('woff2'),
      url(${HelveticaNeueLTStdMdCnWoff}) format('woff'),
      url(${HelveticaNeueLTStdMdCnOtf}) format('opentype'),
      url(${HelveticaNeueLTStdMdCnEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* Helvetica Neue Light */
  @font-face {
    font-family: 'Helvetica';
    src: url(${HelveticaNeueLTStdLtEot});
    src: url(${HelveticaNeueLTStdLtWoff2}) format('woff2'),
      url(${HelveticaNeueLTStdLtWoff}) format('woff'),
      url(${HelveticaNeueLTStdLtOtf}) format('opentype'),
      url(${HelveticaNeueLTStdLtEot}?#iefix) format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* Helvetica Neue Roman */
  @font-face {
    font-family: 'Helvetica';
    src: url(${HelveticaNeueLTStdRomanEot});
    src: url(${HelveticaNeueLTStdRomanWoff2}) format('woff2'),
      url(${HelveticaNeueLTStdRomanWoff}) format('woff'),
      url(${HelveticaNeueLTStdRomanOtf}) format('opentype'),
      url(${HelveticaNeueLTStdRomanEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Helvetica Monospace Regular */
  @font-face {
    font-family: 'HelveticaMono';
    src: url(${HelveticaMonospacedProRgEot});
    src: url(${HelveticaMonospacedProRgWoff2}) format('woff2'),
      url(${HelveticaMonospacedProRgWoff}) format('woff'),
      url(${HelveticaMonospacedProRgOtf}) format('opentype'),
      url(${HelveticaMonospacedProRgEot}?#iefix) format('embedded-opentype');
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
    font-size: 18px;
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

  mark {
    background-color: ${theme.colors.quinary};
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
    letter-spacing: 0.5px;
    margin: 0 0 0.25em;
    transition: ${theme.transition.all};
  }

  .text--xxxl {
    font-size: calc(${theme.root.font.xxxl} / 1.25);
    line-height: calc(${theme.root.font.headingLineHeight} / 1);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.root.font.xxxl} * 1.25);
    }
  }

  h1,
  .text--xxl {
    font-size: calc(${theme.root.font.lg} * 1.15);

    @media ${theme.mq.tablet} {
      font-size: ${theme.root.font.xl};
    }
  }

  h2,
  .text--xl {
    font-size: ${theme.root.font.lg};
    font-weight: 400;

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.root.font.lg} * 1.25);
    }
  }

  h3,
  .text--lg {
    font-size: ${theme.root.font.md};
    /* line-height: ${theme.root.font.bodyLineHeight}; */
    margin: 0 0 0.5em;

    @media ${theme.mq.tablet} {
      font-size: ${theme.root.font.lg};
    }
  }

  h4,
  .text--md {
    font-size: ${theme.fontSizes[2]};
    font-weight: 500;
    /* line-height: ${theme.root.font.bodyLineHeight}; */
    text-transform: uppercase;
    margin: 0 0 0.5em;

    @media ${theme.mq.tablet} {
      margin: 0 0 1.5em;
    }
  }

  h5,
  .text--sm {
    font-size: ${theme.fontSizes[1]};
    /* font-weight: 400; */
    line-height: ${theme.root.font.bodyLineHeight};
    text-transform: uppercase;
    margin: 0 0 1em;

    @media ${theme.mq.tablet} {
      margin: 0 0 1.5em;
    }
  }

  small {
    font-size: ${theme.root.font.sm};
  }

  .text--xs {
    font-size: ${theme.root.font.xs};
  }

  p {
    font-size: ${theme.root.font.baseSize};
    line-height: ${theme.root.font.bodyLineHeight};
    margin-bottom: 1.5em;

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[2]};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: 500;
  }

  .t--small {
    font-size: calc(${theme.fontSizes[1]} / 1.1);
  }

  .t-underline {
    text-decoration: underline;
  }

  .t--dual-col {
    column-count: 1;

    @media ${theme.mq.tablet} {
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

    /* color: ${theme.colors.primary}; */

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

    &:hover {
      span {
        margin-left: calc(${theme.space[5]} * 1.5);
      }
    }

    span {
      margin-left: ${theme.space[5]};
      transition: ${theme.transition.all};

      svg {
        width: 24px;
      }
    }

    h4 {
      display: flex;
    }
  }

  ul {
    margin: 0 0 1.5em 1.15rem;
    list-style-type: disc;

    li {
      list-style-position: outside;
      /* font-size: calc(${theme.root.font.baseSize} / 1); */
      line-height: ${theme.root.font.bodyLineHeight};

      @media ${theme.mq.tablet} {
        /* font-size: calc(${theme.root.font.baseSize} / 1.25); */
      }
    }
  }
`

export default Typography

// ___________________________________________________________________
