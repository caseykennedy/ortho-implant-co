// Resources Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Resources = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  .row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &-reverse {
      flex-direction: row-reverse;
    }
  }
`

export const PageTitle = styled(Flex)`
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: stretch;

  background: ${theme.colors.bloodshot};
  padding: 0;

  .title {
    padding: ${theme.space[6]} ${theme.space[4]};
  }

  .image {
    background: #a17632;
    border-left: none;
    border-top: ${theme.border};
    overflow: hidden;

    @media ${theme.mq.small} {
      border-left: ${theme.border};
      border-top: none;
    }

    .gatsby-image-wrapper {
      max-height: 440px;
      mix-blend-mode: luminosity;
    }
  }

  h2 {
    margin-bottom: 0;
    color: ${theme.colors.primary};
    font-size: 9vw;

    @media ${theme.mq.small} {
      font-size: 6vw;
    }
  }
`

export const Enterprise = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`

export const Contact = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.background};
  width: 100%;

  .content {
    flex-direction: column;
    justify-content: space-between;
    border-top: ${theme.border};
    border-right: ${theme.border};
    padding: ${theme.space[4]};

    a {
      color: ${theme.colors.text};
      font-size: calc(${theme.fontSizes[3]} / 1.2);
      text-decoration: underline;
    }
  }

  .map {
    min-height: 40vh;
    border-top: ${theme.border};
  }
`

export const Careers = styled(Flex)`
  flex-direction: row-reverse;
  flex-wrap: wrap;
  background: ${theme.colors.primary};
  width: 100%;

  .content {
    flex-direction: column;
    justify-content: space-between;
    border-top: ${theme.border};
    border-left: 0;
    padding: ${theme.space[4]};

    @media ${theme.mq.small} {
      border-left: ${theme.border};
    }
  }

  .image {
    border-top: ${theme.border};
  }
`

export const JobPost = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.space[4]};
  margin-right: 0;

  background: ${theme.colors.secondary};
  border: ${theme.border};
  color: ${theme.colors.background};
  font-size: ${theme.fontSizes[2]};

  @media ${theme.mq.small} {
    margin-right: ${theme.space[4]};
  }

  &:hover {
    background: ${theme.colors.tertiary};
    color: ${theme.colors.text};

    svg {
      fill: ${theme.colors.text};
    }
  }

  &:nth-child(1) {
    margin-bottom: ${theme.space[4]};

    @media ${theme.mq.small} {
      margin-bottom: 0;
    }
  }

  span {
    float: right;

    svg {
      fill: ${theme.colors.background};
      width: ${theme.space[4]};
    }
  }
`
