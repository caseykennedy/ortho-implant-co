// Callout:

// ___________________________________________________________________

// Core
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import MountainLarge from '../../MountainLarge'
import Icon from '../../Icons'

// Elements
import { Box, Heading, Text } from '../../../elements'

// Theme
import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type QueryShape = {
  allSanityAnnouncement: {
    edges: {
      node: {
        message: string
        _updatedAt: string
        _id: string
      }
    }[]
  }
}

// ___________________________________________________________________

const Callout: React.FC = () => {
  // const data: QueryShape = useStaticQuery(graphql`
  //   query AnnouncementsQuery {
  //     allSanityAnnouncement {
  //       edges {
  //         node {
  //           message
  //           _updatedAt(formatString: "MMMM DD, YYYY")
  //           _id
  //         }
  //       }
  //     }
  //   }
  // `)
  // const query = data.allSanityAnnouncement.edges
  return (
    <S.Callout>
      <Box className="decorator">
        <MountainLarge />
      </Box>
      <S.Inner>
        <Box mb={8}>
          <Heading as="h3">Join our team</Heading>
        </Box>
        <Text as="p">
          We are interdependent. We trust one another and work as a team toward
          our common goals.
        </Text>
        <Link to="/resources#careers">
          Open positions
          <div className="ico"><Icon name="nextArrow" /></div>
        </Link>
      </S.Inner>
    </S.Callout>
  )
}

export default Callout

// ___________________________________________________________________
