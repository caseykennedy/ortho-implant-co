// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import useToggle from '../../../hooks/useToggle'

import Icon from '../../Icons'
import { Box, Text } from '../../../elements'

import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {}

// ___________________________________________________________________

const Navigation: React.FC = () => {
  // Toggle the sub nav on hover
  const { isShowing, toggle } = useToggle()
  return (
    <>
      <S.Nav>
        {data.map((item, idx) => (
          <Box className="nav-link" key={idx}>
            {!item.link ? (
              <span className="nav-link__title">{item.name}</span>
            ) : (
              <Link
                to={item.link}
                className="nav-link__title"
                activeClassName="active"
              >
                {item.name}
              </Link>
            )}
          </Box>
        ))}
      </S.Nav>
    </>
  )
}

export default Navigation

// ___________________________________________________________________

const data = [
  {
    name: 'About',
    link: '/about'
  }
]
