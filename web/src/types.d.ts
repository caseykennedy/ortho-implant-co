type ImageShape = {
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
  base64: string
  tracedSVG: string
  srcWebp: string
  srcSetWebp: string
}

type PersonShape = {
  _rawBio: string
  _rawLead: string
  name: string
  title: string
  boardMember: boolean
  slug: {
    _key: string
    current: string
  }
  headshot: {
    asset: {
      fluid: {
        src: string
        aspectRatio: number
        base64: string
        sizes: string
        srcSet: string
        srcSetWebp: string
        srcWebp: string
      }
    }
  }
}

// Product shape
// ___________________________________________________________________

type ProductShape = {
  products: {
    edges: {
      node: {
        _rawAdditionalInfo: string
        _rawDescription: string
        _rawExcerpt: string
        _rawFeatures: string
        gallery: {
          _key: string
          _type: string
        }
        publishedAt: string
        slug: {
          current: string
        }
        name: string
        shortName: string
        videoLink: string
        categories: {
          title: string
        }[]
      }
    }[]
  }
}

type ProductContextShape = {
  pageContext: {
    page: {
      _rawAdditionalInfo: string
      _rawDescription: string
      _rawExcerpt: string
      _rawFeatures: string
      gallery: {
        _key: string
        _type: string
      }
      publishedAt: string
      slug: {
        current: string
      }
      name: string
      videoLink: string
      categories: {
        title: string
      }[]
    }
    prev: {
      name: string
      slug: {
        current: string
      }
      _rawExcerpt: string
    }
    next: {
      name: string
      shortName: string
      slug: {
        current: string
      }
      _rawExcerpt: string
    }
  }
}

// Home Hero shape
// ___________________________________________________________________

type HomeHeroQueryShape = {
  allSanityHomeHero: {
    nodes: {
      hero: {
        title: string
        message: string
        image: {
          asset: {
            fluid: {
              src: string
              aspectRatio: number
              base64: string
              sizes: string
              srcSet: string
              srcSetWebp: string
              srcWebp: string
            }
          }
        }
        link
      }
    }[]
  }
}

// Rethink section shape
// ___________________________________________________________________

type RethinkSectionQueryShape = {
  allSanityHomeRethink: {
    edges: {
      node: {
        heading: string
        title: string
        linkTitle: string
        linkTo: string
        id: string
        tabPanels: {
          linkTo: string
          linkTitle: string
          tag: string
          title: string
          image: {
            asset: {
              fluid: {
                src: string
                aspectRatio: number
                base64: string
                sizes: string
                srcSet: string
                srcSetWebp: string
                srcWebp: string
              }
            }
          }
          _rawMessage: string
        }[]
      }
    }[]
  }
}

type RethinkPanelShape = {
  linkTo: string
  linkTitle: string
  tag: string
  title: string
  image: {
    asset: {
      fluid: {
        src: string
        aspectRatio: number
        base64: string
        sizes: string
        srcSet: string
        srcSetWebp: string
        srcWebp: string
      }
    }
  }
  _rawMessage: string
}[]

// Reviews section shape
// ___________________________________________________________________

type ReviewsSectionQueryShape = {
  allSanityHomeReviews: {
    edges: {
      node: {
        image: {
          asset: {
            fluid: {
              src: string
              aspectRatio: number
              base64: string
              sizes: string
              srcSet: string
              srcSetWebp: string
              srcWebp: string
            }
          }
        }
        reviews: {
          _rawQuote: string
          location: string
          position: string
        }[]
        _key: string
      }
    }[]
  }
}

// Mantra section shape
// ___________________________________________________________________

type MantraSectionQueryShape = {
  allSanityHomeMantra: {
    edges: {
      node: {
        image: {
          asset: {
            fluid: {
              src: string
              aspectRatio: number
              base64: string
              sizes: string
              srcSet: string
              srcSetWebp: string
              srcWebp: string
            }
          }
        }
        heading: string
        linkTitle: string
        linkTo: string
        title: string
        _rawMessage: string
      }
    }[]
  }
}
