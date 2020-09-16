import { MdHighlight } from "react-icons/md";

export default {
  name: 'position',
  title: 'Position',
  type: 'document',
  icon: MdHighlight,
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'lead',
      title: 'Lead',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'figure',
      title: 'Figure',
      type: 'figure',
    }
  ]
}
