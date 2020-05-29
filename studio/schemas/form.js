import { MdApps } from 'react-icons/md'

export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  icon: MdApps,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string'
    },
    {
      title: 'Is this an EDC document?',
      name: 'edc',
      type: 'boolean'
    }
  ],
  liveEdit: false
}
