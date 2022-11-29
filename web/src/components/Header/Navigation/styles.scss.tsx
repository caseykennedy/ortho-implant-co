// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Nav = styled.nav`
  display: flex;
  align-items: flex-start;
  z-index: 999;

  width: 100%;
  height: ${theme.headerHeight};
  padding: ${theme.space[4]} ${theme.space[5]};
  background: ${theme.colors.background};

  .nav-link {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes[2]};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    margin-left: ${theme.space[4]};
    position: relative;
    cursor: pointer;

    transition: ${theme.transition.all};

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      .sub-nav {
        display: initial;
        opacity: 1;
        transition: ${theme.transition.all};
      }
    }

    a {
      &::before {
        content: '';
        background: ${theme.colors.tertiary};
        width: 0;
        height: 2px;

        position: absolute;

        bottom: 0;
        left: 0;
        z-index: 0;

        transition: width 0.222s ease-in-out;
      }

      &.active,
      &:hover {
        color: ${theme.colors.primary};
      }
    }

    &__title {
      display: flex;
      position: relative;
      color: ${theme.colors.text};
      transition: ${theme.transition.all};

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          transform: rotate(90deg);
          width: 8px;
          margin-top: -${theme.space[1]};
          margin-left: ${theme.space[2]};
        }
      }
    }

    .sub-nav {
      background: ${theme.colors.background};
      border-left: 1px solid ${theme.colors.black};
      border-bottom: 1px solid ${theme.colors.black};

      padding: ${theme.space[3]} 0 0.2rem ${theme.space[3]};
      position: absolute;
      left: -1.15rem;
      width: auto;
      min-width: 200px;

      display: none;
      opacity: 0;
      transition: ${theme.transition.all};

      a {
        color: ${theme.colors.text};
        font-family: ${theme.fonts.body};
        font-size: calc(${theme.fontSizes[1]} / 1.1);
        text-transform: capitalize;
        letter-spacing: 0.5px;

        display: block;
        margin: 0;
        padding: calc(${theme.space[1]} / 2) 0;
        white-space: nowrap;

        &.active,
        &:hover {
          color: ${theme.colors.primary};
          margin-left: ${theme.space[1]};
        }
      }
    }
  }
`

export const SignIn = styled(Link)`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes[1]};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  display: flex;
  align-items: center;
  box-sizing: content-box;

  height: ${theme.headerHeight};
  padding: 0 ${theme.space[4]};
  border-left: ${theme.border};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[2]} ${theme.space[4]};
  }

  &:hover {
    color: ${theme.colors.white};
    background: ${theme.colors.bloodshot};
  }
`
