import {defineField, defineType} from 'sanity'
import {MdPanorama} from 'react-icons/md'

export default defineType({
  name: 'aboutIntro',
  title: 'Intro',
  type: 'document',
  icon: MdPanorama,
  liveEdit: false,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'positioning',
      title: 'Positioning',
      type: 'array',
      of: [{type: 'position'}],
    }),
  ],
})
