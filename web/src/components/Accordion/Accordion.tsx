// Accordion:

// ___________________________________________________________________

import React, { useState, useRef } from 'react'

import { Box, Flex, Text, Heading } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  children: React.ReactNode
  title: string
  color: string
  chevronColor: string
  borderColor: string
  colorActive: string
  bg: string
  fontSize?: number | number[] | string
  subTitle?: string
  pt?: number | number[] | string
  pb?: number | number[] | string
  pr?: number | number[] | string
  pl?: number | number[] | string
}

// ___________________________________________________________________

const Accordion: React.FC<Props> = ({
  children,
  title,
  chevronColor,
  color,
  borderColor,
  colorActive,
  bg,
  fontSize,
  subTitle,
  pt,
  pb,
  pr,
  pl
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
    <S.AccordionContainer bg={bg} borderColor={borderColor}>
      <S.AccordionInner>
        <S.AccordionToggle
          className={setActive}
          onClick={toggleAccordion}
          color={color}
          colorActive={colorActive}
          bg={bg}
          pt={pt}
          pr={pr}
          pb={pb}
          pl={pl}
        >
          <S.AccordionToggleInner width={2 / 3}>
            <Heading as="h3" fontSize={fontSize} mb={0} width={1 / 2}>
              {title}
            </Heading>
            <Text as="span" mb={0}>
              {subTitle}
            </Text>
          </S.AccordionToggleInner>
          <S.Carat
            name="nextArrow"
            color="white"
            className={setRotate}
            chevronColor={chevronColor}
          />
        </S.AccordionToggle>
        <S.AccordionContent ref={content} style={{ maxHeight: `${setHeight}` }}>
          <Box>{children}</Box>
        </S.AccordionContent>
      </S.AccordionInner>
    </S.AccordionContainer>
  )
}

export default Accordion

// ___________________________________________________________________

const defaultProps = {
  pt: [7, 8],
  pb: [7, 8],
  pr: [5, 7],
  pl: [5, 7]
}

Accordion.defaultProps = defaultProps
