// LegalPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Section from '../Section'
import BlockContent from '../BlockContent'

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
  color: theme.colors.text,
  message: 'we make orthopaedic implants<br />that are good for all.',
  title: 'Mantra',
  invert: true
  // src: 'operating-room.jpg',
  // altText: 'Doctors in the operating room.'
}

const LegalPage = () => {
  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.fluid,
    message: 'legal statements',
    title: 'legal statements'
  }
  return (
    <S.LegalPage>
      <PageTitle {...pageTitle} />
      <Section bg="quinary">
        <Heading as="h3" fontSize={2} className="t--uppercase">
          Contents
        </Heading>

        <Text as="p">
          Copyright © The Orthopaedic Implant Company. All rights reserved. The
          entire contents of this web site are the sole property of The
          Orthopaedic Implant Company (“OIC”). The copying, redistribution, or
          publication of any part of this site, in whole or in part, is strictly
          prohibited without the express, written consent of OIC. Violators will
          be prosecuted. We reserve the right to block any domains we choose
          from accessing this web site. The use of any trademarks that may
          belong to OIC without the express, written consent of OIC is
          prohibited and may be in violation of copyright law, trademark law, or
          other applicable laws including those governing libel, slander,
          publicity, and privacy.
        </Text>

        <Heading as="h3" fontSize={2} mt={7} className="t--uppercase">
          Disclaimer
        </Heading>
        <Text as="p">
          INFORMATION CONTAINED ON THIS WEB SITE, IS PROVIDED “AS IS” WITHOUT
          ANY WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING,
          WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR
          FITNESS FOR A PARTICULAR PURPOSE. Users agree that the access and use
          of this site and its contents is at their own risk. OIC specifically
          reserves the right to change, delete or update information without
          notice at any time, however, OIC accepts no obligation to update the
          information contained on this site.
        </Text>

        <Heading as="h3" fontSize={2} mt={7} className="t--uppercase">
          Correspondence
        </Heading>
        <Text as="p">
          OIC does not use unsolicited ideas for products or services. Please do
          not send any e-mail or in any way communicate ideas for new products
          or services. Any e-mail containing unsolicited ideas may be deleted
          from our system immediately. By continuing to access this web site,
          and by submitting e-mail to us, you agree that you shall have no
          recourse against OIC for any alleged or actual infringement or
          misappropriation of any proprietary rights in your communications to
          us. Any information sent to OIC via this web site may NOT necessarily
          be considered confidential. OIC will be free to disclose, copy,
          distribute, incorporate, modify and otherwise use submissions,
          together with all data, images, audio clips, text and other things
          embodied therein, for any and all commercial and non-commercial
          purposes. If you submit personal data to the site or otherwise to OIC,
          you hereby consent to OIC’s use of such data for the purposes of
          evaluating your information and market OIC’s products and services,
          including a right to transfer the data to third countries and post
          information on the Internet.
        </Text>

        <Heading as="h3" fontSize={2} mt={7} className="t--uppercase">
          Surgeon disclaimer
        </Heading>
        <Text as="p">
          Surgeons must always rely on his or her own professional clinical
          judgment when deciding whether to use a particular product when
          treating a particular patient. OIC does not dispense medical advice
          and recommends that surgeons be trained in the use of any particular
          product before using it in surgery. The information presented is
          intended to demonstrate the breadth of OIC product offerings. Surgeons
          must always refer to the package insert, product label and/or
          instructions for use before using any OIC product. Products may not be
          available in all markets because product availability is subject to
          the regulatory and/or medical practices in individual markets. Please
          contact OIC if you have questions about the availability of OIC
          products in your area.
        </Text>

        <Heading as="h3" fontSize={2} mt={7} className="t--uppercase">
          Product informaiton
        </Heading>
        <Text as="p">
          This web site contains information about products that OIC has made or
          has the capability to make. The products may or may not be available
          in any particular country or may be available under different
          trademarks in different countries. The products may be approved or
          cleared by governmental regulatory organizations for sale or use with
          different indications or restrictions in different countries. Products
          may not be approved for use in all countries. Nothing contained on
          this site should be construed as a promotion or solicitation for any
          product or for the use of any product in a particular way that is not
          authorized under the laws and regulations of the country where the
          reader is located. Specific questions that patients may have about the
          use of the products that may be described on this site or the
          appropriateness for their own conditions should be directed to their
          own physician.
        </Text>

        <Heading as="h3" fontSize={2} mt={7} className="t--uppercase">
          Links to other sites
        </Heading>
        <Text as="p">
          This web site may have links to web pages that are not associated with
          OIC. OIC is not responsible for the content provided on those sites,
          does not guarantee in any way the accuracy of the information
          provided, and does not recommend any particular product or service
          contained on those linked sites.
        </Text>
      </Section>

      <Billboard {...billboardProps} />
    </S.LegalPage>
  )
}

export default LegalPage
