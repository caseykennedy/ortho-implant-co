export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string"
    },
    {
      name: "telTollFree",
      title: "Tel: Toll Free",
      type: "string"
    },
    {
      name: "telDirect",
      title: "Tel: Direct",
      type: "string"
    },
    {
      name: "telFax",
      title: "Tel: Fax",
      type: "string"
    },
    {
      name: "addressMailing",
      title: "Address: Mailing",
      type: "string"
    },
    {
      name: "addressOffice",
      title: "Address: Office",
      type: "string"
    },
    {
      name: "emails",
      title: "Emails",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "location",
      title: "Map Location",
      type: "geopoint"
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'pageTitle'
    },
    {
      name: 'billboard',
      title: 'Billboard',
      type: 'billboard'
    },
  ]
}
