// Department:

// ___________________________________________________________________

import React from 'react'

import { Text, Heading, Box, Flex } from '../../../elements'
import HeadingStroked from '../../../elements/HeadingStroked'

import MountainFlat from '../../MountainFlat'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Staff: React.FC<DepartmentShape> = ({ pageContext }) => {
  const page = pageContext.page
  // console.log('—————|— Sidebar —|—————')
  // console.log(pageContext)

  return (
    <S.Sidebar as="aside" width={[1, 1 / 3]}>
      <Box className="decorator">
        <MountainFlat />
      </Box>
      <S.Inner>
        <Box mb={8} color="background">
          <HeadingStroked
            as="h3"
            fontSize={3}
            fillColor="transparent"
            strokeColor={theme.colors.background}
            strokeWidth="2px"
          >
            Contact
          </HeadingStroked>
          <Text>Please contact us for more information.</Text>
        </Box>
        <Box mb={7}>
          <Heading as="h5">Email</Heading>
          <a href={`mailto:${page.email}`}>{page.email}</a>
        </Box>
        <Box mb={7}>
          <Heading as="h5">Telephone</Heading>
          <a href={`tel:${page.telephone}`}>{page.telephone}</a>
        </Box>
        {page.fax && (
          <Box mb={7}>
            <Heading as="h5">Fax</Heading>
            <a href={`tel:${page.fax}`}>{page.fax}</a>
          </Box>
        )}
        <Box>
          <Heading as="h5">Address</Heading>
          {!page.address ? (
            <a href="#">
              52701 CA Hwy 371
              <br />
              Anza, CA 92539
            </a>
          ) : (
            <a href="#">{page.address}</a>
          )}
        </Box>
      </S.Inner>
    </S.Sidebar>
  )
}

export default Staff
