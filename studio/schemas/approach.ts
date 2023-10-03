import { MdPanorama } from "react-icons/md";

export default {
  name: "approach",
  title: "Approach",
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
      name: "figure",
      title: "Figure",
      type: "mainImage",
    }
  ]
};
