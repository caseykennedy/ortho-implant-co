// Contact form:

// ___________________________________________________________________

import React from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

// Theme + ui
import * as S from './styles.scss'
import { Box, Flex, Text } from '../../../elements'

// ___________________________________________________________________

type NetlifyFormTypes = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  success: boolean
  error: boolean
}

const ContactForm = () => {
  return (
    <S.Form>
      <NetlifyForm
        name="user capture form"
        // action="/thanks"
        honeypotName="bot-field"
      >
        {({ handleChange, success, error }: NetlifyFormTypes) => (
          <>
            <Honeypot />
            {success && (
              <div>
                <p>Thanks for contacting us!</p>
                <p>Download PDF</p>
              </div>
            )}
            {error && (
              <p>Sorry, something went wrong. Please refresh and try again.</p>
            )}
            {!success && !error && (
              <fieldset>
                <Box width={1} className="form-group">
                  <Box width={[1, 1, 1 / 2]} className="form-group__box">
                    <p>Are you a Doctor or a Patient?</p>

                    <Flex className="radio-group">
                      <div>
                        <input
                          type="radio"
                          name="user_type"
                          id="doctor"
                          value="Doctor"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="doctor" className="radio">
                          <Text pt={1}>Doctor</Text>
                        </label>
                      </div>
                    </Flex>

                    <Flex className="radio-group">
                      <div>
                        <input
                          type="radio"
                          name="user_type"
                          id="patient"
                          value="Patient"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="patient" className="radio">
                          <Text pt={1}>Patient</Text>
                        </label>
                      </div>
                    </Flex>
                  </Box>
                </Box>

                <Box width={1} className="form-group">
                  <Box width={[1, 1, 1 / 2]} className="form-group__box">
                    <label htmlFor="name">
                      Full name:
                      <abbr title="required" aria-label="required">
                        *
                      </abbr>
                    </label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full name"
                      required={true}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box width={[1, 1, 1 / 2]} className="form-group__box">
                    <label htmlFor="title">Title:</label>

                    <input
                      name="title"
                      placeholder="Title"
                      type="text"
                      required={false}
                      onChange={handleChange}
                    />
                  </Box>
                </Box>

                <Box width={1} className="form-group">
                  <Box width={[1, 1, 1 / 2]} className="form-group__box">
                    <label htmlFor="phone">Phone:</label>

                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone (optional)"
                      required={false}
                      maxLength={11}
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
                  <Box width={[1, 1, 1 / 2]} className="form-group__box">
                    <label htmlFor="city">City:</label>

                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      required={false}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box width={[1, 1, 1 / 2]} className="form-group__box">
                    <label htmlFor="state">State:</label>

                    <input
                      name="state"
                      placeholder="State"
                      type="state"
                      required={false}
                      onChange={handleChange}
                    />
                  </Box>
                </Box>

                {/* <Box width={1} className="form-group">
                  <label htmlFor="comments">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    placeholder="Message"
                    onChange={handleChange}
                  />
                </Box> */}

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
