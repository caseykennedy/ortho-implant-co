// TODO: More consistent naming / nesting

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
      gatsbyImageData: IGatsbyImageData
      url: string
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

type CategoryNode = {
  _id: string
  title: string
  description: string
  slug: {
    current: string
  }
  illustration: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
    alt
  }
  image: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
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

type ProductNode = {
  _rawAdditionalInfo: string
  _rawDescription: string
  _rawExcerpt: string
  _rawFeatures: string
  gallery: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
  }[]
  mainImage: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
  }
  publishedAt: string
  slug: {
    current: string
  }
  name: string
  shortName: string
  videos: {
    title: string
    url: string
  }[]
  categories: {
    title: string
    slug: {
      current: string
    }
  }[]
  resources: {
    title: string
    resource: {
      asset: {
        url: string
      }
    }
  }[]
  resourceDocs: {
    title: string
    resource: {
      document: {
        asset: {
          url: string
        }
      }
    }
  }[]
}

type ProductEdges = {
  node: {
    products: ProductNode[]
  }
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
  productsOrder: {
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

type HomeHeroQueryShape = {
  allSanityHomeHero: {
    nodes: {
      hero: {
        title: string
        message: string
        image: {
          asset: {
            gatsbyImageData: IGatsbyImageData
            url: string
          }
        }
        link
      }
    }[]
  }
}

// Rethink section shape

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
              gatsbyImageData: IGatsbyImageData
              url: string
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
      gatsbyImageData: IGatsbyImageData
      url: string
    }
  }
  _rawMessage: object
}[]

// Reviews section shape

type ReviewsSectionQueryShape = {
  allSanityHomeReviews: {
    edges: {
      node: {
        image: {
          asset: {
            gatsbyImageData: IGatsbyImageData
            url: string
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

type MantraSectionQueryShape = {
  allSanityHomeMantra: {
    edges: {
      node: {
        image: {
          asset: {
            gatsbyImageData: IGatsbyImageData
            url: string
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

type PostShape = {
  posts: {
    edges: PostEdges[]
  }
}

type PostEdges = {
  node: PostQuery
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
      gatsbyImageData: IGatsbyImageData
      url: string
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
      gatsbyImageData: IGatsbyImageData
      url: string
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

// Landing Page shape

type LandingPageShape = {
  landingPage: {
    edges: LandingPageEdges[]
  }
}

type LandingPageEdges = {
  node: LandingPageQuery
}

type LandingPageData = {
  landingPage: LandingPageQuery
}

type LandingPageQuery = {
  title: string
  slug: {
    current: string
  }
  billboard: {
    title: string
    message: string
    linkTo: string
    linkTitle: string
    figure: {
      alt: string
      asset: {
        gatsbyImageData: IGatsbyImageData
        url: string
      }
    }
  }
  intro: {
    _rawBody: string
    _rawLead: string
    heading: string
    title: string
    positioning: {
      _rawBody: string
      figure: {
        asset: {
          gatsbyImageData: IGatsbyImageData
          url: string
        }
        alt: string
      }
      lead: string
      title: string
    }[]
  }
  pageTitle: {
    image: {
      asset: {
        gatsbyImageData: IGatsbyImageData
        url: string
      }
    }
    link: string
    message: string
    title: string
  }
}

type LandingPageContextShape = {
  pageContext: {
    page: LandingPageQuery
  }
}

// Landing Page shape

type ResourceDocShape = {
  category: string
  document: {
    asset: {
      url: string
    }
  }
  title: string
}

type ResourceTypeShape = {
  resourceTypes: {
    edges: {
      node: {
        title: string
        resourceDocs: DocumentShape[]
      }
    }[]
  }
}

type ResourcesShape = {
  resources: {
    edges: {
      node: ResourceDocShape[]
    }[]
  }
}
