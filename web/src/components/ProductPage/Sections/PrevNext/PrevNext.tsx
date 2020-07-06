// Previous / Next pre-footer
// TODO: button bg image

// ___________________________________________________________________

import React from 'react'

// Components
import Icon from '../../../../components/Icons'

// Elements
import { Heading, Box, Flex } from '../../../../elements'

// Theme
import * as S from './styles.scss'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

const PrevNext: React.FC<ProductContextShape> = ({ pageContext }) => {
  const page = pageContext.page
  const prev = pageContext.prev
  const next = pageContext.next
  // console.log('—————|— Prev / Next —|—————')
  // console.log(prev)
  // console.log(next)
  return (
    <S.PrevNext width={1}>
      {!prev ? (
        <S.Button to="/implants">All implants</S.Button>
      ) : (
        <S.Button to={`/implants/${prev.slug.current}`}>
          <Flex className="button__title">
            previous
            <span>
              <Icon name="nextArrow" />
            </span>
          </Flex>

          {prev.shortName}
        </S.Button>
      )}
      {!next ? (
        <S.Button to="/implants">All implants</S.Button>
      ) : (
        <S.Button to={`/implants/${next.slug.current}`}>
          {next.shortName}
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
