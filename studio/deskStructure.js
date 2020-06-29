import S from "@sanity/desk-tool/structure-builder";
import { MdAssignment, MdStop, MdSettings, MdViewDay, MdFolder } from "react-icons/md";
import { FaFile } from "react-icons/fa";

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
          S.list()
            .title("Sections")
            .items([
              // Hero
              S.listItem()
                .title("Hero")
                .child(
                  S.editor()
                    .id("homeHero")
                    .schemaType("homeHero")
                    .documentId("homeHero")
                )
                .icon(MdViewDay),

              // Rethink
              S.listItem()
                .title("Rethink")
                .child(
                  S.editor()
                    .id("homeRethink")
                    .schemaType("homeRethink")
                    .documentId("homeRethink")
                )
                .icon(MdViewDay),

              // Implants
              S.listItem()
                .title("Implants")
                .child(
                  S.editor()
                    .id("homeImplants")
                    .schemaType("homeImplants")
                    .documentId("homeImplants")
                )
                .icon(MdViewDay),

              // Reviews
              S.listItem()
                .title("Reviews")
                .child(
                  S.editor()
                    .id("homeReviews")
                    .schemaType("homeReviews")
                    .documentId("homeReviews")
                )
                .icon(MdViewDay),

              // Mantra
              S.listItem()
                .title("Mantra")
                .child(
                  S.editor()
                    .id("homeMantra")
                    .schemaType("homeMantra")
                    .documentId("homeMantra")
                )
                .icon(MdViewDay)
            ])
        )
        .icon(MdFolder),

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
        .icon(MdFolder),

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
        .icon(MdFolder),

      // Person
      // _________________________________________________________________

      S.listItem()
        .title("People")
        .schemaType("person")
        .child(S.documentTypeList("person").title("People")),

      // JobPost
      // _________________________________________________________________

      S.listItem()
        .title("Job Post")
        .schemaType("jobPost")
        .child(S.documentTypeList("jobPost").title("Job"))

        .icon(MdAssignment),

      // Product Category
      // _________________________________________________________________

      S.listItem()
        .title("Product Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Category"))

        .icon(MdStop),

      // Product
      // _________________________________________________________________

      S.listItem()
        .title("Products")
        .schemaType("product")
        .child(S.documentTypeList("product").title("Product"))

        .icon(MdStop)

      // End
      // _________________________________________________________________
    ]);
