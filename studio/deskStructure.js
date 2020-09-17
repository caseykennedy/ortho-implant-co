import S from "@sanity/desk-tool/structure-builder";
import {
  MdAssignment,
  MdStop,
  MdSettings,
  MdLibraryBooks,
  MdFolder,
  MdViewQuilt
} from "react-icons/md";
import { GoFile } from "react-icons/go";

const hiddenTypes = [
  "category",
  "companyInfo",
  "page",
  "person",
  "post",
  "project",
  "siteSettings"
];

export default () =>
  S.list()
    .title("OIC Content")
    .items([
      // Settings
      // _________________________________________________________________
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),

      // Home page
      // _________________________________________________________________

      S.listItem()
        .title("Home Page")
        .child(
          S.editor()
            .id("homePage")
            .schemaType("homePage")
            .documentId("homePage")
        )
        .icon(MdViewQuilt),

      // About page
      // _________________________________________________________________

      S.listItem()
        .title("About Page")
        .child(
          S.editor()
            .id("aboutPage")
            .schemaType("aboutPage")
            .documentId("aboutPage")
        )
        .icon(MdViewQuilt),

      // Contact page
      // _________________________________________________________________

      S.listItem()
        .title("Contact Page")
        .child(
          S.editor()
            .id("contactPage")
            .schemaType("contactPage")
            .documentId("contactPage")
        )
        .icon(MdViewQuilt),

      // News page
      // _________________________________________________________________

      S.listItem()
        .title("News Page")
        .child(
          S.editor()
            .id("newsPage")
            .schemaType("newsPage")
            .documentId("newsPage")
        )
        .icon(MdViewQuilt),

      // Rethink page
      // _________________________________________________________________

      S.listItem()
        .title("Rethink Page")
        .child(
          S.editor()
            .id("rethinkPage")
            .schemaType("rethinkPage")
            .documentId("rethinkPage")
        )
        .icon(MdViewQuilt),

      // Legal statements
      // _________________________________________________________________

      S.listItem()
        .title("Legal Statements")
        .child(
          S.editor()
            .id("legalStatements")
            .schemaType("legalStatements")
            .documentId("legalStatements")
        )
        .icon(MdLibraryBooks),

      // Terms & Conditions
      // _________________________________________________________________

      S.listItem()
        .title("Terms & Conditions")
        .child(
          S.editor()
            .id("termsConditions")
            .schemaType("termsConditions")
            .documentId("termsConditions")
        )
        .icon(MdLibraryBooks),

      // People
      // _________________________________________________________________

      S.listItem()
        .title("People")
        .schemaType("person")
        .child(S.documentTypeList("person").title("People")),

      // Post
      // _________________________________________________________________

      S.listItem()
        .title("Posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Post"))

        .icon(GoFile),

      // JobPost
      // _________________________________________________________________

      S.listItem()
        .title("Job Post")
        .schemaType("jobPost")
        .child(S.documentTypeList("jobPost").title("Job"))

        .icon(MdAssignment),

      // Blog Category
      // _________________________________________________________________

      S.listItem()
        .title("Post Categories")
        .schemaType("postCategory")
        .child(S.documentTypeList("postCategory").title("Post Category"))

        .icon(MdStop),

      // Product Category
      // _________________________________________________________________

      S.listItem()
        .title("Product Categories")
        .schemaType("productCategory")
        .child(S.documentTypeList("productCategory").title("Category"))

        .icon(MdStop),

      // Product
      // _________________________________________________________________

      S.listItem()
        .title("Products")
        .schemaType("product")
        .child(S.documentTypeList("product").title("Product"))

        .icon(MdFolder)

      // End
      // _________________________________________________________________
    ]);
