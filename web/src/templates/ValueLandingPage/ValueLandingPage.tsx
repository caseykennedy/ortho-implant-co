// ValueLandingPage:

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'
import theme from '../../../config/theme'
import { Box, Flex, Heading, Text } from '../../elements'

// Components
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import PageTitle from '../../components/PageTitle'
import Billboard from '../../components/Billboard'
import BlockContent from '../../components/BlockContent'
import Section from '../../components/Section'
import ContactForm from '../../components/ContactForm'

// ___________________________________________________________________

const Aside = () => {
  return (
    <S.Aside>
      <Heading as="h2" color="black" fontSize={3} mb={5}>
        Value based implants required an average 10.8 less operative time
        compared to conventional implants.
      </Heading>

      <Text as="p" mb={7}>
        Smarter solutions, reduced inventory and simplified instrumentation with
        a <mark>high average cost savings</mark>.
      </Text>

      <div className="stats">
        {statsData.map((stats, key) => (
          <div className="stats__panel" key={key}>
            <div className="title">
              <Text
                as="h4"
                fontSize={2}
                mb={2}
                style={{ textTransform: 'uppercase' }}
                dangerouslySetInnerHTML={{ __html: stats.product }}
              />
            </div>
            <div className="savings">
              <Text
                fontSize={4}
                mb={0}
                style={{ marginBottom: `calc(${theme.space[2]} * -1)` }}
              >
                {stats.average}%
              </Text>
              <Text as="h4" fontSize={1} lineHeight={1} mb={0}>
                avg. savings
              </Text>
            </div>
          </div>
        ))}
      </div>
    </S.Aside>
  )
}

const ValueLandingPage: React.FC<LandingPageContextShape> = ({
  pageContext
}) => {
  const page = pageContext.page
  console.log(page)

  const pageTitle = {
    altText: page.title,
    image: page.pageTitle.image.asset.fluid,
    message: page.pageTitle.message,
    title: page.pageTitle.title && page.pageTitle.title
  }

  const billboardProps = {
    bg: theme.colors.black,
    message: page.billboard.message,
    title: page.billboard.title,
    src: page.billboard.figure.asset.fluid,
    altText: page.billboard.figure.alt,
    btnText: page.billboard.linkTitle,
    to: page.billboard.linkTo
  }

  return (
    <Layout>
      <SEO
        pathname={`/${page.slug.current}`}
        title={`${page.title} | Orthopaedic Implant Co.`}
        individual={true}
      />
      <S.ValueLandingPage>
        <PageTitle {...pageTitle} />

        <Flex
          flexDirection={['column', 'row', 'row']}
          style={{ position: 'relative' }}
        >
          <Box flex={[1, 0.65]}>
            <S.Intro p={theme.gutter.axis}>
              <Heading as="h4" color="primary">
                {page.intro.title && page.intro.title}
              </Heading>

              <Heading as="h2" fontSize={4}>
                {page.intro.heading && page.intro.heading}
              </Heading>

              <Box mt={8}>
                {page.intro._rawBody && (
                  <BlockContent blocks={page.intro._rawBody || []} />
                )}
              </Box>
            </S.Intro>

            <Box p={theme.gutter.axis}>
              <Heading as="h3" fontWeight={400}>
                Reach out to us
              </Heading>
              <ContactForm />
            </Box>
          </Box>

          <Box
            pt={[6, 8, 9]}
            p={theme.gutter.axis}
            flex={[1, 0.35]}
            className="aside"
          >
            <Aside />
          </Box>
        </Flex>

        <Section bg="primary" color="black" border={true} pb={7}>
          <Box width={[1, 8 / 10, 2 / 3]}>
            <Heading as="h4" mb={6}>
              Better for all
            </Heading>
            <Heading as="h3" fontWeight={400} mb={0}>
              We're here because we believe our approach to supplying
              orthopaedic implants is the first step toward a healthcare system
              that's more affordable, more equitable, and better for all.
            </Heading>
          </Box>
        </Section>

        <Billboard {...billboardProps} />
      </S.ValueLandingPage>
    </Layout>
  )
}

export default ValueLandingPage

// ___________________________________________________________________

const statsData = [
  {
    product: 'Locking<br />Plates',
    average: 56
  },
  {
    product: 'Cannulated<br />Screws',
    average: 70
  },
  {
    product: 'IM<br />Nails',
    average: 51
  },
  {
    product: 'External<br />Fixation',
    average: 65
  }
]
