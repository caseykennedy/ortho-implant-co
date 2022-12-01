// Contact form:

// ___________________________________________________________________

import React, { useState } from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../config/theme'
import { Box, Flex } from '../../elements'

import Icon from '../Icons'

// ___________________________________________________________________

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
            {error && (
              <p>
                Sorry, we could not reach our servers. Please try again later.
              </p>
            )}
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

                  <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    required={true}
                    onChange={handleChange}
                  />
                </Box>
              </Box>

              <Box width={1} className="form-group">
                <label htmlFor="comments">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="Message"
                  onChange={handleChange}
                />
              </Box>

              <Flex mt={4} width={1}>
                <Box as="button" flex={1} type="submit" value="submit">
                  Submit
                </Box>
              </Flex>
            </fieldset>
          </>
        )}
      </NetlifyForm>

      {/* <S.Form
        name="Value Based Implants Landing Page — OIC"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/value-based-implants"
      >
        <input type="hidden" name="bot-field" />
        <input
          type="hidden"
          name="form-name"
          value="Value Based Implants Landing Page — OIC"
        />

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
              />
            </Box>
            <Box width={[1, 1, 1 / 2]} className="form-group__box">
              <label htmlFor="email">
                Email:
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>

              <input
                name="email"
                placeholder="Email"
                type="email"
                required={true}
              />
            </Box>
          </Box>

          <Box width={1} className="form-group">
            <label htmlFor="comments">Message</label>
            <textarea
              name="message"
              id="message"
              rows={6}
              placeholder="Message"
            />
          </Box>

          <Flex mt={4} width={1}>
            <Box as="button" flex={1} type="submit" value="submit">
              Submit
            </Box>
          </Flex>
        </fieldset>
      </S.Form> */}
    </S.Form>
  )
}

export default ContactForm
