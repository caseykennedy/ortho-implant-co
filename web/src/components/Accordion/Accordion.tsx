// Accordion:

// ___________________________________________________________________

import React, { useState, useRef } from 'react'

import { Box, Flex, Text, Heading } from '../../elements'

import Icon from '../Icons'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  children: React.ReactNode
  title: string
  color: string
  chevronColor: string
  chevronWidth?: string
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
  bg,
  borderColor,
  chevronColor,
  chevronWidth,
  children,
  color,
  colorActive,
  fontSize,
  subTitle,
  pt,
  pb,
  pr,
  pl,
  title
}) => {
  // Accordion hooks
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion-icon')

  // Reference the accordion content height
  const refContent = useRef<HTMLDivElement>(null)

  // Toggle classes / height
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    if (null !== refContent.current) {
      setHeightState(
        setActive === 'active' ? '0px' : `${refContent.current.scrollHeight}px`
      )
    }
    setRotateState(
      setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
    )
  }
  return (
    <S.AccordionContainer borderColor={borderColor}>
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
            <Heading
              as="h3"
              fontSize={fontSize}
              mb={0}
              width={!subTitle ? 1 : 1 / 2}
            >
              {title}
            </Heading>
            {subTitle && (
              <Text as="span" mb={0}>
                {subTitle}
              </Text>
            )}
          </S.AccordionToggleInner>
          <S.Carat
            className={setRotate}
            chevronColor={chevronColor}
            chevronWidth={chevronWidth}
          >
            <Icon name="plus" color="black" />
          </S.Carat>
        </S.AccordionToggle>
        <S.AccordionContent
          ref={refContent}
          style={{ maxHeight: `${setHeight}` }}
        >
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
