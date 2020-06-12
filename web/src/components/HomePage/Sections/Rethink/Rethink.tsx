// Rethink Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { Tabs } from '@feuer/react-tabs'

import BlockContent from '../../../BlockContent'
import Section from '../../../Section'
import Button from '../../../../elements/Button'

import { Box, Flex, Heading } from '../../../../elements'
import theme from '../../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const TabsPanel: React.FC<{ panels: RethinkPanelShape }> = ({ panels }) => {
  return (
    <Tabs
      activeTab={{
        id: 'Doctors'
      }}
    >
      {panels.map(panel => (
        <Tabs.Tab id={panel.title} title={panel.title} key={panel.title}>
          <S.Panel>
            <Flex width={[1, 1 / 2]} p={[5, 7]} className="content">
              <Box>
                <Heading as="h5" color="white">
                  {panel.tag}
                </Heading>
                <Heading as="h2">For {panel.title}</Heading>
              </Box>
              <Box>
                {panel._rawMessage && (
                  <BlockContent blocks={panel._rawMessage || []} />
                )}
                <Box mb={[-5, -7]}>
                  <Button to={`/${panel.linkTo}`} invert={true}>
                    {panel.linkTitle}
                  </Button>
                </Box>
              </Box>
            </Flex>
            <Box width={[1, 1 / 2]}>
              {panel.image && (
                <Img
                  fluid={panel.image.asset.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={`Affordable Implants for ${panel.title}`}
                />
              )}
            </Box>
          </S.Panel>
        </Tabs.Tab>
      ))}
    </Tabs>
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
                    src
                    aspectRatio
                    base64
                    sizes
                    srcSet
                    srcSetWebp
                    srcWebp
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
    <Section border={false}>
      <Box className="cta">
        <Button to={`/${query.linkTo}`}>{query.linkTitle}</Button>
      </Box>
      <Box width={[1, 2 / 3]} mt={[8, 0]}>
        <Heading as="h5" color="tertiary">
          {query.title}
        </Heading>
        <Heading as="h2">{query.heading}</Heading>
      </Box>
      <S.Learn width={1} mt={12}>
        <TabsPanel panels={query.tabPanels} />
      </S.Learn>
    </Section>
  )
}

export default Rethink
