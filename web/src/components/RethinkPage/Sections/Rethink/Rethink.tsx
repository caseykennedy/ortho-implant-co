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

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

type RethinkNotionsQueryShape = {
  allSanityRethinkNotions: {
    edges: {
      node: {
        id: string
        title: string
        heading: string
        rethinkNotions: RethinkNotion
      }
    }[]
  }
}

type NotionData = {
  data: RethinkNotion
}

type RethinkNotion = {
  title: string
  subTitle: string
  lead: string
  _rawContent: string
  image: {
    asset: {
      fluid: {
        src: string
        aspectRatio: number
        base64: string
        sizes: string
        srcSet: string
        srcSetWebp: string
        srcWebp: string
      }
    }
  }
}

// ___________________________________________________________________

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.text,
  borderColor: theme.colors.text,
  fontSize: 4,
  bg: 'white'
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
    <AnimatedBox ref={manifestoRef} style={manifestoSpring}>
      <Accordion
        title={data.title}
        subTitle={data.subTitle}
        {...AccordionProps}
      >
        <Flex flexDirection="row-reverse" flexWrap="wrap" bg="quinary">
          <Box width={[1, 1, 6 / 8]} p={theme.gutter.axis} className="content">
            {data.lead && <Text as="p">{data.lead}</Text>}
            {data._rawContent && (
              <BlockContent blocks={data._rawContent || []} />
            )}
          </Box>

          <Box bg="quinary" width={[1, 1, 2 / 8]} className="image">
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
    </AnimatedBox>
  )
}

const Rethink = () => {
  const data: RethinkNotionsQueryShape = useStaticQuery(graphql`
    query RethinkNotionsQuery {
      allSanityRethinkNotions {
        edges {
          node {
            id
            title
            heading
            rethinkNotions {
              title
              subTitle
              lead
              _rawContent
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
            }
          }
        }
      }
    }
  `)
  const query = data.allSanityRethinkNotions.edges[0].node
  // console.log('---_- Notions -_---')
  // console.log(query)
  return (
    <S.Rethink>
      <Box px={theme.gutter.axis}>
        <Heading
          as="h3"
          fontWeight={400} 
          fontSize={'1.5rem'}
          color="primary"
          style={{ textTransform: 'uppercase' }}
        >
          {/* {query.title} */}
          we need to <Box as="span" color="black">rethink</Box>
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
