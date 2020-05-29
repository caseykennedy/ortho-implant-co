// Staff members:

// ___________________________________________________________________

import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import { Text, Box, Flex } from '../../../elements'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Staff: React.FC<DepartmentShape> = ({ pageContext }) => {
  const data: PeopleShape = useStaticQuery(graphql`
    query PeopleQuery {
      people: allSanityPerson {
        edges {
          node {
            cell
            department
            email
            fax
            id
            image {
              asset {
                fluid(maxWidth: 1080) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            name
            seated
            telephone
            title
            slug {
              current
            }
            _rawBio
            bio {
              _key
              _type
              style
              list
            }
          }
        }
      }
    }
  `)
  const pageDep = pageContext.page.department
  const filteredPeople = data.people.edges.filter(
    person =>
      // tslint:disable-next-line: triple-equals
      pageDep == person.node.department[0] ||
      // tslint:disable-next-line: triple-equals
      pageDep == person.node.department[1]
  )
  // console.log('—————|— People —|—————')
  // console.log(pageDep)
  // console.log(data.people)
  return (
    <S.Staff>
      {filteredPeople.map(person => (
        <S.StaffMember width={[1, 1 / 2]} key={person.node.id}>
          <Box width={1 / 3}>
            <Img
              fluid={person.node.image.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={person.node.name}
            />
          </Box>
          <Flex width={2 / 3} className="team-member__detail">
            <Text as="p" fontSize={2}>{person.node.name}</Text>
            <Text mt={7}>
              {person.node.title}
              <br />
              {person.node.seated ? `Seated: ${person.node.seated}` : null}
            </Text>
          </Flex>
        </S.StaffMember>
      ))}
    </S.Staff>
  )
}

export default Staff
