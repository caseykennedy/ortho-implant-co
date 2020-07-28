// ContactPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import GoogleMapReact from 'google-map-react'

import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Section from '../Section'
import BlockContent from '../BlockContent'
import Marker from './Marker'

import useRethinkPage from '../../hooks/useRethinkPage'

// Elements
import { AnimatedBox, Box, Heading, Text } from '../../elements'
import Divider from '../../elements/Divider'

import * as S from './styles.scss'
import theme from '../../../config/theme'
import Prefooter from '../Footer/Prefooter'

// ___________________________________________________________________

const billboardProps = {
  bg: theme.colors.primary,
  btnText: 'See our implants',
  color: theme.colors.white,
  message: 'we make orthopaedic implants<br />that are good for all.',
  title: 'Mantra',
  invert: true,
  src: 'operating-room.jpg',
  altText: 'Doctors in the operating room.'
}

// Map coordinates
// 316 California Ave ste. 701, Reno, NV 89509
const lat = 39.5199485
const long = -119.8168169

const ContactPage = () => {
  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.fluid,
    message: 'Talk to us',
    title: 'Contact'
  }
  return (
    <S.ContactPage>
      <PageTitle {...pageTitle} />
      
      <Box width={[1, 1 / 2]} p={theme.gutter.axis}>
        <Heading as="h4" className="t--uppercase">
          Mailing address
        </Heading>
        <p>
          316 California Ave #701,
          <br />
          Reno, NV 89509
        </p>
        <Heading as="h4" className="t--uppercase">
          Office
        </Heading>
        <p>
          770 Smithridge Dr.
          <br />
          STE 400, Reno NV 89502
        </p>
        <Heading as="h4" className="t--uppercase">
          TEL | FAX
        </Heading>
        <p>
          +1 (800) 619-2797 — toll free
          <br />
          +1 (775) 636-8281 — direct
          <br />
          +1 (775) 636-8284 — fax
        </p>
      </Box>

      <Box bg="black" width={[1, 1 / 2]} className="map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBhFPTf9XXJ9x7SPjnyG7Vg8KaEPxKwBro'
          }}
          defaultCenter={{
            lat,
            lng: long
          }}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <Marker lat={lat} lng={long} text="Test" />
        </GoogleMapReact>
      </Box>

      <Billboard {...billboardProps} />
    </S.ContactPage>
  )
}

export default ContactPage
