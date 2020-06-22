export default {
  name: 'rethinkPage',
  title: 'Rethink Page',
  type: 'document',
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'pageTitle'
    },
    {
      name: 'rethinkNotions',
      title: 'Rethink Notions',
      type: 'array',
      of: [{type: 'notion'}]
    },
  ]
}
