import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {dashboardTool} from '@sanity/dashboard'
import {visionTool} from '@sanity/vision'
import {
  MdAssignment,
  MdStop,
  MdSettings,
  MdLibraryBooks,
  MdList,
  MdFolder,
  MdViewQuilt,
} from 'react-icons/md'
import {GoFile} from 'react-icons/go'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
import {schemaTypes} from './schemas'

// Define the actions that should be available for singleton documents
// const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
// const singletonTypes = new Set(['person', 'postCategory', 'post', 'event', 'experience'])

export default defineConfig({
  name: 'default',
  title: 'oic',

  projectId: 'i0abzsfe',
  dataset: 'production',

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    // templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  plugins: [
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Website Deployments',
          sites: [
            {
              title: 'OrthoImplantCompany.com',
              apiId: 'd3cf9eda-d5b1-4eb2-a6dd-6750ca89e81c',
              buildHookId: '5f91dd8a5121d30fdbc20e6f',
              name: 'oic',
              url: 'https://orthoimplantcompany.com',
            },
          ],
        }),
      ],
    }),
    deskTool({
      structure: (S) =>
        S.list()
          .title('OIC Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(
                S.editor().id('siteSettings').schemaType('siteSettings').documentId('siteSettings')
              )
              .icon(MdSettings),

            S.listItem()
              .title('Blog')
              .schemaType('post')
              .child(S.documentTypeList('post').title('Post'))
              .icon(GoFile),

            S.listItem()
              .title('Blog Categories')
              .schemaType('postCategory')
              .child(S.documentTypeList('postCategory').title('Post Category'))
              .icon(MdStop),

            S.listItem()
              .title('Resources')
              .child(
                S.documentTypeList('resourceType').title('Resource Type').schemaType('resourceType')
              )
              .icon(MdFolder),

            S.listItem()
              .title('Products')
              .schemaType('product')
              .child(S.documentTypeList('product').title('Product'))
              .icon(MdFolder),

            S.listItem()
              .title('Products Order')
              .child(
                S.editor()
                  .title('Products Order')
                  .id('productsOrder')
                  .schemaType('productsOrder')
                  .documentId('productsOrder')
              )
              .icon(MdList),

            S.listItem()
              .title('Product Categories')
              .schemaType('productCategory')
              .child(S.documentTypeList('productCategory').title('Category'))
              .icon(MdStop),

            S.listItem()
              .title('Job Posts')
              .schemaType('jobPost')
              .child(S.documentTypeList('jobPost').title('Job'))
              .icon(MdAssignment),

            S.listItem()
              .title('People')
              .schemaType('person')
              .child(S.documentTypeList('person').title('People')),

            S.listItem()
              .title('Landing Pages')
              .schemaType('landingPage')
              .child(S.documentTypeList('landingPage').title('Landers'))
              .icon(MdViewQuilt),

            S.listItem()
              .title('Home Page')
              .child(S.editor().id('homePage').schemaType('homePage').documentId('homePage'))
              .icon(MdViewQuilt),

            S.listItem()
              .title('About Page')
              .child(S.editor().id('aboutPage').schemaType('aboutPage').documentId('aboutPage'))
              .icon(MdViewQuilt),

            S.listItem()
              .title('Contact Page')
              .child(
                S.editor().id('contactPage').schemaType('contactPage').documentId('contactPage')
              )
              .icon(MdViewQuilt),

            S.listItem()
              .title('News Page')
              .child(S.editor().id('newsPage').schemaType('newsPage').documentId('newsPage'))
              .icon(MdViewQuilt),

            S.listItem()
              .title('Rethink Page')
              .child(
                S.editor().id('rethinkPage').schemaType('rethinkPage').documentId('rethinkPage')
              )
              .icon(MdViewQuilt),

            S.listItem()
              .title('Legal Statements')
              .child(
                S.editor()
                  .id('legalStatements')
                  .schemaType('legalStatements')
                  .documentId('legalStatements')
              )
              .icon(MdLibraryBooks),

            S.listItem()
              .title('Terms & Conditions')
              .child(
                S.editor()
                  .id('termsConditions')
                  .schemaType('termsConditions')
                  .documentId('termsConditions')
              )
              .icon(MdLibraryBooks),

            // S.listItem()
            //   .title('Resources')
            //   .child(S.documentTypeList('resource').title('Resources').schemaType('resource'))
            //   .icon(MdFolder),
          ]),
    }),
    visionTool(),
  ],

  // document: {
  //   // For singleton types, filter out actions that are not explicitly included
  //   // in the `singletonActions` list defined above
  //   actions: (input, context) =>
  //     singletonTypes.has(context.schemaType)
  //       ? input.filter(({action}) => action && singletonActions.has(action))
  //       : input,
  // },
})
