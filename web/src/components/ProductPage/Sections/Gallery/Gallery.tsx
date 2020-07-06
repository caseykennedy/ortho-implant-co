// Gallery:

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

// Libraries
import Img from 'gatsby-image/withIEPolyfill'
import { Grid, Cell } from 'styled-css-grid'
import Swiper from 'react-id-swiper'

// Components
import Lightbox from '../../../Lightbox'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '../../../../elements'

import * as S from './styles.scss'
import theme from '../../../../../config/theme'
import 'swiper/css/swiper.css'

// ___________________________________________________________________

type GalleryShape = {
  implant: ProductNode
}

const ImageSwiper: React.FC = ({ children }) => {
  const params = {
    freeMode: true,
    slidesPerView: 4,
    spaceBetween: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 2
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 2,
        grabCursor: true
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 2,
        grabCursor: true
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 2,
        grabCursor: true
      }
    }
  }
  return <Swiper {...params}>{children}</Swiper>
}

const Gallery: React.FC<GalleryShape> = ({ implant }) => {
  // Map gallery images
  const galleryImages = implant.gallery.map(img => img.asset.fluid.src)

  console.log(implant.gallery)

  // Toggle and set index for lightbox
  const [isOpen, setOpen] = useState(false)
  const [currentImageIndex, setCurrentIndex] = useState(0)
  return (
    <S.Gallery>
      <Box>
        <ImageSwiper>
          {implant.gallery.map((img, idx) => (
            <Box
              key={idx}
              onClick={() => {
                setCurrentIndex(idx)
                setOpen(true)
              }}
              bg="white"
            >
              <Img
                fluid={img.asset.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={implant.shortName}
              />
            </Box>
          ))}
        </ImageSwiper>
      </Box>

      <Box>
        {/* <button type="button" onClick={() => setOpen(true)}>
          Open Lightbox
        </button> */}
        <Lightbox
          currentImageIndex={currentImageIndex}
          setCurrentIndex={setCurrentIndex}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          images={galleryImages}
        />
      </Box>
    </S.Gallery>
  )
}

export default Gallery
