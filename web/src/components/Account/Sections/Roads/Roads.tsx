// Roads:

// ___________________________________________________________________

import React from 'react'

import { Flex, Text } from '../../../../elements'
import Accordion from '../../../Accordion'

import * as S from './styles.scss'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.text,
  borderColor: theme.colors.text
}

const Roads: React.FC = () => {
  return (
    <Accordion
      title="Roads &amp; Transportation"
      fontSize={4}
      bg={theme.colors.background}
      {...AccordionProps}
    >
      <S.Section>
        <Flex className="content">
          <Text as="p" fontSize={3}>
            This program is responsible for maintaining and updating the Indian
            Reservation Roads inventory (IRR), which is submitted to the BIA in
            order to receive funding for Tribal and BIA roads.
          </Text>
          
          <Text as="p">
            The IRR is comprised of Tribal, BIA, County and State owned roads
            that are within the boundary of the reservation or roads that
            provide access to and from the Reservation. The roads program is
            responsible for grading gravel roads, repairing/replacing culverts,
            and improving surface conditions on the Tribal and BIA owned
            roadways.
          </Text>

          <Text as="p">
            As of January 2020 we will be enacting a new Road Maintenance
            Program that performs year round road maintenance on regularly
            scheduled days. The following is the road maintenance schedule:
          </Text>

          <div className="maint-date">
            <Text as="p" fontSize={2}>
              FIRST Tues, Weds &amp; Thurs
              <br />
              — every month
            </Text>
            <Text as="p">
              Santos &amp; Cienga Truck Trail
              <br />
              Via Rios, Candelaria Rd, Rock Rd
              <br />
              Complete east reservation
            </Text>
          </div>

          <div className="maint-date">
            <Text as="p" fontSize={2}>
              SECOND Tues, Weds &amp; Thurs
              <br />
              — every month
            </Text>
            <Text as="p">
              Yucca Road, Tribal Road
              <br />
              Ball Pk Rd, Ball Pk Way, Cahuilla Way
              <br />
              Puck-It, South Boundry, Pu’uish Rd
            </Text>
          </div>

          <Text as="p">
            Work Order Requests for driveway grading will need to be submitted
            48 hours prior to the scheduled road maintenance day, if work is
            required.  Late requests will be performed the following month or as
            time permits.
          </Text>
        </Flex>
      </S.Section>
    </Accordion>
  )
}

export default Roads
