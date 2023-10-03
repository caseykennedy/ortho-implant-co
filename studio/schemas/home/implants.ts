import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homeImplants',
  title: 'Home Implants',
  type: 'document',
  // icon: MdDocument,
  fields: [
    defineField({
      name: 'message',
      title: 'Message',
      type: 'string',
    }),
    defineField({
      name: 'linkTitle',
      title: 'Link Title',
      type: 'string',
    }),
    defineField({
      name: 'linkTo',
      title: 'Link To',
      type: 'string',
    }),
  ],
})
