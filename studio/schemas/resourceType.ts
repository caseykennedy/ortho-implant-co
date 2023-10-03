import { MdLink } from "react-icons/md";

export default {
  name: "resourceType",
  title: "Resource Type",
  type: "document",
  icon: MdLink,
  liveEdit: false,
  fields: [
    {
      name: "title",
      title: "Resource Type",
      type: "string",
    },
    {
      name: "resourceDocs",
      title: "Documents",
      type: "array",
      of: [{ type: "reference", to: { type: "resource" }, weak: true }],
    },
  ],
};
