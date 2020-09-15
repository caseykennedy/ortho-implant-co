import { MdLink } from "react-icons/md";

export default {
  name: "resource",
  title: "Resource",
  type: "document",
  icon: MdLink,
  liveEdit: false,
  fields: [
    {
      name: "document",
      title: "Document",
      type: "file",
    },
  ]
};
