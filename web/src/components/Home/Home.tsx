// Home:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import ImgMatch from '../ImgMatch'
import { Text, Heading, Box, Flex } from '../../elements'

import Icon from '../Icons'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const Home: React.FC = () => {
  const data = useStaticQuery<HomePageShape>(graphql`
    query HomePageQuery {
      allSanityHomePage {
        edges {
          node {
            message
            linkTo
            linkTitle
          }
        }
      }
    }
  `)
  const homePage = data.allSanityHomePage.edges[0].node
  // Ref <main> to lock body for modal/overlay
  // const mainRef = useRef<HTMLDivElement>(null)
  // const sanity = useSanityDepartment()
  // console.log('—————|— SANITY —|—————')
  // console.log(sanity)
  return (
    <S.HomePage>
      index
    </S.HomePage>
  )
}

export default Home
