import { MdContacts } from "react-icons/md";

export default {
  name: "pageTitle",
  title: "Page Title",
  type: "document",
  icon: MdContacts,
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "message",
      title: "Message",
      type: "string"
    },
    {
      name: "link",
      title: "Link",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};
