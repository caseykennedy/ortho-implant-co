import { MdDocument } from 'react-icons/md'

export default {
  name: 'economicDevCorp',
  title: 'Economic Development Corp',
  type: 'document',
  icon: MdDocument,
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96,
        slugify: input => input.toLowerCase()
      }
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    },
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'number'
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string'
    },
  ]
}
