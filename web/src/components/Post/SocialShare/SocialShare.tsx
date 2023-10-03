// Previous / Next pre-footer
// TODO: button bg image

import React from 'react'

// Components
import Icon from '../../Icons'

// Theme
import theme from '../../../../config/theme'

const SocialShare: React.FC<{ name: string; slug: string }> = ({ name, slug }) => {
  const shareSlug = `https://orthoimplantcompany.com/${slug}`

  switch (name) {
    case 'facebook':
      return (
        <a href={`//www.facebook.com/sharer.php?u=${shareSlug}`} target="_blank">
          <Icon name={name} />
        </a>
      )
    case 'twitter':
      return (
        <a href={`//twitter.com/share?url=${shareSlug}`} target="_blank">
          <Icon name={name} />
        </a>
      )
    case 'linkedIn':
      return (
        <a href={`//www.linkedin.com/shareArticle?mini=true&url=${shareSlug}`} target="_blank">
          <Icon name={name} />
        </a>
      )
    default:
      return null
  }
}

export default SocialShare
