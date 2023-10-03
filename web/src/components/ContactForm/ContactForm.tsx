// Contact form:

import React from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

// Theme + ui
import * as S from './styles.scss'
import { Box, Flex } from '@/components/elements'

const ContactForm = () => {
  return (
    <S.Form>
      <NetlifyForm
        name="Value Based Implants Landing Page — OIC"
        // action="/thanks"
        honeypotName="bot-field"
      >
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />
            {success && <p>Thanks for contacting us!</p>}
            {error && <p>Sorry, we could not reach our servers. Please refresh and try again.</p>}
            {!success && !error && (
              <fieldset>
                <Box width={1} className="form-group">
                  <Box width={[1, 1, 1 / 2]} className="form-group__box">
                    <label htmlFor="name">
                      Name:{' '}
                      <abbr title="required" aria-label="required">
                        *
                      </abbr>
                    </label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required={true}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box width={[1, 1, 1 / 2]} className="form-group__box">
                    <label htmlFor="email">
                      Email:
                      <abbr title="required" aria-label="required">
                        *
                      </abbr>
                    </label>

                    <input name="email" placeholder="Email" type="email" required={true} onChange={handleChange} />
                  </Box>
                </Box>

                <Box width={1} className="form-group">
                  <label htmlFor="comments">Message</label>
                  <textarea name="message" id="message" rows={6} placeholder="Message" onChange={handleChange} />
                </Box>

                <Flex mt={4} width={1}>
                  <Box as="button" flex={1} type="submit" value="submit">
                    Submit
                  </Box>
                </Flex>
              </fieldset>
            )}
          </>
        )}
      </NetlifyForm>
    </S.Form>
  )
}

export default ContactForm
