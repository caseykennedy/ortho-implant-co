import { MdPanorama } from "react-icons/md";

export default {
  name: "aboutIntro",
  title: "Intro",
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
      name: "body",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "positioning",
      title: "Positioning",
      type: "array",
      of: [{ type: "position" }]
    }
  ]
};
