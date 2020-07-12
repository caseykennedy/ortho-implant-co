// Previous / Next pre-footer
// TODO: button bg image

// ___________________________________________________________________

import React from 'react'

// Components
import Icon from '../../Icons'

// Theme
import theme from '../../../../config/theme'

// ___________________________________________________________________

const siteDomain = 'http://orthoimplantcompany.com'

const SocialShare: React.FC<{ name: string; slug: string }> = ({
  name,
  slug
}) => {
  switch (name) {
    case 'facebook':
      return (
        <a
          href={`//www.facebook.com/sharer.php?u=${siteDomain}/${slug}`}
          target="_blank"
        >
          <Icon name={name} />
        </a>
      )
    case 'twitter':
      return (
        <a
          href={`//twitter.com/share?url=${siteDomain}/${slug}`}
          target="_blank"
        >
          <Icon name={name} />
        </a>
      )
    case 'linkedIn':
      return (
        <a
          href={`//www.linkedin.com/shareArticle?mini=true&url=${siteDomain}/${slug}`}
          target="_blank"
        >
          <Icon name={name} />
        </a>
      )
    default:
      return null
  }
}

export default SocialShare
