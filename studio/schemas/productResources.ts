import { MdApps } from "react-icons/md";

export default {
  name: "productResources",
  title: "Resources",
  type: "document",
  icon: MdApps,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "resource",
      title: "Resource",
      type: "file"
    }
  ],
  liveEdit: true
};
