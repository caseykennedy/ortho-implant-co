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
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'seated',
      title: 'Seated',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
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
      name: 'bio',
      title: 'Bio',
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
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'telephone',
      title: 'Telephone',
      type: 'string'
    },
    {
      name: 'cell',
      title: 'Cell Phone',
      type: 'string'
    },
    {
      name: 'fax',
      title: 'Fax',
      type: 'string'
    },
    {
      title: 'Department',
      name: 'department',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Tribal Council', value: 'Tribal Council'},
          {title: 'Economic Development', value: 'Economic Development'},
          {title: 'Cahuilla Gaming Agency', value: 'Cahuilla Gaming Agency'},
          {title: 'Tribal Administration', value: 'Tribal Administration'},
          {title: 'Family and Social Services', value: 'Family and Social Services'},
          {title: 'Environmental Protection Agency', value: 'Environmental Protection Agency'},
          {title: 'Public Works', value: 'Public Works'},
          {title: 'Cultural', value: 'Cultural'},
          {title: 'Public Safety', value: 'Public Safety'},
        ]
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
