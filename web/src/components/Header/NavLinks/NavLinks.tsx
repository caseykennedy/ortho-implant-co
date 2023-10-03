// NavLinks:

import React from 'react'
import { Link } from 'gatsby'
import { useTransition } from 'react-spring'
import * as S from './styles.scss'

const navData = [
  {
    name: 'rethink',
    link: '/rethink'
  },
  {
    name: 'implants',
    link: '/implants'
  },
  {
    name: 'about oic',
    link: '/about'
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

type LinkProps = {
  item: any
  transition: any
  handleExitOnClick: () => any
}

type NavLinksProps = {
  handleExit: () => any
  isNavOpen: boolean
}

const NavLink = ({ item, transition, handleExitOnClick }: LinkProps) => {
  // console.log('—————|— Navigation —|—————')
  // console.log(item.subPage)

  return (
    <S.NavLink onClick={handleExitOnClick} style={transition}>
      <div className="nav-mobile-sub">
        <Link to={item.link} className="nav-mobile__link">
          {item.name}
        </Link>
      </div>
    </S.NavLink>
  )
}

const NavLinks: React.FC<NavLinksProps> = ({ handleExit, isNavOpen }) => {
  const navTransitions = useTransition(
    isNavOpen ? navData : [],
    item => item.name,
    {
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      },
      trail: 60,
      unique: true
    }
  )
  return (
    <S.NavLinks>
      {navTransitions.map(({ item, key, props }) => (
        <NavLink
          key={key}
          transition={props}
          handleExitOnClick={() => handleExit()}
          item={item}
        />
      ))}
    </S.NavLinks>
  )
}

export default NavLinks
