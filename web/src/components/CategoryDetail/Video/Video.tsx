// Video

// ___________________________________________________________________

import React from 'react'

// Libraries
import ResponsiveEmbed from 'react-responsive-embed'

// Elements
import { Heading, Box, Flex } from '@/components/elements'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

type Props = {
  src: string
  title: string
}

const Video: React.FC<Props> = ({ src, title }) => {
  return (
    <S.Video>
      <p>
        <small>{title}</small>
      </p>
      <ResponsiveEmbed src={src} allowFullScreen={true} />
    </S.Video>
  )
}

export default Video

// ___________________________________________________________________

const defaultProps = {
  src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  title: 'Placeholder'
}

Video.defaultProps = defaultProps
