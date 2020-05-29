// Footer:
// Global site footer
// TODO: use global nav data

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

import { Text, Box, Flex } from '../../elements'
import Callout from './Callout'
import Icon from '../Icons'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Year = () => {
  return new Date().getFullYear()
}

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.Inner>
        <S.Callout width={[1, 1 / 3]}>
          <Callout />
          <S.Contact>
            <Box>
              Tel: 951-763-5549
              <br />
              Fax: 951-763-2808
            </Box>
            <Box>
              52701 US Hwy 371
              <br />
              Anza, CA 92539
            </Box>
          </S.Contact>
        </S.Callout>
        <Flex width={[1, 2 / 3]}>
          <S.Indent>
            <Box className="marker">&copy;{Year()} • All rights</Box>
          </S.Indent>
          <S.Nav>
            <Flex flexWrap="wrap" width={1}>
              <ul>
                <Link to="/">Homepage</Link>
                <Link to="/about">About Us</Link>
                <Link to="/resources#contact">Contact</Link>
                <Link to="/resources#careers">Careers</Link>
              </ul>
              <ul>
                <Link to="/departments/tribal-admin">Tribal Admin</Link>
                <Link to="/departments/family-social-services">Family &amp; Social Services</Link>
                <Link to="/departments/environmental-protection-agency">EPA</Link>
                <Link to="/departments/public-works">Public Works</Link>
                <Link to="/departments/cultural">Cultural</Link>
              </ul>
              <ul>
                <Link to="/government/tribal-council">Tribal Council</Link>
                <Link to="/government/economic-development">Economic Development</Link>
                <Link to="/government/cahuilla-gaming-agency">Cahuilla Gaming Agency</Link>
                <Link to="/enterprises">Enterprises</Link>
              </ul>
            </Flex>
            <Box width={1}>
              <Text as="p" fontSize={1}>
                Cahuilla Band of Indians, Anza, CA 92539.
              </Text>
            </Box>
          </S.Nav>
        </Flex>
      </S.Inner>
    </S.Footer>
  )
}

export default Footer
