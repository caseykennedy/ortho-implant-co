// ContactPage:

// ___________________________________________________________________

import React from 'react'

import GoogleMapReact from 'google-map-react'

import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Marker from './Marker'

import useContactPage from '../../hooks/useContactPage'

// Elements
import { Box, Heading } from '../../elements'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

// Map coordinates
// 316 California Ave ste. 701, Reno, NV 89509
const lat = 39.4795277
const long = -119.7890783

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
    altText: page.billboard.figure.asset.title
  }
  return (
    <>
      <S.ContactPage>
        <PageTitle {...pageTitle} />

        <Box width={[1, 1 / 2, 4 / 10]}>
          <Box p={theme.gutter.axis} style={{ borderBottom: theme.border }}>
            <Heading as="h4" mb={3} className="t--uppercase">
              Telephone | Fax
            </Heading>
            <p>
              <a href={`tel:800-619-2797`}>+1 800 619-2797</a>{' '}
              <Box as="span" color="tertiary">
                — toll free
              </Box>
              <br />
              <a href={`tel:775-636-8281`}>+1 775 636-8281</a>{' '}
              <Box as="span" color="tertiary">
                — direct
              </Box>
              <br />
              <a href={`tel:775-636-8284`}>+1 775 636-8284</a>{' '}
              <Box as="span" color="tertiary">
                — fax
              </Box>
            </p>
            <Heading as="h4" mt={7} mb={3} className="t--uppercase">
              Email
            </Heading>
            <p>
              <a href={`mailto:info@orthoimplantco.com`}>
                info@orthoimplantcompany.com
              </a>
              <br />
              <a href={`mailto:help@orthoimplantco.com`}>
                help@orthoimplantcompany.com
              </a>
            </p>
          </Box>
          <Box bg="quinary" p={theme.gutter.axis}>
            <Heading as="h4" mb={3} className="t--uppercase">
              Mailing
            </Heading>
            <p>
              316 California Ave #701,
              <br />
              Reno, NV 89509
            </p>

            <Heading as="h4" mt={7} mb={3} className="t--uppercase">
              Office
            </Heading>
            <p>
              770 Smithridge Dr.
              <br />
              STE 400, Reno NV 89502
            </p>
          </Box>
        </Box>

        <Box bg="black" width={[1, 1 / 2, 6 / 10]} className="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyD8wi_5Gfo2TS8UcisEYQAV73CMsAtxw1s'
            }}
            defaultCenter={{
              lat,
              lng: long
            }}
            defaultZoom={10}
            yesIWantToUseGoogleMapApiInternals={true}
          >
            <Marker lat={lat} lng={long} text="Test" />
          </GoogleMapReact>
        </Box>
      </S.ContactPage>
      <Billboard {...billboardProps} />
    </>
  )
}

export default ContactPage
