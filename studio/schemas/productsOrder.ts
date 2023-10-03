import {defineField, defineType} from 'sanity'
import {MdList} from 'react-icons/md'

export default defineType({
  name: 'productsOrder',
  title: 'Products Order',
  type: 'document',
  icon: MdList,
  fields: [
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'reference', to: {type: 'product'}}],
    }),
  ],
})
