export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortName",
      title: "Short Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Set the page URL",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "productCategory" } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "blockText",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "features",
      title: "Features",
      type: "blockContent",
    },
    {
      name: "resources",
      title: "Resources OLD",
      type: "array",
      of: [{ type: "productResources" }],
    },
    {
      name: "resourceDocs",
      title: "Resources",
      type: "array",
      of: [{ type: "productResourceType" }],
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "videos",
      title: "Videos",
      type: "array",
      of: [{ type: "videoURL" }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      description:
        "This can be used to display when the product was published.",
      type: "datetime",
    },
    {
      name: "relatedProducts",
      title: "Related products",
      type: "array",
      of: [{ type: "reference", to: { type: "product" } }],
    },
  ],
  preview: {
    select: {
      title: "shortName",
      image: "mainImage",
    },
    prepare({ title = "No title", image }) {
      return {
        title,
        media: image,
      };
    },
  },
};
