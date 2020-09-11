import { MdLink } from "react-icons/md";

export default {
  name: 'videoURL',
  title: 'Video URL',
  type: 'document',
  icon: MdLink,
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string'
    },
  ]
}
