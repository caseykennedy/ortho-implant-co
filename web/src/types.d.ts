type ChildImageSharp = {
  childImageSharp: {
    fluid: {
      aspectRatio: number
      src: string
      srcSet: string
      sizes: string
      base64: string
      tracedSVG: string
      srcWebp: string
      srcSetWebp: string
    }
  }
}

type HomePageShape = {
  allSanityHomePage: {
    edges: {
      node: {
        message: string
        linkTo: string
        linkTitle: string
      }
    }[]
  }
}

// Department page template shape
// ___________________________________________________________________

type DepartmentShape = {
  pageContext: {
    page: {
      address: string
      cell: string
      department: string
      email: string
      fax: string
      government: boolean
      id: string
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
      name: string
      pageTitle: string
      slug: {
        current: string
      }
      telephone: string
      _rawContent: {
        _key: string
        children: {
          _key: string
          text: string
        }[]
      }[]
      _rawIntro: {
        _key: string
        children: {
          _key: string
          text: string
        }[]
      }[]
    }
    next: {
      pageTitle: string
      slug: {
        current: string
      }
    }
    prev: {
      pageTitle: string
      slug: {
        current: string
      }
    }
  }
}

// People / Staff / Council shape
// ___________________________________________________________________

type PeopleShape = {
  people: {
    edges: {
      node: {
        cell: string
        department: string
        email: string
        fax: string
        id: string
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
        name: string
        seated: string
        telephone: string
        title: string
        slug: {
          current: string
        }
        _rawBio: {
          _key: string
          children: {
            _key: string
            text: string
          }[]
        }[]
        _rawContent: {
          _key: string
          children: {
            _key: string
            text: string
          }[]
        }[]
        bio: {
          _key: string
          _type: string
          style: string
          list: string
        }
      }
    }[]
  }
}

// About page sections shape
// ___________________________________________________________________

type AboutQueryShape = {
  allSanityAboutSection: {
    edges: {
      node: {
        title: string
        lead: string
        id: string
        content: string
        _rawBlockContent: string
        image: {
          asset: {
            fluid: {
              srcWebp: string
              srcSetWebp: string
              srcSet: string
              src: string
              sizes: string
              base64: string
              aspectRatio: number
            }
          }
        }
        bgColor: string
      }
    }[]
  }
}