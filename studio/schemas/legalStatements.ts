export default {
  name: 'legalStatements',
  title: 'Legal Statements',
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
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'billboard',
      title: 'Billboard',
      type: 'billboard'
    },
  ]
}
