import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'

const hiddenTypes = ['category', 'companyInfo', 'page', 'person', 'post', 'project', 'siteSettings']

export default () =>
  S.list()
    .title('OIC Content')

    // Site Settings
    // _________________________________________________________________

    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),

      // About Page
      // _________________________________________________________________

      S.listItem()
        .title('About Page')
        .schemaType('aboutSection')
        .child(S.documentTypeList('aboutSection').title('About Section')),

      // Homepage
      // _________________________________________________________________

      S.listItem()
        .title('Home Page')
        .child(
          S.editor()
            .id('homePage')
            .schemaType('homePage')
            .documentId('homePage')
        )
        .icon(FaFile),

      // Departments
      // _________________________________________________________________

      S.listItem()
        .title('Departments')
        .schemaType('department')
        .child(S.documentTypeList('department').title('Department')),

      // End
      // _________________________________________________________________
    ])
