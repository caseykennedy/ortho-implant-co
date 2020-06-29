// ImplantsPage:

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useTransition, useSpring } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import Img from 'gatsby-image/withIEPolyfill'
import Swiper from 'react-id-swiper'

import useProduct from '../../hooks/useProduct'

import PageTitle from '../PageTitle'
import Filters from './Sections/Filters'
import Icon from '../Icons'

import { Card, CardHolder, CardColumn } from '../../elements/Card'
import Divider from '../../elements/Divider'
import { Box, Flex, Heading, Text } from '../../elements'
import * as S from './styles.scss'
import theme from '../../../config/theme'
import ImgMatch from '../ImgMatch'

// ___________________________________________________________________

type ImplantShape = {
  implant: {
    _rawAdditionalInfo: string
    _rawDescription: string
    _rawExcerpt: string
    _rawFeatures: string
    gallery: {
      _key: string
      _type: string
    }[]
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
}

// const ProductCard: React.FC<ImplantShape> = ({ implant }) => {
//   const [hoverRef, isHovered] = useHover()
//   // Only show item when in view
//   const [manifestoRef, inView] = useInView({
//     triggerOnce: true,
//     rootMargin: '-200px 0px'
//   })
//   const manifestoSpring = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? 'matrix(1, 0, 0, 1, 0, 0)' : 'matrix(1, 0, 0, 1, 0, 52)'
//   })
//   return (
//     <Card>
//       <Box width={[7 / 10]} className="card__headshot">
//         <ImgMatch src="office-space.png" altText="placeholder" />
//       </Box>
//       <div className="card__content">
//         <Box mt={3}>
//           <Heading as="h4">{implant.title}</Heading>
//           <Text as="h5" className="t--small">
//             {implant.categories[0].title}
//           </Text>
//         </Box>
//         <Text as="span" mt={8} className="card__meta  t--uppercase">
//           details
//           <Icon name="nextArrow" />
//         </Text>
//       </div>
//     </Card>
//   )
// }

const TeamSwiper: React.FC = ({ children }) => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // },
    freeMode: true,
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        grabCursor: true
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        grabCursor: true
      },
      320: {
        slidesPerView: 1,
        spaceBetween: -2,
        grabCursor: true
      }
    }
  }
  return <Swiper {...params}>{children}</Swiper>
}

type ProductsPanelProps = {
  category: string
}

const ProductPanel: React.FC<ProductsPanelProps> = ({ category }) => {
  const implants = useProduct()
  const filtered = implants.filter(
    implant => implant.node.categories[0].title === category
  )
  console.log('—————|— implants —|—————')
  console.log(implants)
  return (
    <Box mb={7}>
      <Box width={[1, 2 / 3]} mb={[7, 8]}>
        {/* <Heading as="h5" color="tertiary">
                        Team
                      </Heading> */}
        <Heading as="h3" fontSize={3} fontWeight={400}>
          {category}
        </Heading>
      </Box>

      <CardHolder width={1}>
        <TeamSwiper>
          {filtered.map(({ node: implant }, idx) => (
            <Link to={`/implants/${implant.slug.current}`} key={idx}>
              <Card>
                <Box width={[7 / 10]} className="card__headshot">
                  {!implant.mainImage ? (
                    <ImgMatch
                      src="DRP-3-Hole-Narrow-Left 1.png"
                      altText="placeholder"
                    />
                  ) : (
                    <Img
                      fluid={implant.mainImage.asset.fluid}
                      objectFit="cover"
                      objectPosition="50% 50%"
                      alt={implant.name}
                    />
                  )}
                </Box>
                <div className="card__content">
                  <Box mt={3}>
                    <Heading as="h4" mt={5} color="text">
                      {implant.shortName}
                    </Heading>
                    <Text as="h5" className="t--small">
                      {implant.categories[0].title}
                    </Text>
                  </Box>
                  <Text as="span" mt={5} className="card__meta  t--uppercase">
                    details
                    <Icon name="nextArrow" />
                  </Text>
                </div>
              </Card>
            </Link>
          ))}
        </TeamSwiper>
      </CardHolder>
      {/* <button onClick={goPrev}>Prev</button>
                    <button onClick={goNext}>Next</button> */}
    </Box>
  )
}

const ImplantsPage = () => {
  const pageTitle = {
    altText: 'asdf',
    message: 'implants that are<br />good for all',
    title: 'quality + value',
    border: true
  }
  return (
    <S.ImplantsPage>
      <PageTitle {...pageTitle} />

      <Flex>
        <S.Spacer />
        <Box mt={10} width={1}>
          <nav>
            <a>Hip Fractures</a>
            <a>Plates and Screws</a>
            <a>External Fixation</a>
            <a>IM Nails</a>
            <a>Sports Medicine</a>
          </nav>
          <Divider py="1px" bg="black" />
          <Box pt={7} px={5} width={1}>
            <ProductPanel category="Hip Fractures" />
          </Box>
          <Divider py="1px" bg="black" />
          <Box pt={7} px={5} width={1}>
            <ProductPanel category="Plates and Screws" />
          </Box>
          <Divider py="1px" bg="black" />
          <Box pt={7} px={5} width={1}>
            <ProductPanel category="External Fixation" />
          </Box>
          <Box pt={7} px={5} width={1}>
            <ProductPanel category="IM Nails" />
          </Box>
          <Box pt={7} px={5} width={1}>
            <ProductPanel category="Sports Medicine" />
          </Box>
        </Box>
      </Flex>

      <Divider py={10} bg="white" />
    </S.ImplantsPage>
  )
}

export default ImplantsPage
