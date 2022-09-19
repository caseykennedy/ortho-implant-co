import { MdList } from "react-icons/md";

export default {
  name: "productsOrder",
  title: "Products Order",
  type: "document",
  icon: MdList,
  fields: [
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [{ type: "reference", to: { type: "product" } }]
    }
  ]
};
