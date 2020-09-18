import { MdPerson } from 'react-icons/md'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: MdPerson,
  liveEdit: false,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string'
    },
    {
      name: 'boardMember',
      title: 'Board Member',
      type: 'boolean'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Set the page URL',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'lead',
      title: 'Lead',
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
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    },
  ],
}
