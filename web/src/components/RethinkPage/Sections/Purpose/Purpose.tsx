// Purpose Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { useSpring, config } from 'react-spring'

import ImgMatch from '../../../ImgMatch'
import Accordion from '../../../Accordion'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.text,
  borderColor: theme.colors.text
}

const Purpose = () => {
  // const data: HomeHeroQueryShape = useStaticQuery(graphql`
  //   query RethinkHeroQuery {
  //     allSanityHomeHero {
  //       nodes {
  //         hero {
  //           title
  //           message
  //           image {
  //             asset {
  //               fluid(maxWidth: 1080) {
  //                 src
  //                 aspectRatio
  //                 base64
  //                 sizes
  //                 srcSet
  //                 srcSetWebp
  //                 srcWebp
  //               }
  //             }
  //           }
  //           link
  //         }
  //       }
  //     }
  //   }
  // `)
  // const query = data.allSanityHomeHero.nodes[0].hero
  // console.log('---_- Hero -_---')
  // console.log(query)
  const fadeAnimation = useSpring({
    config: config.molasses,
    delay: 160,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <S.Purpose pt={10}>
      <Flex width={1} alignItems="center" flexWrap="wrap" px={10} mb={10}>
        <AnimatedBox
          width={[1, 2 / 3]}
          p={theme.gutter.axis}
          style={fadeAnimation}
        >
          <Heading as="h4" color="primary">
            purpose
          </Heading>
          <Heading as="h3" fontSize={3} fontWeight={400}>
            World-class orthopaedic implants and technology are affordable.
          </Heading>
          <Text as="p">
            OIC is a purpose-driven, forward-thinking company determined to
            change the way implants are manufactured and priced.
          </Text>
        </AnimatedBox>
        <Box width={[1, 1 / 3]} pr={8} mb={-8}>
          <ImgMatch src="running-stairs.jpg" altText="Running up stairs" />
        </Box>
      </Flex>
      <Box width={1} flex-wrap="wrap">
        <Accordion title="title" bg="white" {...AccordionProps}>
          <Flex flexDirection="row-reverse">
            <Flex width={[1, 6 / 8]} className="content">
              {/* {section.lead && (
                <Text as="p" fontSize={3}>
                  {section.lead}
                </Text>
              )}
              {section.content && <Text as="p">{section.content}</Text>}
              {section._rawBlockContent && (
                <BlockContent blocks={section._rawBlockContent || []} />
              )} */}
              adsfasdf
            </Flex>

            <Box bg="black" width={[1, 2 / 8]} className="image">
              {/* {section.image && (
                <Img
                  fluid={section.image.asset.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={section.title}
                />
              )} */}
            </Box>
          </Flex>
        </Accordion>
        <Accordion title="title" bg="white" {...AccordionProps}>
          <Flex flexDirection="row-reverse">
            <Flex width={[1, 6 / 8]} className="content">
              {/* {section.lead && (
                <Text as="p" fontSize={3}>
                  {section.lead}
                </Text>
              )}
              {section.content && <Text as="p">{section.content}</Text>}
              {section._rawBlockContent && (
                <BlockContent blocks={section._rawBlockContent || []} />
              )} */}
              adsfasdf
            </Flex>

            <Box bg="black" width={[1, 2 / 8]} className="image">
              {/* {section.image && (
                <Img
                  fluid={section.image.asset.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={section.title}
                />
              )} */}
            </Box>
          </Flex>
        </Accordion>
        <Accordion title="title" bg="white" {...AccordionProps}>
          <Flex flexDirection="row-reverse">
            <Flex width={[1, 6 / 8]} className="content">
              {/* {section.lead && (
                <Text as="p" fontSize={3}>
                  {section.lead}
                </Text>
              )}
              {section.content && <Text as="p">{section.content}</Text>}
              {section._rawBlockContent && (
                <BlockContent blocks={section._rawBlockContent || []} />
              )} */}
              adsfasdf
            </Flex>

            <Box bg="black" width={[1, 2 / 8]} className="image">
              {/* {section.image && (
                <Img
                  fluid={section.image.asset.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={section.title}
                />
              )} */}
            </Box>
          </Flex>
        </Accordion>
      </Box>
    </S.Purpose>
  )
}

export default Purpose
