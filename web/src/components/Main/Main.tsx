import styled from 'styled-components'
import theme from '../../../config/theme'

type Props = {
  bg?: string
}

const Main = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: ${theme.space[6]} ${theme.space[4]};

  background: ${p => (!p.bg ? theme.colors.background : p.bg)};
  border-top: ${theme.border};
  border-right: none;

  @media ${theme.mq.sm} {
    border-right: ${theme.border};
  }
`

export default Main
