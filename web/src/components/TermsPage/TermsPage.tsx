// TermsPage:

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

const TermsPage = () => {
  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.fluid,
    message: 'Terms and Conditions',
    title: 'Terms and Conditions'
  }
  return (
    <S.TermsPage>
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

        <Text as="p">
          This site is produced and owned by The Orthopaedic Implant Company,
          Inc. Your use of this Site constitutes your acceptance of the
          following terms and conditions (“Terms”). If you do not agree to abide
          by all of the provisions contained in these Terms, you must not use or
          access the Site. The Orthopaedic Implant Company reserves the right to
          make changes to these Terms, which will be posted on the Site and
          become effective immediately upon posting. For this reason, we urge
          you to read these Terms each time you visit the Site.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          Scope:
        </Heading>

        <Text as="p">
          The Orthopaedic Implant Company controls and operates this Site from
          the United States of America. This Site is intended for use by U.S.
          residents only and contains information regarding The Orthopaedic
          Implant Company products and services available for sale or
          distribution within the U.S. If you are a non-U.S. resident, you may
          access this Site solely at your own risk and are responsible for
          compliance with local laws and regulations, if applicable. Any
          references to products or services on the Site do not imply that The
          Orthopaedic Implant Company intends to announce or offer these
          products or services in your country.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          Registered users
        </Heading>

        <Text as="p">
          Visitors to the Site may use the public areas of the Site for
          informational purposes and are subject to these Terms. In addition,
          certain areas of this Site contain information intended only for
          medical professionals. Accordingly, The Orthopaedic Implant Company
          reserves the right to limit access to certain areas of the Site to
          medical professionals who register and meet the qualifications imposed
          by us. The resources provided in the Resource Library and certain
          other password-protected areas of this Site are specific to and
          intended for medical professionals who specialize in the medical
          specialties that we serve. To register, a medical professional must
          provide us with certain personal information, including his or her
          name, profession, email address, postal address, title and clinical
          affiliation. If you do not qualify, please do not attempt to register
          with us. Upon our review and acceptance of your registration
          information, The Orthopaedic Implant Company will provide you with a
          User ID and password. The information you provide must be accurate and
          complete, and it is your responsibility to inform us of any changes to
          that information by emailing our webmaster. We reserve the right to
          discontinue access to any restricted area of the Site at any time,
          without notice to you, for any reason. If you are or become a
          registered user, you are responsible for maintaining the
          confidentiality of you User ID and password. If you become aware of
          unauthorized use of your User ID and password, you agree to
          immediately notify The Orthopaedic Implant Company. The personal
          information provided by you is subject to our Privacy Policy, which
          can be found at www.orthoimplantcompany.com.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          Modifications to site
        </Heading>

        <Text as="p">
          The Orthopaedic Implant Company reserves the right to modify or
          discontinue the Site (or any portion of the Site), temporarily or
          permanently, with or without notice to you, and is not obligated to
          support of update the Site. The Orthopaedic Implant Company shall not
          be liable to you or any third party in the event that The Orthopaedic
          Implant Company exercises its right to modify or discontinue the Site
          (or any portion of the Site). Unless explicitly stated otherwise, any
          new features that augment or enhance the current Site shall be subject
          to these Terms.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          Copyright notice
        </Heading>

        <Text as="p">
          Unless otherwise indicated, all of the trademarks, service marks, and
          logos displayed on this Site are registered and unregistered
          trademarks of The Orthopaedic Implant Company, its affiliates or
          subsidiaries or third parties who have licensed their trademarks to
          The Orthopaedic Implant Company or one of its affiliates or
          subsidiaries. In addition, all content, including but not limited to
          text, software, music sound, photographs, video, graphics or other
          material contained on this Site or in commercially produced
          information presented to you through the Site by The Orthopaedic
          Implant Company, its affiliates or The Orthopaedic Implant Company’s
          third party licensors (Content) is protected by copyright, patents or
          other proprietary agreements and laws and you are only permitted to
          use Content as expressly authorized by The Orthopaedic Implant
          Company, its affiliates or its licensors. Nothing contained herein
          transfers any right, title, or interest in the Site or the Content to
          you.You may download, view, copy and print Content, subject to the
          following: (a) the Content may be used solely for personal,
          informational, or internal business purposes; (b) any and all
          copyright, trademark and other proprietary rights notices must appear
          on all copies, including the copyright notice at the bottom of the
          page; (c) the Content may not be modified or altered in any way; (d)
          no graphics may be used separate from accompanying test. Except as
          provided above, you may not use, download, upload, copy, print,
          display, perform, reproduce, publish, license, post, transmit, frame,
          mirror on another Web service, use any meta tags, inline any graphics
          or distribute any Content or information from the Site in whole or in
          part without the express permissionn of The Orthopaedic Implant
          Company. Requests for such permission should be made to
          info@orthoimplantcompany.com. Any rights not expressly granted herein
          are reserved. Please be advised that The Orthopaedic Implant Company
          enforces its intellectual property rights to the fullest extent of the
          law.Certain product, service, or company designations for companies
          other than The Orthopaedic Implant Company may be mentioned in the
          Site for identification purposes only. Such designations are often
          claimed as trademarks or service marks of their respective owners.
          However, you should contact the appropriate companies for more
          complete information regarding such designations and their
          registration status.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          No medical advice
        </Heading>

        <Text as="p">
          The information on this Site is provided for information purposes only
          and is not intended or recommended as a substitute for professional
          medical advice. Always seek the advice of your physician or other
          qualified health care provider regarding any medical condition or
          treatment.We may also include certain information, reference guides
          and databases intended for use by licensed medical professionals.
          These tools are not intended to give professional medical advice.
          Physicians and other health care providers should always exercise
          their own clinical judgment for any given situation.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          User feedback
        </Heading>

        <Text as="p">
          The Orthopaedic Implant Company is pleased to hear from visitors and
          welcomes your comments regarding the Site. Please be advised, however,
          that The Orthopaedic Implant Company and its employees do not accept
          or consider unsolicited ideas, including ideas for new products or
          technologies, processed, materials, marketing plans, or new product
          names. Please do not send your unsolicited ideas or any original
          materials to The Orthopaedic Implant Company or anyone at The
          Orthopaedic Implant Company. If, despite this request, you still send
          The Orthopaedic Implant Company your ideas and materials, please
          understand that by submitting the information through this Site, you
          assign The Orthopaedic Implant Company, free of charge, all worldwide
          rights, title and interest in all copyrights and other intellectual
          property rights in the information or materials you submit. We will be
          entitled to use any information and materials you submit through this
          Site for any purpose whatsoever without restriction and without
          compensating you in any way, and by submitting any such information
          and materials, you represent to The Orthopaedic Implant Company that
          you have the right to do so.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          Links
        </Heading>

        <Text as="p">
          The Site may provide links to web sites operations by The Orthopaedic
          Implant Company outside of the U.S. as well as web sites operated by
          third parties. Please refer to the separate terms of use, privacy
          policies, and other rules posted on these linked sites before you use
          them. Third party links are provided merely as a convenience to you,
          and the inclusion of any link does not imply affiliation of
          endorsement by The Orthopaedic Implant Company. The Orthopaedic
          Implant Company does not review, monitor or check the accuracy of
          content published on third party sites, and is not responsible for the
          availability of, the content provided on, third party sites. If you
          choose to purchase any products or services from a third party, your
          relationship is directly with the third party and The Orthopaedic
          Implant Company is not responsible for any loss or damage of any sort
          you may incur from dealing with any third party. Third party web sites
          may contain information about uses of products that have not been
          approved or cleared by the U.S. Food and Drug Administration. The
          Orthopaedic Implant Company does not endorse the off-label use of any
          of our products. In general, in the absence of any other agreement
          with The Orthopaedic Implant Company, you may link or hyper-link to
          the home page of the Site from your website, subject to the following:
          (a) you notify us by email at webmaster@orthoimplantcompany.com
          specifying the URL of each page from which you will be linking to our
          home page; (b) you do not frame the Site or any portion of the Site;
          (c) you do not deep link into the Site (i.e., you do not link into any
          page other than the home page); (d) the link or hyper-link to the Site
          is not used in a way that suggests that The Orthopaedic Implant
          Company endorses you or your web site; (e) the link is identified
          using plain text rendering of the The Orthopaedic Implant Company name
          and not any trademark or The Orthopaedic Implant Company logo; (f) the
          link or hyper-link to the Site is not used or presented in any way
          that disparages The Orthopaedic Implant Company or tarnishes, blurs,
          or dilutes the quality of The Orthopaedic Implant Company’s names or
          trademarks or any associated goodwill; and, (g) you agree that we may
          terminate your right to link or hyperlink to the Site at any time for
          any reason or no reason.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          Disclaimer
        </Heading>

        <Text as="p">
          THE SITE AND ALL CONTENT, MATERIALS, INFORMATION, PRODUCTS, AND
          SERVICES PROVIDED ON THE SITE, PART PROVIDED ON AN “AS IS” AND “AS
          AVAILABLE” BASIS. THE Orthopaedic IMPLANT COMPANY EXPRESSLY DISCLAIMS
          ALL WARRANTIES OF ANY KIND,WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT
          NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
          A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND SECURITY AND
          ACCURACY, AS WELL AS ALL WARRANTIES ARISING BY USAGE OF TRADE, COURSE
          OF DEALING, OR COURSE OF PERFORMANCE. THE Orthopaedic IMPLANT COMPANY
          MAKES NO WARRANTY THAT: (A) THE SITE WILL MEET YOUR REQUIREMENTS; (B)
          THE SITE WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR
          ERROR-FREE BASIS; (C) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF
          THE SITE OR ANY SERVICES OFFERED THROUGH THE SITE WILL BE ACCURATE OR
          RELIABLE; OR (D) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION OR
          OTHER MATERIAL OBTAINED BY YOU THROUGH THE SITE WILL MEET YOUR
          EXPECTATIONS. ANY CONTENT, MATERIALS, OR INFORMATION DOWNLOADED OR
          OTHERWISE OBTAINED THROUGH THE USE OF THIS SITE IS DONE AT YOUR OWN
          DISCRETION AND RISK. THE Orthopaedic IMPLANT COMPANY SHALL HAVE NO
          RESPONSIBILITY FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA
          THAT RESULTS FROM THE DOWNLOAD OF ANY CONTENT, MATERIALS, OR
          INFORMATION. NO ADVICE OR INFORMATION, WHETHER ORAL OR WIRTTEN,
          OBTAINED BY YOU FROM THE Orthopaedic IMPLANT COMPANY OR THROUGH THE
          SITE SHALL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          Limitation of liability
        </Heading>

        <Text as="p">
          IN NO EVENT SHALL THE Orthopaedic IMPLANT COMPANY BE LIABLE FOR ANY
          DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL
          DAMAGES, OR DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA OR USE,
          INCURRED BY YOU OR ANY THIRD PARTY, WHETHER IN AN ACTION IN CONTRACT
          OR TORT, ARISING FROM YOUR ACCESS TO, OR USE OF, THE SITE OR ANY
          SERVICES PROVIDED THROUGH THE SITE, EVEN IF THE Orthopaedic IMPLANT
          COMPANY WAS ADVISED THAT SUCH DAMAGES WERE LIKELY OR POSSIBLE. THIS
          LIMIATION ON LIABILITY APPLIES TO, BUT IS NOT LIMITED TO, THE
          TRANSMISSION OF ANY DISABLING DEVICE OR VIRUSES WHICH MAY INFECT YOUR
          EQUIPMENT, FAILURE OR MECHANICAL OR ELECTRONIC EQUIPMENT OR
          COMMUNICATION LINES, TELEPHONE OR OTHER INTERCONNECT PRODLMENTS,
          UNAUTHORIZED ACCESS, THEFT, BODILY INJURY, PROPERTY DAMAGE, OR
          OPERATOR ERRORS.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          Privacy policy
        </Heading>

        <Text as="p">
          All information submitted to the Site, including but not limited to
          personally identifiable information, is treated in accordance with the
          The Orthopaedic Implant Company Privacy Policy as available on
          www.orthoimplantcompany.com.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          Export restrictions / legal compliance
        </Heading>

        <Text as="p">
          The Orthopaedic Implant Company controls this Site from within the
          United States of America. You may not access, download, use or export
          the Site or the Content in violation of U.S. export laws or
          regulations or in violation of any other applicable laws or
          regulations.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          Acknowledgement
        </Heading>

        <Text as="p">
          By accessing this Site or registering with The Orthopaedic Implant
          Company, you agree to all the terms and conditions of these Terms. You
          acknowledge that you have read and understood these Terms and that
          these Terms have the same force and effect as a signed agreement. You
          further agree that the Terms shall be governed by and construed in
          accordance with the laws of the State of Indiana.
        </Text>

        <Heading as="h3" fontSize={2} className="t--uppercase">
          Contact information
        </Heading>

        <Text as="p">
          If you have any questions regarding these Terms or the Site, please
          contact The Orthopaedic Implant Company
          atwebmaster@orthoimplantcompany.com.
        </Text>
      </Section>

      <Billboard {...billboardProps} />
    </S.TermsPage>
  )
}

export default TermsPage
