// Video

// ___________________________________________________________________

import React from 'react'

// Libraries
import ResponsiveEmbed from 'react-responsive-embed'

// Elements
import { Heading, Box, Flex } from '../../../elements'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

type Props = {
  src: string
}

const Video: React.FC<Props> = ({ src }) => {
  return (
    <S.Video>
      <ResponsiveEmbed
        src={src}
        allowfullscreen={true}
      />
    </S.Video>
  )
}

export default Video

// ___________________________________________________________________

const defaultProps = {
  src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}

Video.defaultProps = defaultProps