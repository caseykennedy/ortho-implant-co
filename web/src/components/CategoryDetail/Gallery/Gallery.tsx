// Gallery:

import React, { useState } from 'react'

// Libraries
import { GatsbyImage } from 'gatsby-plugin-image'
import Swiper from 'react-id-swiper'

// Components
import Lightbox from '../../Lightbox'

// Elements
import { Box } from '@/components/elements'

import * as S from './styles.scss'
import 'swiper/css/swiper.css'

type GalleryShape = {
  product: ProductNode
}

const ImageSwiper: React.FC = ({ children }) => {
  const params = {
    freeMode: false,
    slidesPerView: 1,
    spaceBetween: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 1,
        grabCursor: true,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 1,
        grabCursor: true,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 1,
        grabCursor: true,
      },
    },
  }
  return <Swiper {...params}>{children}</Swiper>
}

const Gallery: React.FC<GalleryShape> = ({ product }) => {
  // Map gallery images
  const galleryImages = product.gallery.map(img => img.asset.gatsbyImageData.src)

  // console.log(product.gallery)

  // Toggle and set index for lightbox
  const [isOpen, setOpen] = useState(false)
  const [currentImageIndex, setCurrentIndex] = useState(0)
  return (
    <S.Gallery>
      <Box>
        <ImageSwiper>
          {product.gallery.map((img, idx) => (
            <Box
              key={idx}
              onClick={() => {
                setCurrentIndex(idx)
                setOpen(true)
              }}
              bg="white"
            >
              <GatsbyImage
                image={img.asset.gatsbyImageData}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={product.shortName}
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
