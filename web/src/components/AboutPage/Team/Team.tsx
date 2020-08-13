// Team Section:

// ___________________________________________________________________

import React, { useState, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Libraries
import { useTransition, useSpring } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import Swiper from 'react-id-swiper'

import { Grid, Cell } from 'styled-css-grid'

import useHover from '../../../hooks/useHover'
import Section from '../../Section'
import Icon from '../../Icons'
import Overlay from '../../Overlay'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../elements'
import theme from '../../../../config/theme'

// ___________________________________________________________________

type Person = {
  person: PersonShape
  mainRef: React.RefObject<HTMLDivElement>
}

type PeopleShape = {
  people: {
    edges: {
      node: PersonShape
    }[]
  }
}

const TeamSwiper: React.FC = ({ children }) => {
  const params = {
    freeMode: false,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        grabCursor: true
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        grabCursor: true
      },
      320: {
        slidesPerView: 1,
        spaceBetween: -2,
        grabCursor: true
      }
    }
  }
  return <Swiper {...params}>{children}</Swiper>
}

const TeamMembers: React.FC<{ mainRef: React.RefObject<HTMLDivElement> }> = ({
  mainRef
}) => {
  const data: PeopleShape = useStaticQuery(graphql`
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
  const people = data.people.edges
  const boardMembers = people.filter(person => person.node.boardMember)
  const staffMembers = people.filter(person => !person.node.boardMember)
  const humanStaff = staffMembers.filter(
    person => person.node.name !== 'Ortho Bot'
  )

  // console.log('—————|— Human —|—————')
  // console.log(humanStaff)

  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  // Only show item when in view
  const [manifestoRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px'
  })
  const manifestoSpring = useSpring({
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

      <Heading as="p" mb={[5, 7]}>
        Board of Directors
      </Heading>

      <Grid
        columns={`repeat(auto-fit, minmax(300px, 1fr))`}
        gap={theme.space[5]}
      >
        {boardMembers.map(({ node: person }, idx) => (
          <Cell key={idx}>
            {/* <TeamMate key={idx} person={person} /> */}
            <S.Card
              onClick={toggleModal}
              aria-label="read bio"
            >
              <Box width={[7 / 10]} className="card__headshot">
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
        ))}
      </Grid>

      <Heading as="p" my={[5, 7]}>
        Crew
      </Heading>

      <Grid
        columns={`repeat(auto-fit, minmax(300px, 1fr))`}
        gap={theme.space[3]}
      >
        {humanStaff.map(({ node: person }, idx) => (
          <Cell key={idx}>
            <S.Card>
              <Box width={[7 / 10]} className="card__headshot">
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

                <Text as="span" mt={8} className="card__meta  t--uppercase">
                  read bio
                  <Icon name="nextArrow" />
                </Text>
              </div>
            </S.Card>
          </Cell>
        ))}
      </Grid>
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
