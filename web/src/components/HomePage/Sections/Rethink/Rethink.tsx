// Rethink Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// Libraries
import Img from 'gatsby-image/withIEPolyfill'
import Swiper from 'react-id-swiper'

// Components
import BlockContent from '../../../BlockContent'
import Section from '../../../Section'
import Button from '../../../../elements/Button'
import Hexagons from '../../../Hexagons'

// Theme
import { Box, Flex, Heading } from '../../../../elements'
import theme from '../../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const TabsPanel: React.FC<{ panels: RethinkPanelShape }> = ({ panels }) => {
  const Titles = () => {
    return (
      <span>
        {panels.map((tab, idx) => (
          <p key={idx}>{tab.title}</p>
        ))}
      </span>
    )
  }
  // Swiper paramaters
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true
    // autoplay: {
    //   delay: 8000,
    //   disableOnInteraction: true
    // }
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // }
  }
  return (
    <>
      {panels.map((panel, idx) => (
        <Box width={[1, 1 / 2]} mb={7} className="content" key={idx}>
          <div>
            <Heading as="h3" mb={1}>{panel.tag}</Heading>
            <Heading as="h4">
              <Box as="span">For</Box> {panel.title}
            </Heading>
          </div>
          <div>
            {panel._rawMessage && (
              <BlockContent blocks={panel._rawMessage || []} />
            )}
            {/* <Box mb={[-5, -7]}>
            <Button to={`/${panel.linkTo}`} invert={true}>
              {panel.linkTitle}
            </Button>
          </Box> */}
          </div>
          {/* <Box
        width={[1, 1 / 2]}
        m={[5, 0, 0]}
        style={{ maxHeight: '75vh', overflow: 'hidden' }}
      >
        {panel.image && (
          <Img
            fluid={panel.image.asset.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={`Affordable Implants for ${panel.title}`}
          />
        )}
      </Box> */}
        </Box>
      ))}
    </>
  )
}

// ___________________________________________________________________

const Rethink = () => {
  const data: RethinkSectionQueryShape = useStaticQuery(graphql`
    query RethinkSectionQuery {
      allSanityHomeRethink {
        edges {
          node {
            heading
            title
            linkTitle
            linkTo
            id
            tabPanels {
              linkTo
              linkTitle
              tag
              title
              image {
                asset {
                  fluid(maxWidth: 1080) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
              _rawMessage
            }
          }
        }
      }
    }
  `)
  const query = data.allSanityHomeRethink.edges[0].node
  // console.log('---_- Rethink -_---')
  // console.log(query)
  return (
    <Section overflow="hidden" bg="background">
      <Box className="cta">
        <Button to={`/${query.linkTo}`}>{query.linkTitle}</Button>
      </Box>
      <Box width={[1, 1 / 2]} mt={[8, 0]}>
        <Heading as="h5" color="tertiary">
          {query.title}
        </Heading>
        <Heading as="h2" fontSize={3}>
          {query.heading}
        </Heading>
      </Box>
      <S.Learn width={1} mt={12}>
        <TabsPanel panels={query.tabPanels} />
      </S.Learn>
      <S.Decorator>
        <Hexagons />
      </S.Decorator>
    </Section>
  )
}

export default Rethink
