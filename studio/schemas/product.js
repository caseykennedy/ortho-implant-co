export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'shortName',
      title: 'Short Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'features',
      title: 'Features',
      type: 'blockContent'
    },
    {
      name: 'additionalInfo',
      title: 'Additional Info',
      type: 'blockContent'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true
      }
    },
    {
      name: 'videoLink',
      title: 'Video URL',
      type: 'string'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'This can be used to display when the product was published.',
      type: 'datetime'
    },
    {
      name: 'relatedProducts',
      title: 'Related products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }]
    }
  ],
  preview: {
    select: {
      title: 'shortName',
      publishedAt: 'publishedAt',
      image: 'mainImage'
    },
    prepare ({ title = 'No title', publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : 'Missing publishing date',
        media: image
      }
    }
  }
}