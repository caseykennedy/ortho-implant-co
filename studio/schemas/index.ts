import aboutIntro from './aboutIntro'
import approach from './approach'
import billboard from './billboard'
import blockContent from './blockContent'
import blockText from './blockText'
import company from './company'
import homePage from './homePage'
import figure from './figure'
import jobPost from './jobPost'
import landingPage from './landingPage'
import legalStatements from './legalStatements'
import mainImage from './mainImage'
import notion from './notion'
import pageTitle from './pageTitle'
import postCategory from './postCategory'
import purpose from './purpose'
import productCategory from './productCategory'
import productsOrder from './productsOrder'
import productResources from './productResources'
import productResourceType from './productResourceType'
import person from './person'
import position from './position'
import post from './post'
import product from './product'
import resource from './resource'
import resourceType from './resourceType'
import rethinkTabs from './rethinkTabs'
import siteSettings from './siteSettings'
import termsConditions from './termsConditions'
import testimonial from './testimonial'
import videoURL from './videoURL'

import homeRethink from './home/rethink'
import homeReviews from './home/reviews'
import homeMantra from './home/mantra'

import aboutPage from './aboutPage'
import contactPage from './contactPage'
import newsPage from './newsPage'

import rethinkPage from './rethinkPage'
import rethinkNotions from './rethink/rethink'

export const schemaTypes = [
  aboutIntro,
  approach,
  blockContent,
  blockText,
  billboard,
  company,
  figure,
  jobPost,
  landingPage,
  legalStatements,
  mainImage,
  notion,
  pageTitle,
  person,
  position,
  post,
  postCategory,
  purpose,
  product,
  productCategory,
  productsOrder,
  productResources,
  productResourceType,
  resource,
  resourceType,
  rethinkTabs,
  siteSettings,
  termsConditions,
  testimonial,
  videoURL,

  // // Need to move these into the homePage schema type
  homeRethink,
  homeReviews,
  homeMantra,

  homePage,
  aboutPage,
  contactPage,
  newsPage,
  rethinkPage,

  // // Need to move these into the rethinkPage schema type
  rethinkNotions,
]
