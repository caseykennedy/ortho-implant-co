// SEO Component
// ref: https://www.

// ___________________________________________________________________

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import useSiteSettings from '../../hooks/useSiteSettings'

import Facebook from './facebook'
import Twitter from './twitter'

// ___________________________________________________________________

type Props = {
  banner?: string
} & typeof defaultProps
const defaultProps = {
  title: '',
  desc: '',
  pathname: '',
  node: {
    modifiedTime: '',
    birthTime: ''
  },
  individual: false
}

const SEO = ({ title, desc, banner, pathname, node, individual }: Props) => {
  const { site } = useStaticQuery(query)
  const settings = useSiteSettings()

  const { buildTime } = site

  const seo = {
    title: `${title}` || settings.titleAlt,
    description: desc || settings.description,
    image: `${banner || settings.banner.asset.url}`,
    url: `${settings.url}${pathname || ''}`
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: settings.url,
    headline: settings.headline,
    inLanguage: settings.language,
    mainEntityOfPage: settings.url,
    description: settings.description,
    name: settings.title,
    author: {
      '@type': 'Person',
      name: settings.author
    },
    copyrightHolder: {
      '@type': 'Person',
      name: settings.author
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: settings.author
    },
    publisher: {
      '@type': 'Person',
      name: settings.author
    },
    datePublished: '2019-03-10T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${settings.banner}`
    }
  }

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': settings.url,
        name: 'Homepage'
      },
      position: 1
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${settings.url}/rethink`,
        name: 'Rethink'
      },
      position: 2
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${settings.url}/about`,
        name: 'About'
      },
      position: 3
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${settings.url}/implants`,
        name: 'Implants'
      },
      position: 4
    }
  ]

  let schemaArticle = null

  if (individual) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: settings.author
      },
      copyrightHolder: {
        '@type': 'Person',
        name: settings.author
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: settings.author
      },
      publisher: {
        '@type': 'Organization',
        name: settings.author,
        logo: {
          '@type': 'ImageObject',
          url: `${settings.banner.asset.gatsbyImageData.src}`
        }
      },
      datePublished: node ? node.birthTime : '2019-03-10T10:30:00+01:00',
      dateModified: node ? node.modifiedTime : '2019-03-10T10:30:00+01:00',
      description: seo.description,
      headline: seo.title,
      inLanguage: 'en',
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image
      },
      mainEntityOfPage: seo.url
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title
      },
      position: 5
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={settings.language} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name={seo.title} content={seo.description} />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!individual && (
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
        {individual && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={individual ? 'article' : 'website'}
        url={seo.url}
        locale={settings.language}
        name={settings.ogSiteName}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={settings.userTwitter}
      />
    </>
  )
}

export default SEO

SEO.defaultProps = defaultProps

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`
