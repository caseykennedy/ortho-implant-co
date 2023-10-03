import { MdLink } from "react-icons/md";

export default {
  name: "resource",
  title: "Resource",
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
      title: "Category",
      name: "category",
      type: "string",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "IFU", value: "ifu" },
          { title: "Surgical Techniques", value: "surgical-techniques" },
          { title: "Inventory Control", value: "inventory-control" },
          { title: "Setup Guide", value: "setup-guide" },
        ],
      },
    },
    {
      name: "document",
      title: "Document",
      type: "file",
    },
  ],
};
