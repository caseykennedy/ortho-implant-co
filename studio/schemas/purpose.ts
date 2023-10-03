import { MdPanorama } from "react-icons/md";

export default {
  name: "purpose",
  title: "Purpose",
  type: "document",
  icon: MdPanorama,
  liveEdit: false,

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "heading",
      title: "Heading",
      type: "string"
    },
    {
      name: 'lead',
      title: 'Lead',
      type: 'blockContent'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'statement',
      title: 'Statement',
      type: 'string'
    },
    {
      name: "figure",
      title: "Figure",
      type: "mainImage",
    }
  ]
};
