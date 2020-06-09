import S from "@sanity/desk-tool/structure-builder";
import { MdCropLandscape, MdSettings, MdViewDay, MdFolder } from "react-icons/md";
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
              // Page Title
              S.listItem()
                .title("Page Title")
                .child(
                  S.editor()
                    .id("pageTitle")
                    .schemaType("pageTitle")
                    .documentId("pageTitle")
                )
                .icon(MdCropLandscape),

              // Rethink
              S.listItem()
                .title("Rethink")
                .child(
                  S.editor()
                    .id("homeRethink")
                    .schemaType("homeRethink")
                    .documentId("homeRethink")
                )
                .icon(MdCropLandscape),

              // Implants
              S.listItem()
                .title("Implants")
                .child(
                  S.editor()
                    .id("homeImplants")
                    .schemaType("homeRethink")
                    .documentId("homeRethink")
                )
                .icon(MdCropLandscape)
            ])
        )
        .icon(MdFolder)

      // End
      // _________________________________________________________________
    ]);
