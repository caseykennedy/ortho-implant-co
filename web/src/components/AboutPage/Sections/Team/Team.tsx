// Team Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { useTransition, useSpring } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import Swiper from 'react-id-swiper'

import useHover from '../../../../hooks/useHover'
import Section from '../../../Section'
import Icon from '../../../Icons'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

type Person = {
  person: PersonShape
}

type PeopleShape = {
  people: {
    edges: {
      node: PersonShape
    }[]
  }
}

const TeamMate: React.FC<Person> = ({ person }) => {
  const [hoverRef, isHovered] = useHover()
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
    <S.Card border={true} ref={manifestoRef} style={manifestoSpring}>
      <Box width={[7 / 10]}>
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
        <div>
          <Heading as="h4">{person.name}</Heading>
          <Text as="p" fontSize={`calc(${theme.fontSizes[1]} / 1.5)`}>
            {person.title}
          </Text>
        </div>
        <Text as="p" mt={8} className="card__meta  t--uppercase">
          read bio
          <Icon name="nextArrow" />
        </Text>
      </div>
    </S.Card>
  )
}

const TeamSwiper: React.FC = ({ children }) => {
  const params = {
    freeMode: false,
    slidesPerView: 4,
    spaceBetween: 70,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
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

const Team = () => {
  const data: PeopleShape = useStaticQuery(graphql`
    query PeopleQuery {
      people: allSanityPerson {
        edges {
          node {
            _rawBio
            _rawLead
            name
            title
            boardMember
            slug {
              _key
              current
            }
            headshot {
              asset {
                fluid(maxWidth: 1080) {
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
  // console.log('—————|— isBoardMember —|—————')
  // console.log(boardMembers)
  return (
    <Section overflow="visible">
      <Box width={[1, 2 / 3]} mb={[7, 8]}>
        <Heading as="h5" color="tertiary">
          Team
        </Heading>
        <Heading as="h3" fontSize={3} fontWeight={400}>
          We may have different departments, but we work together to break
          conventional organizational boundaries.
        </Heading>
      </Box>
      <S.CardHolder width={1}>
        <Heading as="p" mb={[5, 7]}>
          Board of Directors
        </Heading>

        <TeamSwiper>
          {boardMembers.map(({ node: person }, idx) => (
            // <TeamMate key={idx} person={person} />
            <S.Card key={idx}>
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
                    {person.title}
                  </Text>
                </Box>

                <Text as="p" mt={8} className="card__meta  t--uppercase">
                  read bio
                  <Icon name="nextArrow" />
                </Text>
              </div>
            </S.Card>
          ))}
        </TeamSwiper>

        <Heading as="p" my={[5, 7]}>
          Team
        </Heading>

        <TeamSwiper>
          {staffMembers.map(({ node: person }, idx) => (
            <S.Card key={idx}>
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
                    {person.title}
                  </Text>
                </Box>
                
                <Text as="span" mt={8} className="card__meta  t--uppercase">
                  read bio
                  <Icon name="nextArrow" />
                </Text>
              </div>
            </S.Card>
          ))}
        </TeamSwiper>
      </S.CardHolder>
    </Section>
  )
}

export default Team
