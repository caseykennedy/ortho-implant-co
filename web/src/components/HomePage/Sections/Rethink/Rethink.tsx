// Rethink Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { Tabs } from '@feuer/react-tabs'
import Swiper from 'react-id-swiper'

import BlockContent from '../../../BlockContent'
import Section from '../../../Section'
import Button from '../../../../elements/Button'

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
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
      // renderBullet: () => {
      //   return <Titles />
      // }
    }
  }
  return (
    <Swiper {...params}>
      {panels.map(panel => (
        <S.Panel key={panel.title}>
          <Flex width={[1, 1 / 2]} p={theme.gutter.axis} className="content">
            <div>
              <Heading
                as="h3"
                fontSize={5}
                lineHeight={1}
                mb={0}
                style={{ textTransform: 'uppercase' }}
              >
                {panel.tag}
              </Heading>
              <Heading as="h4">For {panel.title}</Heading>
            </div>
            <div>
              {panel._rawMessage && (
                <BlockContent blocks={panel._rawMessage || []} />
              )}
              <Box mb={[-5, -7]}>
                <Button to={`/${panel.linkTo}`} invert={true}>
                  {panel.linkTitle}
                </Button>
              </Box>
            </div>
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
      ))}
    </Swiper>
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
    <Section overflow="hidden">
      <div className="cta">
        <Button to={`/${query.linkTo}`}>{query.linkTitle}</Button>
      </div>
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
    </Section>
  )
}

export default Rethink
