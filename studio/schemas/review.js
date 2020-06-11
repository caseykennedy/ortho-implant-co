import { MdContacts } from "react-icons/md";

export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  icon: MdContacts,
  liveEdit: false,
  fields: [
    {
      name: 'position',
      title: 'Position',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    }
  ]
}
