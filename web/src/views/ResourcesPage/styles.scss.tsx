// ResourcesPage Styles:

import styled from 'styled-components'
import theme from '../../../config/theme'

export const ResourcesPage = styled.div`
  .resource-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    gap: ${theme.space[7]};

    width: 100%;

    @media ${theme.mq.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

export const ResourceList = styled.div`
  flex: 1 0 50%;

  h4 {
    margin-top: ${theme.space[5]};

    mark {
      background-color: ${theme.colors.primary};
      padding: ${theme.space[2]} ${theme.space[2]} ${theme.space[1]} ${theme.space[2]};
    }
  }

  a {
    display: flex;
    align-content: center;
    justify-content: space-between;

    /* background: ${theme.colors.primary}; */
    border-bottom: 1px solid ${theme.colors.tertiary};
    font-size: ${theme.fontSizes[2]};
    color: ${theme.colors.text};
    padding: calc(${theme.space[4]} + 4px) ${theme.space[3]} ${theme.space[2]} 0;
    width: 100%;

    span {
      /* background: ${theme.colors.primary}; */
    }
    svg {
      fill: ${theme.colors.black};
      width: ${theme.space[4]};
    }

    &:hover {
      background: ${theme.colors.quinary};
      padding: calc(${theme.space[4]} + 4px) ${theme.space[3]} ${theme.space[2]} ${theme.space[3]};

      svg {
        fill: ${theme.colors.black};
      }
    }
  }
`
