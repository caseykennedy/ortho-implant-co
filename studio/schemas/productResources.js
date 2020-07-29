import { MdApps } from 'react-icons/md'

export default {
  name: 'productResources',
  title: 'Category',
  type: 'document',
  icon: MdApps,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string'
    },
  ],
  liveEdit: false
}