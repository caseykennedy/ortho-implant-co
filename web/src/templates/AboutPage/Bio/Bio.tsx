// Bio portal:

// ___________________________________________________________________

import React, { useRef } from 'react'
import Img from 'gatsby-image/withIEPolyfill'

// Components
import BlockContent from '../../../components/BlockContent'

// UI + Styles
import * as S from './styles.scss'
import { Box, Heading, Text } from '../../../elements'
import theme from '../../../../config/theme'

// ___________________________________________________________________

type Props = {
  bio: PersonNode
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Bio: React.FC<Props> = ({ bio, setModalOpen }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)

  return (
    <S.Bio>
      <Box width={[1, 1 / 3]} mb={[7, 0]} position="relative">
        <Box width={[2 / 3, 1]} className="bio__figure">
          {bio.headshot && (
            <Img
              fluid={{ ...bio.headshot.asset.fluid, aspectRatio: 2 / 3 }}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={bio.name}
            />
          )}
        </Box>
      </Box>

      <Box width={[1, 2 / 3]} pt={[5, 7]} pb={7} pl={[0, 7]}>
        <Heading
          as="h2"
          fontSize={[4, 5]}
          fontWeight={500}
          mb={0}
          className="t--uppercase"
        >
          {bio && bio.name}
        </Heading>
        <Text as="p" color="">
          <mark>{bio && bio.jobTitle}</mark>
        </Text>
        <Box fontSize={'1.5rem'} my={7}>
          {bio && <BlockContent blocks={bio._rawLead || []} />}
        </Box>
        {bio && <BlockContent blocks={bio._rawBio || []} />}
      </Box>
    </S.Bio>
  )
}

export default Bio
