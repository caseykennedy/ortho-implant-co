// Implant:

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

// Libraries

// Sections
import Gallery from '../Gallery'
import PrevNext from '../PrevNext'
import Video from '../Video'

// Components
import Accordion from '../../Accordion'
import BlockContent from '../../BlockContent'
import Section from '../../Section'
import Icon from '../../Icons'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '../../../elements'

import * as S from './styles.scss'
import theme from '../../../../config/theme'
import 'swiper/css/swiper.css'

// ___________________________________________________________________

type ImplantNode = {
  implant: ProductNode
}

const AccordionProps = {
  chevronColor: theme.colors.secondary,
  chevronWidth: theme.space[4],
  color: theme.colors.secondary,
  colorActive: theme.colors.secondary,
  borderColor: theme.colors.secondary,
  bg: 'transparent',
  pt: [4],
  pb: [4],
  pr: [0],
  pl: [0],
  fontSize: 2
}

const AdditionalInfo: React.FC<ImplantNode> = ({ implant }) => {
  return (
    <Accordion title="Additional Info" {...AccordionProps}>
      {implant._rawAdditionalInfo && (
        <BlockContent blocks={implant._rawAdditionalInfo || []} />
      )}
    </Accordion>
  )
}

const Implant: React.FC<ImplantNode> = ({ implant }) => {
  return (
    <Section bg="white" border={true}>
      <Flex flexWrap="wrap">
        <Box width={[1, 4 / 10]} pr={[0, 7]}>
          <Gallery product={implant} />
        </Box>
        <Box width={[1, 6 / 10]} pt={[3, 4]}>
          <Heading as="h2">{implant.name}</Heading>

          {implant._rawDescription && (
            <BlockContent blocks={implant._rawDescription || []} />
          )}

          <S.Resources mt={7} mb={7}>
            <Heading as="h4">
              <mark>Resources</mark>
            </Heading>

            {implant.resources.map((resource, idx) => (
              <a href={resource.url} key={idx} target="_blank">
                {resource.title}
                <Icon name="pdf" />
              </a>
            ))}
          </S.Resources>

          <Accordion title="Features" {...AccordionProps}>
            {implant._rawFeatures && (
              <Box mt={3}>
                <BlockContent blocks={implant._rawFeatures || []} />
              </Box>
            )}
          </Accordion>

          {implant.videoURL && (
            <Accordion title="Video" {...AccordionProps}>
              <Video src={implant.videoURL} />
            </Accordion>
          )}

          {/* <Box width={[1]}>
            <S.Resources>
              <Heading as="h4">{implant.name}</Heading>

              {implant._rawAdditionalInfo && (
                <BlockContent blocks={implant._rawAdditionalInfo || []} />
              )}
            </S.Resources>
          </Box> */}
          {/* <Flex
            width={[1]}
            bg="background"
            flexWrap="wrap"
            style={{ overflow: 'hidden', borderTop: theme.border }}
          >
            <Flex width={1} flexWrap="wrap" flexDirection="row">
              <Box bg="" p={theme.gutter.axis} width={[1]}>
                <Heading as="h4">Features</Heading>

                {implant._rawFeatures && (
                  <BlockContent blocks={implant._rawFeatures || []} />
                )}
              </Box>
            </Flex>
          </Flex> */}
        </Box>
      </Flex>
    </Section>
  )
}

export default Implant
