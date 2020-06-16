// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import Icon from '../../Icons'
import { Box } from '../../../elements'

import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Navigation = () => {
  return (
    <S.Nav>
      {data.map((item, idx) => (
        <Box className="nav-link" key={idx}>
          <Link
            to={item.link}
            className="nav-link__title"
            activeClassName="active"
          >
            {item.name}
          </Link>
        </Box>
      ))}
    </S.Nav>
  )
}

export default Navigation

// ___________________________________________________________________

const data = [
  {
    name: 'rethink',
    link: '/rethink'
  },
  {
    name: 'about oic',
    link: '/about'
  },
  {
    name: 'implants',
    link: '/implants'
  },
  {
    name: 'blog',
    link: '/blog'
  },
  {
    name: 'contact',
    link: '/contact'
  }
]
