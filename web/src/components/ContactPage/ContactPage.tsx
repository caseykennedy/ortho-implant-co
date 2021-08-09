// ContactPage:

// ___________________________________________________________________

import React from 'react'

import GoogleMapReact from 'google-map-react'

import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Marker from './Marker'

import useContactPage from '../../hooks/useContactPage'

// Elements
import { Box, Flex, Text, Heading } from '../../elements'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const ContactPage = () => {
  const page = useContactPage()

  // Page title
  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.fluid,
    message: page.pageTitle.message,
    title: page.pageTitle.title
  }
  // Billboard
  const billboardProps = {
    bg: theme.colors.black,
    color: theme.colors.white,
    message: page.billboard.message,
    title: page.billboard.title,
    to: page.billboard.linkTo,
    btnText: page.billboard.linkTitle,
    src: page.billboard.figure.asset.fluid,
    altText: page.billboard.figure.alt
  }

  // Map coordinates
  const lat = page.location.lat
  const lng = page.location.lng
  return (
    <>
      <S.ContactPage>
        <PageTitle {...pageTitle} />

        <Flex flexDirection={['column', 'row']} width={1}>
          <Box p={theme.gutter.axis} flex={1}>
            <Heading as="h4" mb={3} className="t--uppercase">
              Telephone | Fax
            </Heading>
            <Text as="p" fontSize={`calc(${theme.fontSizes[2]} * 1.25)`}>
              <a href={`tel:${page.telTollFree}`}>
                +1 {page.telTollFree && page.telTollFree}
              </a>{' '}
              <Box as="span" color="tertiary">
                — toll free
              </Box>
              <br />
              <a href={`tel:${page.telDirect}`}>
                +1 {page.telDirect && page.telDirect}
              </a>{' '}
              <Box as="span" color="tertiary">
                — direct
              </Box>
              <br />
              <a href={`tel:${page.telFax}`}>
                +1 {page.telFax && page.telFax}
              </a>{' '}
              <Box as="span" color="tertiary">
                — fax
              </Box>
            </Text>
            <Heading as="h4" mt={7} mb={3} className="t--uppercase">
              Email
            </Heading>
            <p>
              {page.emails.map((email, idx) => (
                <Text as="a" href={`mailto:${email}`} key={idx} rel="noopener">
                  {email}
                </Text>
              ))}
            </p>
          </Box>
          <Box bg="quinary" p={theme.gutter.axis} className="mailing">
            <Heading as="h4" mb={3} className="t--uppercase">
              Mailing
            </Heading>
            <p dangerouslySetInnerHTML={{ __html: page.addressMailing }} />

            <Heading as="h4" mt={7} mb={3} className="t--uppercase">
              Office
            </Heading>
            <p dangerouslySetInnerHTML={{ __html: page.addressOffice }} />
          </Box>
        </Flex>

        {/* <Box bg="black" width={[1, 1 / 2, 6 / 10]} className="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBPCKI-A2y0zk_-4AyMxyCGokpcSXvHQYY'
            }}
            defaultCenter={{
              lat,
              lng
            }}
            defaultZoom={10}
            yesIWantToUseGoogleMapApiInternals={true}
          >
            <Marker lat={lat} lng={lng} text="Test" />
          </GoogleMapReact>
        </Box> */}
      </S.ContactPage>
      <Billboard {...billboardProps} />
    </>
  )
}

export default ContactPage
