// Previous / Next pre-footer
// TODO: button bg image

// ___________________________________________________________________

import React from 'react'
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const PrevNext: React.FC<DepartmentShape> = ({ pageContext }) => {
  const page = pageContext.page
  const prev = pageContext.prev
  const next = pageContext.next
  let path
  if (!page.government) {
    path = 'departments'
  } else {
    path = 'government'
  }
  // console.log('—————|— Prev / Next —|—————')
  // console.log(prev)
  // console.log(next)
  return (
    <S.PrevNext width={1}>
      {!prev ? (
        <S.Button to="/resources">Resources</S.Button>
      ) : (
        <S.Button to={`/${path}/${prev.slug.current}`}>
          {prev.pageTitle}
        </S.Button>
      )}
      {!next ? (
        <S.Button to="/resources">Resources</S.Button>
      ) : (
        <S.Button to={`/${path}/${next.slug.current}`}>
          {next.pageTitle}
        </S.Button>
      )}
    </S.PrevNext>
  )
}

export default PrevNext
