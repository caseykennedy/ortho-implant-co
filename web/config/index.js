// import * as useSiteSettings from '../src/hooks/useSiteSettings'
// const settings = useSiteSettings

const settings = require.resolve('../src/hooks/useSiteSettings.tsx')

module.exports = {

  // pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  // siteTitle: 'Orthopaedic Implant Company | Value Based, Clinically Proven Implants for Doctors, Hospitals and Patients', // Navigation and Site Title
  // siteTitleAlt: 'Orthopaedic Implant Company | Value Based, Clinically Proven Implants', // Alternative Site title for SEO
  // siteTitleShort: 'Orthopaedic Implant Co. | Clinically Proven Implants', // short_name for manifest
  // siteHeadline: 'Value Based, Clinically Proven Implants for Doctors, Hospitals and Patients', // Headline for schema.org JSONLD
  // banner: settings.title,
  // siteUrl: 'http://orthoimplantcompany.com/', // Domain of your site. No trailing slash!
  // siteLanguage: 'en', // Language Tag on <html> element
  // siteLogo: '/logos/logo.png', // Used for SEO and manifest
  // siteDescription: 'OIC is the leading manufacturer of high value orthopaedic implants. OIC implants cost 50 to 60 percent less than the average market price.',
  // author: 'Casey Kennedy', // Author for schema.org JSONLD

  // // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '', // Twitter Username
  // ogSiteName: '', // Facebook Site Name
  // ogLanguage: 'en_US', // og:language
  // googleAnalyticsID: 'UA-34718102-1',

  // // Manifest and Progress color
  // themeColor: '#FFC907',
  // backgroundColor: '#000000',

  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  // Banner
  // banner: settings.banner.asset.fluid.src,
  banner: '',
  

  siteTitle: settings.title, // Navigation and Site Title
  siteTitleAlt: settings.titleAlt, // Alternative Site title for SEO
  siteTitleShort: settings.titleShort, // short_name for manifest
  siteHeadline: settings.headline, // Headline for schema.org JSONLD
  siteUrl: 'http://orthoimplantcompany.com', // Domain of your site. No trailing slash!
  siteLanguage: settings.language, // Language Tag on <html> element
  siteLogo: settings.logo, // Used for SEO and manifest
  siteDescription: settings.description,

  author: settings.author, // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: settings.userTwitter, // Twitter Username
  ogSiteName: settings.ogSiteName, // Facebook Site Name
  ogLanguage: settings.ogLanguage, // og:language
  googleAnalyticsID: settings.googleAnalyticsID,

  // Manifest and Progress color
  themeColor: settings.themeColor,
  backgroundColor: settings.backgroundColor
}
