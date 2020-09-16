import { MdSettings } from "react-icons/md";

export default {
  name: "company",
  title: "Company Info",
  type: "document",
  icon: MdSettings,
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string"
    },
    {
      name: "telTollFree",
      title: "Tel: Toll Free",
      type: "string"
    },
    {
      name: "telDirect",
      title: "Tel: Direct",
      type: "string"
    },
    {
      name: "telFax",
      title: "Tel: Fax",
      type: "string"
    },
    {
      name: "mailingAddress",
      title: "Mailing Address",
      type: "string"
    },
    {
      name: "officeAddress",
      title: "Office Address",
      type: "string"
    },
    {
      name: "emails",
      title: "Emails",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "location",
      title: "Map Location",
      type: "geopoint"
    },
  ]
};
