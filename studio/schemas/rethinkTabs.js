import { MdCropLandscape } from "react-icons/md";

export default {
  name: 'rethinkTabs',
  title: 'Rethink Tabs',
  type: 'document',
  icon: MdCropLandscape,
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string'
    },
    {
      name: 'message',
      title: 'Message',
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
      name: 'linkTitle',
      title: 'Link title',
      type: 'string'
    },
    {
      name: 'linkTo',
      title: 'Link to',
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
  ]
}
