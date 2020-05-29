import { MdAnnouncement } from 'react-icons/md'

export default {
  name: 'jobPost',
  title: 'Job Post',
  type: 'document',
  icon: MdAnnouncement,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string'
    }
  ],
  liveEdit: false
}