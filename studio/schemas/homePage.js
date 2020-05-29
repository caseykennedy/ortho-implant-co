import { MdDocument } from 'react-icons/md'

export default {
  name: 'homePage',
  title: 'Home Page',
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