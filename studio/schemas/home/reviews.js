import { MdDocument } from 'react-icons/md'

export default {
  name: 'homeReviews',
  title: 'Home Reviews',
  type: 'document',
  icon: MdDocument,
  fields: [
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{type: 'testimonial'}]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}