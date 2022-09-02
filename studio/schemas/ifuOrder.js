import { MdApps } from "react-icons/md";

export default {
  name: "ifuOrder",
  title: "IFU Order",
  type: "document",
  icon: MdApps,
  fields: [
    {
      name: "documents",
      title: "Documents",
      type: "array",
      of: [{ type: "reference", to: { type: "ifuDoc" } }]
    }
  ]
};
