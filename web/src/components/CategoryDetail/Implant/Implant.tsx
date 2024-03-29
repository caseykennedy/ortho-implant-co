// Implant:

import React from 'react'

// Libraries
import { useSpring, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'

// Sections
import Gallery from '../Gallery'
import Video from '../Video'

// Components
import Accordion from '../../Accordion'
import BlockContent from '../../BlockContent'
import Section from '../../Section'
import Icon from '../../Icons'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '@/components/elements'

import * as S from './styles.scss'
import theme from '../../../../config/theme'
import 'swiper/css/swiper.css'

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
  fontSize: 2,
}

// const AdditionalInfo: React.FC<ImplantNode> = ({ implant }) => {
//   return (
//     <Accordion title="Additional Info" {...AccordionProps}>
//       {implant._rawAdditionalInfo && (
//         <BlockContent blocks={implant._rawAdditionalInfo || []} />
//       )}
//     </Accordion>
//   )
// }

const Implant: React.FC<ImplantNode> = ({ implant }) => {
  // Only show item when in view
  const [manifestoRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-25% 0px',
  })
  const manifestoSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'matrix(1, 0, 0, 1, 0, 0)' : 'matrix(1, 0, 0, 1, 0, 52)',
  })
  return (
    <Section id={implant.slug.current} bg="white" border={true}>
      <AnimatedBox ref={manifestoRef} style={manifestoSpring}>
        <Flex flexWrap="wrap">
          <Box width={[1, 4 / 10]} pr={[0, 8]}>
            <Gallery product={implant} />
          </Box>
          <Box width={[1, 6 / 10]} pt={[3, 4]}>
            <Heading as="h3">{implant.shortName}</Heading>

            {implant._rawDescription && <BlockContent blocks={implant._rawDescription || []} />}

            {/* <S.Resources mt={7} mb={7}>
              <Box width={[1, 1, 1 / 3]}>
                <Heading as="h4">
                  <mark>Resources:</mark>
                </Heading>
              </Box>

              <Box width={[1, 1, 2 / 3]}>
                {implant.resources.map((item, idx) => (
                  <a href={item.resource.asset.url} key={idx} target="_blank">
                    {item.title}
                    <Icon name="pdf" />
                  </a>
                ))}
              </Box>
            </S.Resources> */}

            <S.Resources mt={7} mb={7}>
              <Box width={[1, 1, 1 / 3]}>
                <Heading as="h4">
                  <mark>Resources:</mark>
                </Heading>
              </Box>

              <Box width={[1, 1, 2 / 3]}>
                {implant.resourceDocs.map((item, idx) => (
                  <a href={item.resource.document.asset.url} key={idx} target="_blank">
                    {item.title}
                    <Icon name="pdf" />
                  </a>
                ))}
              </Box>
            </S.Resources>

            <Accordion title="Features" {...AccordionProps}>
              {implant._rawFeatures && (
                <Box mt={3}>
                  <BlockContent blocks={implant._rawFeatures || []} />
                </Box>
              )}
            </Accordion>

            {implant.videos[0] && (
              <Accordion title="Video" {...AccordionProps}>
                {implant.videos.map((video, idx) => (
                  <Video src={video.url} title={video.title} key={idx} />
                ))}
              </Accordion>
            )}
          </Box>
        </Flex>
      </AnimatedBox>
    </Section>
  )
}

export default Implant
