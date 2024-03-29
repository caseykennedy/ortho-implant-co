// Lightbox:

import React from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

type LightboxShape = {
  currentImageIndex: number
  isOpen: boolean
  images: string[]
  onClose: (active: boolean) => void
  setCurrentIndex: (current: number) => void
}

const ImplantLightbox: React.FC<LightboxShape> = ({ currentImageIndex, isOpen, images, onClose, setCurrentIndex }) => {
  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={images[currentImageIndex]}
          nextSrc={images[(currentImageIndex + 1) % images.length]}
          prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
          onCloseRequest={onClose}
          onMovePrevRequest={() => setCurrentIndex((currentImageIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setCurrentIndex((currentImageIndex + 1) % images.length)}
        />
      )}
    </>
  )
}

export default ImplantLightbox
