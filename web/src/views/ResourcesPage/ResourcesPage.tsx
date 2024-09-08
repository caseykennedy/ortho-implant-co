// ResourcesPage:

import React from 'react'

import PageTitle from '@/components/PageTitle'
import Billboard from '@/components/Billboard'
import Section from '@/components/Section'
import Icon from '@/components/Icons'
import { Heading } from '@/components/elements'

import useResourceTypes from '@/hooks/useResourceTypes'
import useLegal from '@/hooks/useLegal'

import * as S from './styles.scss'
import theme from '../../../config/theme'

const ResourceList = ({
  docs,
  title
}: {
  docs: ResourceDocShape[]
  title: string
}) => {
  return (
    <S.ResourceList>
      <Heading as="h4">
        <mark>{title}</mark>
      </Heading>
      {docs.map((doc, idx) => (
        <a
          href={doc.document.asset.url}
          key={idx}
          target="_blank"
          rel="noopener"
        >
          {doc.title}
          <Icon name="pdf" />
        </a>
      ))}
    </S.ResourceList>
  )
}

const ResourcesPage = () => {
  const page = useLegal()
  const resourceTypes = useResourceTypes()

  const pageTitle = {
    message: 'Resources'
  }

  const billboardProps = {
    bg: theme.colors.tertiary,
    message: page.billboard.message,
    title: page.billboard.title,
    src: page.billboard.figure.asset.gatsbyImageData,
    altText: page.billboard.figure.alt,
    btnText: page.billboard.linkTitle,
    to: page.billboard.linkTo
  }

  return (
    <S.ResourcesPage>
      <PageTitle {...pageTitle} />

      <Section bg="quinary">
        <div className="resource-grid">
          {/* <ResourceList
            docs={resourceTypes[0].node.resourceDocs}
            title={resourceTypes[0].node.title}
          />
          <ResourceList
            docs={resourceTypes[2].node.resourceDocs}
            title={resourceTypes[2].node.title}
          />
          <ResourceList
            docs={resourceTypes[1].node.resourceDocs}
            title={resourceTypes[1].node.title}
          />
          <ResourceList
            docs={resourceTypes[3].node.resourceDocs}
            title={resourceTypes[3].node.title}
          /> */}

          {resourceTypes.map(({ node: item }, idx) => (
            <ResourceList
              docs={item.resourceDocs}
              title={item.title}
              key={idx}
            />
          ))}
        </div>
      </Section>

      <Billboard {...billboardProps} />
    </S.ResourcesPage>
  )
}

export default ResourcesPage
