// Form Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Form = styled.div`
  margin: 0 auto;
  width: 100%;

  legend {
    padding-bottom: ${theme.space[3]};
    width: 100%;
  }

  fieldset {
    border: none;
    margin: 0 auto;
    padding: 0;
    width: 100%;

    label {
      display: none;
    }

    input,
    textarea,
    select {
      background: transparent;
      border: 0;
      border-bottom: ${theme.border};
      border-color: ${theme.colors.tertiary};
      border-radius: 0;

      font-weight: 400;
      letter-spacing: ${theme.root.font.baseLetterSpacing};
      margin: 0;
      padding: ${theme.space[5]} 0 ${theme.space[2]};
      width: 100%;

      &:focus {
        border-color: ${theme.colors.black};
        outline: none;
      }

      &::placeholder {
        color: ${theme.colors.gray};
      }
    }

    .radio-group {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin-bottom: ${theme.space[2]};

      input {
        display: flex;
        align-items: center;
        margin-right: ${theme.space[2]};
        height: 20px;
        width: 20px;
      }

      label {
        display: inline;
      }
    }

    .form-group {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;

      @media ${theme.mq.desktop} {
        padding-bottom: ${theme.space[3]};
      }

      &__box {
        &:first-child {
          padding-left: 0;
        }

        @media ${theme.mq.desktop} {
          padding-bottom: 0;
          padding-left: ${theme.space[3]};
        }
      }

      .form-heading {
        display: block;
        font-weight: 500;
        padding-bottom: calc(${theme.root.space} / 3.5);
        text-align: left;
        width: 100%;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.primary};
    border: none;
    color: ${theme.colors.text};
    cursor: pointer;
    font-family: ${theme.fonts.heading};
    font-size: calc(${theme.fontSizes[2]} * 1.15);
    font-weight: 500;
    text-transform: uppercase;
    padding: ${theme.space[4]} ${theme.space[3]} ${theme.space[3]};

    &:hover {
      background: ${theme.colors.tertiary};
      color: ${theme.colors.black};
    }
  }
`
