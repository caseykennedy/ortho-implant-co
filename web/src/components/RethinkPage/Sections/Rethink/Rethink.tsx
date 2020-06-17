// Rethink Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { useSpring, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'

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

const Rethink = () => {
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
  // Only show item when in view
  const [manifestoRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-360px 0px'
  })
  const manifestoSpring = useSpring({
    config: config.molasses,
    opacity: !inView ? 0 : 1,
    transform: !inView ? theme.transform.matrix.from : theme.transform.matrix.to
  })
  const fadeSpring = useSpring({
    config: config.molasses,
    delay: 160,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <S.Rethink>
      <Box width={1}>
        {data.map((section, idx) => (
          <Accordion
            title={section.title}
            bg="white"
            key={idx}
            {...AccordionProps}
          >
            <Flex flexDirection="row-reverse" flexWrap="wrap">
              <Box
                width={[1, 1, 6 / 8]}
                p={theme.gutter.axis}
                className="content"
              >
                {section.lead && (
                  <Text as="p">
                    {section.lead}
                  </Text>
                )}
                {section.content && <Text as="p">{section.content}</Text>}
                {/* {section._rawBlockContent && (
                  <BlockContent blocks={section._rawBlockContent || []} />
                )} */}
              </Box>

              <Box bg="quinary" width={[1, 1, 2 / 8]} className="image">
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
        ))}
      </Box>
    </S.Rethink>
  )
}

export default Rethink

const data = [
  {
    title: 'Compromise',
    subTitle: 'We need to rethink implants',
    lead:
      'We need to rethink the way implants are used, sold, and priced. Long-established gold standards in implants should not cost their weight in it.',
    content:
      'As a cutting-edge implant company, we have to make more from less to continue raising the bar of the quality care we deliver. By partnering with us, our customers stay ahead of the changes in reimbursement, policy reform, and uncertainty. Join us in moving healthcare forward.'
  },
  {
    title: 'Healthcare',
    subTitle: 'We need to rethink implants',
    lead:
      'We need to rethink the way implants are used, sold, and priced. Long-established gold standards in implants should not cost their weight in it.',
    content:
      'As a cutting-edge implant company, we have to make more from less to continue raising the bar of the quality care we deliver. By partnering with us, our customers stay ahead of the changes in reimbursement, policy reform, and uncertainty. Join us in moving healthcare forward.'
  },
  {
    title: 'Price',
    subTitle: 'We need to rethink implants',
    lead:
      'We need to rethink the way implants are used, sold, and priced. Long-established gold standards in implants should not cost their weight in it.',
    content:
      'As a cutting-edge implant company, we have to make more from less to continue raising the bar of the quality care we deliver. By partnering with us, our customers stay ahead of the changes in reimbursement, policy reform, and uncertainty. Join us in moving healthcare forward.'
  },
  {
    title: 'Relationships',
    subTitle: 'We need to rethink implants',
    lead:
      'We need to rethink the way implants are used, sold, and priced. Long-established gold standards in implants should not cost their weight in it.',
    content:
      'As a cutting-edge implant company, we have to make more from less to continue raising the bar of the quality care we deliver. By partnering with us, our customers stay ahead of the changes in reimbursement, policy reform, and uncertainty. Join us in moving healthcare forward.'
  }
]
