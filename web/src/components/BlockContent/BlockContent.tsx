import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'

type BlockShape = {
  blocks: any
}

const serializers = {
  types: {
    block(props: any) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>

        case 'h2':
          return <h2>{props.children}</h2>

        case 'h3':
          return <h3>{props.children}</h3>

        case 'h4':
          return <h4>{props.children}</h4>

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>

        case 'a':
          return <a rel="noopener" target="_blank">{props.children}</a>

        case 'ul':
          return <ul>{props.children}</ul>

        case 'li':
          return <li>{props.children}</li>

        default:
          return <p>{props.children}</p>
      }
    }
  }
}

const BlockContent: React.FC<BlockShape> = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
