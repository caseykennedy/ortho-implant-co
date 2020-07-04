declare module '*.svg'
declare module '*.eot'
declare module '*.ttf'
declare module '*.otf'
declare module '*.woff'
declare module '*.woff2'

declare module 'gatsby-image/withIEPolyfill'
declare module 'react-anchor-link-smooth-scroll'
declare module '@sanity/block-content-to-react'
declare module '@feuer/react-tabs'
declare module 'react-id-swiper'
declare module 'gatsby-plugin-transition-link'
declare module 'react-scroll-parallax'
declare module 'react-image-lightbox'

function createRef<T>(): RefObject<T>
interface RefObject<T> {
  // immutable
  readonly current: T | null
}