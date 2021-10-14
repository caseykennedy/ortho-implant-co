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
import Icon from '../../components/Icons'

// ___________________________________________________________________

const Aside = () => {
  return (
    <S.Aside>
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
                mb={0}
                style={{ textTransform: 'uppercase' }}
                dangerouslySetInnerHTML={{ __html: stats.product }}
              />
              <a href={stats.url} target="_blank">
                source
                <Icon name="external-link" />
              </a>
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
                avg. $ savings
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
              <Text as="p" mb={6}>
                We're here because we believe our approach to supplying
                orthopaedic implants is the first step toward a healthcare
                system that's more affordable, more equitable, and better for
                all.
              </Text>
              <Box>
                <Heading as="h3" fontWeight={400}>
                  Reach out to us
                </Heading>
                <ContactForm />
              </Box>
            </S.Intro>

            <Box p={theme.gutter.axis}>
              <Heading as="h4" color="tertiary">
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

        {/* <Section bg="primary" color="black" border={true} pb={7}>
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
        </Section> */}

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
    average: 56,
    url:
      'https://journals.lww.com/jorthotrauma/Fulltext/2016/12001/The_Clinical_and_Economic_Impact_of_Generic.7.aspx'
  },
  {
    product: 'Cannulated<br />Screws',
    average: 70,
    url:
      'https://cdn.mdedge.com/files/s3fs-public/Document/September-2017/ajo043090405.pdf'
  },
  {
    product: 'IM<br />Nails',
    average: 51,
    url:
      'https://www.sciencedirect.com/science/article/abs/pii/S0030589818300804?via%3Dihub'
  },
  {
    product: 'External<br />Fixation',
    average: 65,
    url:
      'https://journaloei.scholasticahq.com/article/18255-the-clinical-and-economic-impact-of-high-value-external-fixation-utilization-at-a-level-ii-trauma-center'
  }
]
