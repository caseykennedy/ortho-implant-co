// Rethink Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { useSpring, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'

import BlockContent from '../../../BlockContent'
import ImgMatch from '../../../ImgMatch'
import Accordion from '../../../Accordion'

import useRethinkPage from '../../../../hooks/useRethinkPage'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

type NotionData = {
  data: {
    _rawContent: string
    lead: string
    subTitle: string
    title: string
    image: {
      asset: {
        fluid: ImageShape
      }
    }
  }
}

// ___________________________________________________________________

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.text,
  borderColor: theme.colors.secondary,
  fontSize: [3, 3, 4],
  bg: 'quinary'
}

const Notion: React.FC<NotionData> = ({ data }) => {
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
    <S.Notion ref={manifestoRef} style={manifestoSpring}>
      <Accordion
        title={data.title}
        subTitle={data.subTitle}
        {...AccordionProps}
      >
        <Flex
          flexDirection="row-reverse"
          flexWrap="wrap"
          // style={{
          //   borderTop: theme.border
          // }}
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            p={theme.gutter.axis}
            width={[1, 1, 6 / 8]}
            bg="secondary"
            color="white"
            className="content"
          >
            {data.lead && (
              <Heading
                as="h3"
                fontSize={[`1.75rem`, `2.5rem`]}
                fontWeight={400}
              >
                {data.lead}
              </Heading>
            )}
            {data._rawContent && (
              <BlockContent blocks={data._rawContent || []} />
            )}
          </Flex>

          <Box width={[1, 1, 2 / 8]} className="image">
            {data.image && (
              <Img
                fluid={data.image.asset.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={data.title}
              />
            )}
          </Box>
        </Flex>
      </Accordion>
    </S.Notion>
  )
}

const Rethink = () => {
  const query = useRethinkPage()

  return (
    <S.Rethink>
      <Box px={theme.gutter.axis}>
        <Heading
          as="h3"
          color="primary"
          fontWeight={400}
          fontSize={'1.75rem'}
          className="t--uppercase"
        >
          {/* {query.title} */}
          <Box as="span" color="tertiary">
            we need to
          </Box>{' '}
          rethink
        </Heading>
      </Box>
      <Box>
        {query.rethinkNotions.map((notion, idx) => (
          <Notion data={notion} key={idx} />
        ))}
      </Box>
    </S.Rethink>
  )
}

export default Rethink
