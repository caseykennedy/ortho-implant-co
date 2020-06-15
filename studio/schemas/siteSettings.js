import { MdSettings } from "react-icons/md";

export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
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
      name: "themeColor",
      title: "Theme Color",
      type: "string",
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
    },
  ],
};
