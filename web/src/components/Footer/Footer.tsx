// Footer:
// Footer
// TODO:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'
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
      <S.Nav as="nav">
        <Link to="/">Rethink</Link>
        <Link to="/">About OIC</Link>
        <Link to="/">Products</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Contact</Link>
      </S.Nav>
      <S.Row>
        <Box width={[1, 1 / 4]} mr={[0, 7]}>
          <Heading as="h4">Mailing Address</Heading>
          <Text>316 California Ave #701, Reno, NV 89509</Text>
        </Box>
        <Box width={[1, 1 / 4]} mr={[0, 7]} mt={[5, 0]}>
          <Heading as="h4">Office</Heading>
          <Text>770 Smithridge Dr. STE 400, Reno NV 89502</Text>
        </Box>
      </S.Row>
      <S.Row>
        <Box width={[1, 2 / 3]}>
          <Heading as="h4">tel | fax</Heading>
          <Text>
            +1 (800) 619-2797 — toll free
            <br />
            +1 (775) 636-8281 — direct
            <br />
            +1 (775) 636-8284 — fax
          </Text>
        </Box>
        <Box width={[1, 1 / 3]} mt={[5, 0]}>
          <Heading as="h4" color="primary" fontWeight={500}>
            Schedule a metting
          </Heading>
        </Box>
      </S.Row>
      <S.Row>
        <S.Social width={[1, 2 / 3]}>
          <a href="/" target="__blank">
            <Icon name="facebook" />
          </a>
          <a href="/" target="__blank">
            <Icon name="linkedin" />
          </a>
          <a href="/" target="__blank">
            <Icon name="twitter" />
          </a>
        </S.Social>
        <Flex width={[1, 1 / 3]} mt={[5, 0]} justifyContent="space-between" fontSize={2}>
          <S.Legal as="ul">
            <Link to="/">Terms</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Disclaimers</Link>
          </S.Legal>
          <Box>&copy; 2020</Box>
        </Flex>
      </S.Row>
    </S.Footer>
  )
}

export default Footer
