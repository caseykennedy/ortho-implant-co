import { MdPanorama } from "react-icons/md";

export default {
  name: "billboard",
  title: "Billboard",
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
      name: "message",
      title: "Message",
      type: "string"
    },
    {
      name: "linkTitle",
      title: "Link Title",
      type: "string"
    },
    {
      name: "linkTo",
      title: "Link To",
      type: "string"
    },
    {
      name: "figure",
      title: "Background Image",
      type: "mainImage",
    }
  ]
};
