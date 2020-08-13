// Team Section:

// ___________________________________________________________________

import React, { useState, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Libraries
import { useSpring } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import { Grid, Cell } from 'styled-css-grid'

// Hooks
import useHover from '../../../hooks/useHover'

// Components
import Section from '../../Section'
import Icon from '../../Icons'
import Overlay from '../../Overlay'

// UI + Styles
import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../elements'
import theme from '../../../../config/theme'

// ___________________________________________________________________

type Person = {
  person: PersonNode
  mainRef?: React.RefObject<HTMLDivElement>
}

const People: React.FC<Person> = ({ person }) => {
  return (
    <Cell>
      {/* <TeamMate key={idx} person={person} /> */}
      <S.Card aria-label="read bio">
        <Box width={[8 / 10, 6 / 10]} className="card__headshot">
          {person.headshot && (
            <Img
              fluid={person.headshot.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={person.name}
            />
          )}
        </Box>

        <div className="card__content">
          <Box mt={3}>
            <Heading as="h4">{person.name}</Heading>
            <Text as="h5" className="t--small">
              {person.jobTitle}
            </Text>
          </Box>

          <Text as="p" mt={8} className="card__meta  t--uppercase">
            read bio
            <Icon name="nextArrow" />
          </Text>
        </div>
      </S.Card>
    </Cell>
  )
}

const TeamMembers: React.FC<{ mainRef: React.RefObject<HTMLDivElement> }> = ({
  mainRef
}) => {
  const data: PersonShape = useStaticQuery(graphql`
    query PeopleQuery {
      people: allSanityPerson(sort: { fields: name, order: ASC }) {
        edges {
          node {
            _rawBio
            _rawLead
            name
            jobTitle
            boardMember
            slug {
              _key
              current
            }
            headshot {
              asset {
                fluid(maxWidth: 600) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const persons = data.people.edges
  // const boardMembers = persons.filter(person => person.node.boardMember)
  const nonBoard = persons.filter(person => !person.node.boardMember)
  const humanStaff = nonBoard.filter(
    person => person.node.name !== 'Ortho Bot'
  )

  // Navigation toggle
  // const [isNavOpen, setNavOpen] = useState(false)
  // const toggleModal = () => setNavOpen(!isNavOpen)

  // Only show item when in view
  const [interRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px'
  })
  const interSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'matrix(1, 0, 0, 1, 0, 0)' : 'matrix(1, 0, 0, 1, 0, 52)'
  })

  return (
    <>
      {/* <Overlay
        id="nav-root"
        root="root"
        isOpen={isNavOpen}
        handleExit={() => setNavOpen(false)}
        mainRef={mainRef}
        className={`nav-bg ${isNavOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
      >
        asdf
      </Overlay> */}

      <AnimatedBox style={interSpring} ref={interRef}>
        {/* <Heading as="p" my={[5, 7]}>
          Crew
        </Heading> */}
        <Grid
          columns={`repeat(auto-fit, minmax(300px, 1fr))`}
          gap={theme.space[5]}
        >
          {humanStaff.map(({ node: person }, idx) => (
            <People person={person} key={idx} />
          ))}
        </Grid>
      </AnimatedBox>
    </>
  )
}

const Team = () => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)

  return (
    <Section overflow="visible">
      <Box width={[1, 2 / 3]} mb={[7, 8]} ref={mainRef}>
        <Heading as="h5" color="tertiary">
          Team
        </Heading>
        <Heading as="h3" fontSize={3} fontWeight={400}>
          We may have different departments, but we work together to break
          conventional organizational boundaries.
        </Heading>
      </Box>
      <S.CardHolder width={1}>
        <TeamMembers mainRef={mainRef} />
      </S.CardHolder>
    </Section>
  )
}

export default Team
