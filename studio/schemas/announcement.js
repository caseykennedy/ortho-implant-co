import { MdAnnouncement } from 'react-icons/md'

export default {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  icon: MdAnnouncement,
  fields: [
    {
      name: 'message',
      title: 'Message',
      type: 'string'
    },
    {
      title: 'Launch Scheduled At',
      name: 'launchAt',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    }
  ],
  liveEdit: true
}