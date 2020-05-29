import { MdDocument } from 'react-icons/md'

export default {
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  icon: MdDocument,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'lead',
      title: 'Lead',
      type: 'text'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text'
    },
    {
      name: 'blockContent',
      title: 'Block Content',
      type: 'blockContent',
    },
  ]
}