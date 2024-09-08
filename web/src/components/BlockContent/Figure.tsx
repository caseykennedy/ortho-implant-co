import React from 'react'
import Image from 'gatsby-plugin-sanity-image'

const Figure = (props: any) => {
  return (
    <figure>
      {props.asset && (
        <Image
          {...props}
          alt={props.alt}
          width={500}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      )}
      <figcaption>{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
