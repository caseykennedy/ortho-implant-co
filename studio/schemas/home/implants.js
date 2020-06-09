import { MdDocument } from 'react-icons/md'

export default {
  name: 'homeImplants',
  title: 'Home Implants',
  type: 'document',
  icon: MdDocument,
  fields: [
    {
      name: 'message',
      title: 'Message',
      type: 'string'
    },
    {
      name: 'linkTitle',
      title: 'Link Title',
      type: 'string'
    },
    {
      name: 'linkTo',
      title: 'Link To',
      type: 'string'
    },
  ]
}