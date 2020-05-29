// Accordion:

// ___________________________________________________________________

import React, { useState, useRef } from 'react'

import { Box, Text, Heading } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type AccordionProps = {
  children: React.ReactNode
  title: string
  color: string
  chevronColor: string
  borderColor: string
  colorActive: string
  bg: string
  fontSize?: number
}

// ___________________________________________________________________

const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
  chevronColor,
  color,
  borderColor,
  colorActive,
  bg,
  fontSize
}) => {
  // Accordion hooks
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion-icon')

  // Reference the accordion content height
  const content = useRef(null)

  

  // Toggle classes / height
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
    )
  }
  return (
    <S.AccordionContainer bg={bg}>
      <S.AccordionInner>
        <S.AccordionToggle
          className={setActive}
          onClick={toggleAccordion}
          color={color}
          colorActive={colorActive}
          bg={bg}
        >
          <Heading as="h2" fontSize={fontSize} mb={0}>
            {title}
          </Heading>
          <S.Carat
            name="carat"
            color="white"
            className={setRotate}
            chevronColor={chevronColor}
          />
        </S.AccordionToggle>
        <S.AccordionContent
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          borderColor={borderColor}
        >
          <Box>{children}</Box>
        </S.AccordionContent>
      </S.AccordionInner>
    </S.AccordionContainer>
  )
}

export default Accordion

// ___________________________________________________________________
