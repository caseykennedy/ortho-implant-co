export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'pageTitle'
    },
    {
      name: 'rethink',
      title: 'Rethink section',
      type: 'homeRethink'
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'testimonial'}]
    },
    {
      name: 'testimonialsFigure',
      title: 'Testimonials background image',
      type: 'mainImage'
    },
    {
      name: 'billboard',
      title: 'Billboard',
      type: 'billboard'
    },
  ]
}
