import { MdContacts } from "react-icons/md";

export default {
  name: 'rethinkNotions',
  title: 'Rethink Notions Section',
  type: 'document',
  icon: MdContacts,
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'rethinkNotions',
      title: 'Rethink Notions',
      type: 'array',
      of: [{type: 'notion'}]
    }
  ]
}
