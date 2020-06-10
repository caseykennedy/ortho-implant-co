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
