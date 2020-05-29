import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'

const hiddenTypes = ['category', 'companyInfo', 'page', 'person', 'post', 'project', 'siteSettings']

export default () =>
  S.list()
    .title('Cahuilla.net Content')

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

      // Announcement
      // _________________________________________________________________

      S.listItem()
        .title('Announcements')
        .schemaType('announcement')
        .child(S.documentTypeList('announcement').title('Announcement')),

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

      // Person
      // _________________________________________________________________

      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),

      // Job Post
      // _________________________________________________________________

      S.listItem()
        .title('Job Posts')
        .schemaType('jobPost')
        .child(S.documentTypeList('jobPost').title('Job')),

      // Job Post
      // _________________________________________________________________

      S.listItem()
        .title('Forms')
        .schemaType('form')
        .child(S.documentTypeList('form').title('Form')),

      // End
      // _________________________________________________________________
    ])
