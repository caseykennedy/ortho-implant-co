import { MdLink } from "react-icons/md";

export default {
  name: "productResourceType",
  title: "Product Resource Type",
  type: "document",
  icon: MdLink,
  liveEdit: false,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "resource",
      title: "Resource",
      type: "reference",
      to: { type: "resource" },
      options: {
        disableNew: true,
      },
    },
  ],
};
