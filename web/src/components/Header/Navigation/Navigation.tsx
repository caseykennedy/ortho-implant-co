// Navigation

import React from 'react'
import { Link } from 'gatsby'

import { Box } from '@/components/elements'
import theme from '../../../../config/theme'
import * as S from './styles.scss'

const Navigation = () => {
  return (
    <S.Nav>
      {data.map((item, idx) => (
        <Box className="nav-link" key={idx}>
          {!item.link ? (
            <span className="nav-link__title">
              {item.name}
              {/* {item.subPage && <Icon name="carat" />} */}
            </span>
          ) : (
            <Link
              to={item.link}
              className="nav-link__title"
              activeClassName="active"
              partiallyActive={true}
            >
              {item.name}
            </Link>
          )}
          {item.subPage && (
            <Box className="sub-nav">
              {item.subPage.map((subItem, idx) => (
                <Link
                  to={subItem.link}
                  key={idx}
                  activeClassName="active"
                  partiallyActive={true}
                >
                  {subItem.name}
                </Link>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </S.Nav>
  )
}

export default Navigation

const data = [
  {
    name: 'rethink',
    link: '/rethink'
  },
  {
    name: 'implants',
    link: '/implants',
    subPage: [
      {
        name: 'External Fixation',
        link: '/implants/external-fixation'
      },
      {
        name: 'Hand and Wrist',
        link: '/implants/hand-and-wrist'
      },
      {
        name: 'Ankle',
        link: '/implants/ankle-fixation'
      },
      {
        name: 'Hip Fractures',
        link: '/implants/hip-fractures'
      },
      {
        name: 'IM Nails',
        link: '/implants/im-nails'
      },
      {
        name: 'Plates and Screws',
        link: '/implants/plates-and-screws'
      },
      {
        name: 'Cannulated Screws',
        link: '/implants/cannulated-screws'
      },
      {
        name: 'Sports Medicine',
        link: '/implants/sports-medicine'
      }
    ]
  },
  {
    name: 'about',
    link: '/about',
    subPage: [
      {
        name: 'Team',
        link: '/about#team'
      },
      {
        name: 'Careers',
        link: '/about#careers'
      }
    ]
  },
  {
    name: 'news',
    link: '/news'
  },
  {
    name: 'resources',
    link: '/resources'
  },
  {
    name: 'contact',
    link: '/contact'
  }
]
