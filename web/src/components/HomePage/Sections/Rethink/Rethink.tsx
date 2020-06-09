// Rethink:

// ___________________________________________________________________

import React from 'react'

import { Box, Flex, Text, Heading } from '../../../../elements'

import Section from '../../../Section'
import Button from '../../../../elements/Button'
import ImgMatch from '../../../ImgMatch'

import { Tabs } from '@feuer/react-tabs'

import theme from '../../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const TabsPanel = () => {
  return (
    <Tabs
      activeTab={{
        id: '01'
      }}
    >
      {TabData.map(panel => (
        <Tabs.Tab id={panel.id} title={panel.title} key={panel.id}>
          <S.Panel>
            <Flex width={1 / 2} p={7} className="content">
              <Box>
                <Heading as="h5">value</Heading>
                <Heading as="h2">
                  <Box as="span" color="white">
                    For
                  </Box>{' '}
                  {panel.title}
                </Heading>
              </Box>
              <Box>
                <Text as="p">
                  {panel.content}
                </Text>
                <Button to="/contact" invert={true}>
                  Rethink Ortho
                </Button>
              </Box>
            </Flex>
            <Box width={1 / 2}>
              <ImgMatch src={panel.figure} altText="" />
            </Box>
          </S.Panel>
        </Tabs.Tab>
      ))}
    </Tabs>
  )
}

// ___________________________________________________________________

const Rethink: React.FC = () => {
  return (
    <Section border={true}>
      <Box className="cta">
        <Button to="/contact">Rethink Ortho</Button>
      </Box>
      <Box width={2 / 3}>
        <Heading as="h5" color="tertiary">
          rethink value
        </Heading>
        <Heading as="h2">
          We create better value for the implants you already know and use on an
          everyday basis.
        </Heading>
      </Box>
      <S.Learn width={1} mt={12}>
        <TabsPanel />
      </S.Learn>
    </Section>
  )
}

export default Rethink

const TabData = [
  {
    id: '01',
    title: 'Doctors',
    content: 'For doctors, it means giving them the right amount of service and time-saving innovations along with better outcomes for their patients.',
    figure: 'operating-room--bw.jpg'
  },
  {
    id: '02',
    title: 'Hospitals',
    content: 'For hospital admins, it\'s giving them the opportunity to cut costs without impacting care or working relationships with their physicians.',
    figure: 'operating-room--bw.jpg'
  },
  {
    id: '03',
    title: 'Patients',
    content: 'For patients',
    figure: 'operating-room--bw.jpg'
  }
]
