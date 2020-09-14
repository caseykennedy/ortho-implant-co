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
      name: 'approach',
      title: 'Approach',
      type: 'approach'
    },
    {
      name: 'purpose',
      title: 'Purpose',
      type: 'purpose'
    },
    {
      name: 'rethinkNotions',
      title: 'Rethink Notions',
      type: 'array',
      of: [{type: 'notion'}]
    },
    {
      name: 'billboard',
      title: 'Billboard',
      type: 'billboard'
    },
  ]
}
