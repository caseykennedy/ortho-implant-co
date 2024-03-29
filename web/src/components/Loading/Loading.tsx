// Loading:

import React from 'react'
import { useSpring, config } from 'react-spring'

// Components
import Logo from '../Logo'

// Elements
import { Flex } from '@/components/elements'

// Theme
import GlobalStyles from '../../styles/global'
import * as S from './styles.scss'
import theme from '../../../config/theme'

const Loading = () => {
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  return (
    <>
      <GlobalStyles />
      <S.Loading style={pageAnimation}>
        <Flex className="animation">
          <Logo />
        </Flex>
      </S.Loading>
    </>
  )
}

export default Loading
