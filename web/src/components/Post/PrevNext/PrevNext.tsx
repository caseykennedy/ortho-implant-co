// Previous / Next pre-footer
// TODO: button bg image

import React from 'react'

// Components
import Icon from '../../Icons'

// Elements
import { Flex } from '@/components/elements'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

const path = 'news'

const PrevNext: React.FC<PostContextShape> = ({ pageContext }) => {
  const page = pageContext.page
  const prev = pageContext.prev
  const next = pageContext.next
  // console.log('—————|— Prev / Next —|—————')
  // console.log(prev)
  // console.log(next)
  return (
    <S.PrevNext width={1}>
      {!prev ? (
        <S.Button to={`/${path}`}>View all</S.Button>
      ) : (
        <S.Button to={`/${path}/${prev.slug.current}`}>
          <Flex className="button__title">
            previous
            <span>
              <Icon name="nextArrow" />
            </span>
          </Flex>

          {prev.title}
        </S.Button>
      )}
      {!next ? (
        <S.Button to={`/${path}`}>View all</S.Button>
      ) : (
        <S.Button to={`/${path}/${next.slug.current}`}>
          {next.title}
          <Flex className="button__title button__title--next">
            next
            <span>
              <Icon name="nextArrow" />
            </span>
          </Flex>
        </S.Button>
      )}
    </S.PrevNext>
  )
}

export default PrevNext
