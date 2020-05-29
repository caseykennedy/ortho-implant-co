// Department:

// ___________________________________________________________________

import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import { Text, Heading, Box, Flex } from '../../elements'

import BlockContent from '../BlockContent'
import PageTitle from '../PageTitle'
import Main from '../Main'
import PrevNext from './PrevNext'
import Staff from './Staff'
import Sidebar from './Sidebar'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const Department: React.FC<DepartmentShape> = ({ pageContext }) => {
  const page = pageContext.page
  // console.log('—————|— PAGE —|—————')
  // console.log(page)
  return (
    <S.Department>
      <PageTitle width={[1]}>
        <Box className="title" width={[1, 1 / 2]}>
          <Heading as="h2">{page.pageTitle}</Heading>
        </Box>
        <Box className="image" width={[1, 1 / 2]}>
          {page.image && (
            <Img
              fluid={page.image.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={page.pageTitle}
            />
          )}
        </Box>
      </PageTitle>

      <Main width={[1, 2 / 3]}>
        <Text as="p" fontSize={3} mb={0}>
          {page._rawIntro[0].children[0].text}
        </Text>

        {/* <Heading as="h3" mt={7}>Meet the {page.department} team</Heading> */}

        <Staff pageContext={pageContext} />

        {page._rawContent && <BlockContent blocks={page._rawContent || []} />}
      </Main>
      <Sidebar pageContext={pageContext} />
      <PrevNext pageContext={pageContext} />
    </S.Department>
  )
}

export default Department
