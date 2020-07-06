// Footer:
// Footer
// TODO:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'
import Icon from '../Icons'
import Prefooter from './Prefooter'
import Pixels from '../Pixels'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Year = () => {
  return new Date().getFullYear()
}

const Footer: React.FC = () => {
  return (
    <>
      {/* <Prefooter /> */}
      <S.Decorator>
        <div className="space" />
        <div className="pixels">
          <Pixels />
        </div>
      </S.Decorator>
      <S.Footer>
        <S.Nav as="nav">
          <Link to="/rethink">Rethink</Link>
          <Link to="/about">About OIC</Link>
          <Link to="/implants">Implants</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
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
            <Link to="/contact" className="t--link">
              <Heading as="h4" color="primary" fontWeight={500}>
                Schedule a metting
                <Icon name="nextArrow" color={theme.colors.primary} />
              </Heading>
            </Link>
          </Box>
        </S.Row>
        <S.Row className="row--border">
          <S.Social width={[1, 2 / 3]}>
            <a href="/" target="__blank" rel="noopener">
              <Icon name="facebook" />
            </a>
            <a href="/" target="__blank" rel="noopener">
              <Icon name="linkedin" />
            </a>
            <a href="/" target="__blank" rel="noopener">
              <Icon name="twitter" />
            </a>
          </S.Social>
          <S.Legal width={[1, 1 / 3]}>
            <ul>
              <Link to="/terms">Terms</Link>
              <Link to="/legal">Legal</Link>
            </ul>
            <div className="copyright">&copy; {Year()}</div>
          </S.Legal>
        </S.Row>
      </S.Footer>
    </>
  )
}

export default Footer
