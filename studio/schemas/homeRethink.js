import { MdContacts } from "react-icons/md";

export default {
  name: 'homeRethink',
  title: 'Rethink Section',
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
      title: 'Tab Panels',
      name: 'tabPanels',
      type: 'array',
      of: [{type: 'rethinkTabs'}]
    }
  ]
}
