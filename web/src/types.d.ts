// TODO: More consistent naming / nesting

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

type PersonNode = {
  _rawBio: string
  _rawLead: string
  name: string
  jobTitle: string
  boardMember: boolean
  order: number
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

type PersonEdges = {
  node: PersonNode
}

type PersonShape = {
  people: {
    edges: PersonEdges[]
  }
}

// Category shape
// ___________________________________________________________________

type CategoryNode = {
  _id: string
  title: string
  description: string
  slug: {
    current: string
  }
  illustration: {
    asset: {
      fluid: ImageShape
      title
    }
    alt
  }
  image: {
    asset: {
      fluid: ImageShape
    }
  }
}

type CategoryEdges = {
  node: CategoryNode
  previous: {
    _id: string
    title: string
    slug: {
      current: string
    }
  }
  next: {
    _id: string
    title: string
    slug: {
      current: string
    }
  }
}

type CategoryShape = {
  categories: {
    edges: CategoryEdges[]
  }
}

type CategoryontextShape = {
  pageContext: {
    page: CategoryNode
    prev: {
      _id: string
      title: string
      slug: {
        current: string
      }
    }
    next: {
      _id: string
      title: string
      slug: {
        current: string
      }
    }
  }
}

// Product shape
// ___________________________________________________________________

type ProductNode = {
  _rawAdditionalInfo: string
  _rawDescription: string
  _rawExcerpt: string
  _rawFeatures: string
  gallery: {
    asset: {
      fluid: ImageShape
    }
  }[]
  mainImage: {
    asset: {
      fluid: ImageShape
    }
  }
  publishedAt: string
  slug: {
    current: string
  }
  name: string
  shortName: string
  videoURL: string
  videoURL2: string
  categories: {
    title: string
  }[]
  resources: {
    _id: string
    url: string
    title: string
  }[]
}

type ProductEdges = {
  node: ProductNode
  previous: {
    name: string
    shortName: string
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

type ProductShape = {
  products: {
    edges: ProductEdges[]
  }
}

type ProductContextShape = {
  pageContext: {
    page: ProductNode
    prev: {
      name: string
      shortName: string
      slug: {
        current: string
      }
      _rawExcerpt: string
    }
    next: {
      name: string
      shortName: string
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
  _rawMessage: object
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

// Job post shape
// ___________________________________________________________________

type JobPostShape = {
  jobs: {
    edges: {
      node: JobPostQuery
    }[]
  }
}

type JobData = {
  job: JobPostQuery
}

type JobPostQuery = {
  _rawExcerpt: string
  _rawBody: string
  publishedAt: string
  title: string

  slug: {
    current: string
  }
}

type CareersContextShape = {
  pageContext: {
    page: JobPostQuery
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

// Post shape
// ___________________________________________________________________

type PostShape = {
  posts: {
    edges: {
      node: PostQuery
    }[]
  }
}

type PostData = {
  post: PostQuery
}

type PostQuery = {
  title: string
  _rawExcerpt: string
  _rawBody: string
  _id: string
  publishedAt: string
  slug: {
    current: string
  }
  mainImage: {
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
  categories: {
    title: string
  }[]
  authors: PostAuthor
}

type PostAuthor = {
  name: string
  jobTitle: string
  headshot: {
    asset: {
      fluid: {
        aspectRatio: number
        base64: string
        sizes: string
        src: string
        srcSet: string
        srcSetWebp: string
        srcWebp: string
      }
    }
  }
}

type PostContextShape = {
  pageContext: {
    page: PostQuery
    prev: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
    next: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
  }
}
