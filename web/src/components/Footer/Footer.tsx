// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'
import Icon from '../Icons'
import Pixels from '../Pixels'
import AmedCert from '../AmedCert'

import useContactPage from '../../hooks/useContactPage'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Year = () => {
  return new Date().getFullYear()
}

const Footer: React.FC = () => {
  const contact = useContactPage()

  return (
    <>
      {/* <Prefooter /> */}
      <S.Decorator>
        <div className="space" />
        <div className="pixels">
          <Pixels />
        </div>
      </S.Decorator>
      <S.Footer as="footer">
        <S.Nav as="nav">
          <Link to="/">Home</Link>
          <Link to="/rethink">Rethink</Link>
          <Link to="/about">About OIC</Link>
          <Link to="/implants">Implants</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </S.Nav>
        <S.Row>
          <Box width={[1, 1 / 4]} mr={[0, 7]}>
            <Heading as="h4">Mailing</Heading>
            <p dangerouslySetInnerHTML={{ __html: contact.addressMailing }} />
          </Box>
          <Box width={[1, 1 / 4]} mr={[0, 7]} mt={[5, 0]}>
            <Heading as="h4">Office</Heading>
            <p dangerouslySetInnerHTML={{ __html: contact.addressOffice }} />
          </Box>
        </S.Row>
        <S.Row>
          <Box width={[1, 2 / 3]}>
            <Heading as="h4">tel | fax</Heading>
            <Text as="p">
              <a href={`tel:${contact.telTollFree}`}>
                +1 {contact.telTollFree && contact.telTollFree}
              </a>{' '}
              <Box as="span" color="tertiary">
                — toll free
              </Box>
              <br />
              <a href={`tel:${contact.telDirect}`}>
                +1 {contact.telDirect && contact.telDirect}
              </a>{' '}
              <Box as="span" color="tertiary">
                — direct
              </Box>
              <br />
              <a href={`tel:${contact.telFax}`}>
                +1 {contact.telFax && contact.telFax}
              </a>{' '}
              <Box as="span" color="tertiary">
                — fax
              </Box>
            </Text>
          </Box>
          <Box width={[1, 1 / 3]} mt={[5, 0]}>
            <Link to="/contact" className="t--link">
              <Heading as="h4" color="primary" fontWeight={500}>
                Schedule a meeting
                <Icon name="nextArrow" color={theme.colors.primary} />
              </Heading>
            </Link>
          </Box>
        </S.Row>
        <S.Row className="row--border">
          <S.Social width={[1, 2 / 3]}>
            <a
              href="//www.facebook.com/OrthoImplantCompany"
              target="__blank"
              rel="noopener"
            >
              <Icon name="facebook" />
            </a>
            <a
              href="//www.linkedin.com/company/the-orthopaedic-implant-company"
              target="__blank"
              rel="noopener"
            >
              <Icon name="linkedIn" />
            </a>
            <a
              href="//twitter.com/orthoimplantco"
              target="__blank"
              rel="noopener"
            >
              <Icon name="twitter" />
            </a>
            <div className="amed-cert">
              <Flex className="inner">
                <AmedCert />
                <span>
                  <a
                    href="//www.advamed.org/issues/code-ethics/code-certifying-companies"
                    target="__blank"
                    rel="noopener"
                    aria-label="learn more about AdvaMED"
                  >
                    AdvaMed Code of Ethics Certified
                  </a>
                </span>
              </Flex>
            </div>
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
