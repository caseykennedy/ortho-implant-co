import { MdPanorama } from "react-icons/md";

export default {
  name: "ifuDoc",
  title: "IFU Document",
  type: "document",
  icon: MdPanorama,
  liveEdit: false,

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "document",
      title: "Document",
      type: "file",
    },
  ],
};
