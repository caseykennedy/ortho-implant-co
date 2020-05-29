// EdcDocs:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Router } from '@reach/router'

import { Flex } from '../../../../elements'
import Icon from '../../../Icons'
import Accordion from '../../../Accordion'

import * as S from './styles.scss'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

type FormsQueryShape = {
  allSanityForm: {
    edges: {
      node: {
        edc: boolean
        link: string
        title: string
        id: string
      }
    }[]
  }
}

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.text,
  borderColor: theme.colors.text
}

// ___________________________________________________________________

const FormItems: React.FC = () => {
  const data: FormsQueryShape = useStaticQuery(graphql`
    query EdcFormsQuery {
      allSanityForm(
        sort: { fields: title, order: ASC }
        filter: { edc: { eq: true } }
      ) {
        edges {
          node {
            edc
            link
            title
            id
          }
        }
      }
    }
  `)
  const formQuery = data.allSanityForm.edges
  return (
    <Flex width={[1]} className="content">
      {formQuery.map(({ node: item }) => (
        <S.FormItem href={item.link} target="_blank" key={item.id}>
          <Icon name="document" />
          {item.title}
        </S.FormItem>
      ))}
    </Flex>
  )
}

const EdcDocs: React.FC = () => {
  return (
    <Accordion
      title="EDC Documents"
      fontSize={4}
      bg={theme.colors.background}
      {...AccordionProps}
    >
      <S.Section>
        <FormItems />

        {/* <Box bg="black" width={[1, 2 / 8]} className="image">
              <ImgMatch src="lone-mtn.jpg" altText="Cahuilla Casino Hotel" />
            </Box> */}
      </S.Section>
    </Accordion>
  )
}

export default EdcDocs
