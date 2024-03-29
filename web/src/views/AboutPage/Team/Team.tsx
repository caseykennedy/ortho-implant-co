// Team Section:

import React, { useState, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

// Libraries
import { useSpring } from 'react-spring'
import { useInView } from 'react-intersection-observer'

// Components
import Section from '@/components/Section'
import Icon from '@/components/Icons'
import Overlay from '@/components/Overlay'
import Bio from '../Bio'

// UI + Styles
import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '@/components/elements'
import theme from '../../../../config/theme'

type Person = {
  person: PersonNode
  mainRef?: React.RefObject<HTMLDivElement>
  toggleModal: () => any
}

const People: React.FC<Person> = ({ person, toggleModal }) => {
  return (
    <S.Card onClick={toggleModal} aria-label="read bio">
      <Box width={8 / 10} className="card__headshot">
        {person.headshot && (
          <GatsbyImage
            image={person.headshot.asset.gatsbyImageData}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={person.name}
          />
        )}
      </Box>

      <div className="card__content">
        <Box mt={0}>
          <Heading as="h4">{person && person.name}</Heading>
          <Text as="h5" className="t--small">
            {person && person.jobTitle}
          </Text>
        </Box>

        <Box mt={0} className="card__meta">
          <span>read bio</span>
          <Icon name="nextArrow" />
        </Box>
      </div>
    </S.Card>
  )
}

const TeamMembers: React.FC<{ mainRef: React.RefObject<HTMLDivElement> }> = ({
  mainRef
}) => {
  const data: PersonShape = useStaticQuery(graphql`
    query PeopleQuery {
      people: allSanityPerson(sort: { fields: order, order: ASC }) {
        edges {
          node {
            _rawBio
            _rawLead
            name
            jobTitle
            boardMember
            order
            slug {
              _key
              current
            }
            headshot {
              asset {
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                  aspectRatio: 0.75
                )
                url
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
    person => person.node.name !== 'Outside Press'
  )

  const [bio, setBio] = useState(humanStaff[0].node)

  // console.log(bio)

  // Navigation toggle
  const [isModalOpen, setModalOpen] = useState(false)
  const toggleModal = () => setModalOpen(!isModalOpen)

  // Only show item when in view
  const [interRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-222px 0px'
  })
  const interSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'matrix(1, 0, 0, 1, 0, 0)' : 'matrix(1, 0, 0, 1, 0, 52)'
  })

  return (
    <>
      <Overlay
        id="overlay-root"
        root="root"
        isOpen={isModalOpen}
        handleExit={() => setModalOpen(false)}
        mainRef={mainRef}
        className={`nav-bg ${isModalOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
      >
        {isModalOpen && <Bio bio={bio} setModalOpen={setModalOpen} />}
      </Overlay>

      <AnimatedBox style={interSpring} ref={interRef} width={1}>
        {/* <Heading as="p" my={[5, 7]}>
          Crew
        </Heading> */}
        <div className="grid">
          {humanStaff.map(({ node: person }, idx) => (
            <Box onClick={() => setBio(person)} key={idx}>
              <People person={person} toggleModal={toggleModal} />
            </Box>
          ))}
        </div>
      </AnimatedBox>
    </>
  )
}

const Team = () => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)

  return (
    <Section overflow="visible" id="team">
      <Box width={[1, 2 / 3]} mb={[7, 8]}>
        <Heading as="h5" color="tertiary">
          Team
        </Heading>
        <Heading as="h3" fontSize={3} fontWeight={400}>
          We may have different departments, but we work together to break
          conventional organizational boundaries.
        </Heading>
      </Box>
      <S.CardHolder>
        <TeamMembers mainRef={mainRef} />
      </S.CardHolder>
    </Section>
  )
}

export default Team
