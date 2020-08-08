// Rethink Section:

// ___________________________________________________________________

import React, { useState } from 'react'
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
import { Box, Flex, Heading, Text } from '../../../../elements'
import theme from '../../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const TabsPanel: React.FC<{ panels: RethinkPanelShape }> = ({ panels }) => {
  const [values, setValues] = useState(panels[0])

  return (
    <Flex alignItems="center" width={1}>
      <S.ButtonGroup>
        {panels.map((panel, idx) => (
          <S.Tab
            key={idx}
            active={values === panel}
            onClick={() => setValues(panel)}
          >
            <Heading as="h4">{panel.tag} for {panel.title}</Heading>
            {/* <Heading as="h4">For {panel.title}</Heading> */}
            {panel._rawMessage && (
              <BlockContent blocks={panel._rawMessage || []} />
            )}
          </S.Tab>
        ))}
        {/* <Box width={1 / 6}>
          {values && (
            <Img
              fluid={values.image.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={`Affordable Implants for`}
            />
          )}
        </Box> */}
      </S.ButtonGroup>
    </Flex>
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
    <S.Rethink bg="background" style={{ position: 'relative', zIndex: 99 }}>
      <Box width={[1, 1 / 2]} className="rethink__message">
        <div className="sticky">
          <Heading as="h5" color="tertiary">
            {query.title}
          </Heading>
          <Heading as="h2" fontSize={3}>
            {query.heading}
          </Heading>
          {/* <S.Decorator>
          <Hexagons />
        </S.Decorator> */}
        </div>
      </Box>

      <Box width={[1, 1 / 2]} className="rethink__values">
        <TabsPanel panels={query.tabPanels} />
      </Box>
    </S.Rethink>
  )
}

export default Rethink
