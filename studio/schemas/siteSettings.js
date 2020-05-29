import { MdSettings } from "react-icons/md";

export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // You probably want to uncomment the next line once you've made a siteSettings document in the Studio. This will remove the settings document type from the create-menus.
  __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  icon: MdSettings,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "titleAlt",
      title: "Title Alternate",
      type: "string",
    },
    {
      name: "titleShort",
      title: "Title Short",
      type: "string",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
    {
      name: "language",
      title: "Language",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "userTwitter",
      title: "Twitter Username",
      type: "string",
    },
    {
      name: "ogSiteName",
      title: "Facebook Site Name",
      type: "string",
    },
    {
      name: "ogLanguage",
      title: "og:language",
      type: "string",
    },
    {
      name: "googleAnalyticsID",
      title: "Google Analytics Code",
      type: "string",
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
