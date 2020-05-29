// Theme / Design system:

// Types
// ___________________________________________________________________

type ThemeShape = {
  breakpoints: string[]
  mq: {
    [key: string]: string
  }
  colors: {
    [key: string]: string
  }
  space: string[]
  gutter: number | number[]
  fonts: {
    [key: string]: string
  }
  fontSizes: string[]
  Heading: {
    [key: string]: string
  }
  fontWeights: {
    [key: string]: number
  }
  strokeWidth: string
  maxWidth: string
  siteWidth: string
  indentWidth: string
  headerHeight: string
  sidebarWidth: string
  grid: {
    [key: string]: string
  }
  transition: {
    [key: string]: string
  }
  transform: {
    matrix: {
      [key: string]: string
    }
  }
  border: string
  shadow: string
  root: {
    mouseX: string
    mouseY: string
    space: string
    font: {
      [key: string]: string
    }
  }
}

// Begin theme
// ___________________________________________________________________

const breakpoints: string[] = ['900px']
// Aliases - FUTURE ENHANCEMENT
// breakpoints.xs = breakpoints[0];
// breakpoints.sm = breakpoints[1];
// breakpoints.md = breakpoints[2];
// breakpoints.lg = breakpoints[3];

const theme: ThemeShape = {
  // Breakpoints
  // ___________________________________________________________________

  breakpoints,
  mq: {
    small: `(min-width: calc(${breakpoints[0]} + 1px))`,
    medium: `(min-width: 1100px)`
  },

  // Color palette
  // ___________________________________________________________________

  colors: {
    text: '#000000',
    background: '#F6F4EE',
    
    primary: '#CF9336',
    secondary: '#3B745F',
    tertiary: '#E19898',
    quaternary: '#863640',

    goldenrod: '#CF9336',
    royaldank: '#3B745F',
    pinkpuffer: '#E19898',
    bloodshot: '#863640',

    black: '#000000',
    white: '#ffffff',
  },

  // Space
  // ___________________________________________________________________

  space: [
    '0',          // 0
    '0.25rem',    // 1
    '0.5rem',     // 2
    '1rem',       // 3
    '1.5rem',     // 4
    '2rem',       // 5
    '3rem',       // 6
    '4rem',       // 7
    '8rem',       // 8
    '10rem',      // 9
    '12rem',      // 10
    '14rem',      // 11
    '16rem',      // 12
    '18rem'       // 13
  ],

  // Main section x-axis gutter
  gutter: 3,

  // Typography
  // ___________________________________________________________________

  fonts: {
    body: `"BergenMono", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    heading: `"MediaSans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    code: `"Menlo", Consolas, Liberation Mono, Menlo, Courier, monospace`
  },

  fontSizes: [
    'var(--text-xs)',         // 0
    'var(--text-sm)',         // 1
    'var(--text-base-size)',  // 2
    'var(--text-md)',         // 3
    'var(--text-lg)',         // 4
    'var(--text-xl)',         // 5
    'var(--text-xxl)',        // 6
    'var(--text-xxxl)',       // 7
  ],

  Heading: {
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    black: 700
  },

  strokeWidth: '2px',

  // Base
  // ___________________________________________________________________

  maxWidth: '1680px',
  siteWidth: '100vw',
  indentWidth: '18px',
  sidebarWidth: '50vw',

  headerHeight: '67px',

  grid: {
    gap: '0.5rem'
  },

  transition: {
    all: 'all 0.222s ease'
  },

  transform: {
    matrix: {
      from: 'matrix(1, 0, 0.02, 1, 32, 32)',
      to: 'matrix(1, 0, 0, 1, 0, 0)'
    }
  },

  border: '1px solid #000000',
  shadow: '2rem 1.5rem 1rem #8a8a7c',

  root: {
    mouseX: 'var(--mouse-x)',
    mouseY: 'var(--mouse-y)',
    space: 'var(--root-size)',
    font: {
      // Base sizing
      baseSize: 'var(--text-base-size)',
      scaleRatio: 'var(--text-scale-ratio)',
      baseLetterSpacing: 'var(--text-base-letter-spacing)',
  
      // Type scale
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      xxl: 'var(--text-xxl)',
      xxxl: 'var(--text-xxxl)',
  
      // Line height
      headingLineHeight: 'var(--heading-line-height)',
      bodyLineHeight: 'var(--body-line-height)'
    }
  }
}

export default theme
