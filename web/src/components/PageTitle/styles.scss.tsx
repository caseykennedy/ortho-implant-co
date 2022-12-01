// PageTitle Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const PageTitle = styled.div<{ image?: object }>`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  /* height: calc(20vh - ${theme.headerHeight}); */
  min-height: calc(${theme.space[3]} * 10);
  background: ${theme.colors.secondary};

  @media ${theme.mq.tablet} {
    padding-left: ${theme.logoWidth};
    position: ${p => (!p.image ? 'relative' : 'absolute')};
  }
`

export const Sideboard = styled.div`
  color: ${theme.colors.tertiary};
  writing-mode: vertical-lr;
  text-orientation: mixed;

  background: ${theme.colors.secondary};
  margin-top: -${theme.space[5]};
  padding: ${theme.space[5]} ${theme.space[3]};
  width: ${theme.logoWidth};
  display: none;

  h5 {
    transform: rotate(180deg);
  }

  @media ${theme.mq.tablet} {
    display: block;
  }
`

export const Billboard = styled.div<{ border?: boolean }>`
  display: flex;
  align-items: flex-end;
  flex: 1;

  background: ${theme.colors.background};
  border-left: none;

  /* margin-bottom: ${theme.space[5]}; */
  padding: ${theme.space[4]} ${theme.space[4]} ${theme.space[2]};
  position: relative;

  z-index: 9;

  @media ${theme.mq.tablet} {
    border-left: ${theme.border};
    border-bottom: ${theme.border};
    padding: ${theme.space[2]} ${theme.space[5]} ${theme.space[2]} ${theme.space[5]};
  }

  @media ${theme.mq.desktop} {
    margin-bottom: 0;
  }

  h1 {
    text-transform: uppercase;
    font-size: calc(${theme.fontSizes[3]} / 1);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[5]} / 1.15);
    }
  }
`

export const Figure = styled.div`
  position: relative;
  width: 100%;
  background: ${theme.colors.secondary};
  top: -${theme.space[2]};

  @media ${theme.mq.tablet} {
    margin-top: 0;
  }
`
