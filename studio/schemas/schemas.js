// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import aboutIntro from './aboutIntro'
import approach from './approach'
import billboard from './billboard'
import blockContent from './blockContent'
import blockText from './blockText'
import company from './company'
import homePage from './homePage'
import figure from './figure'
import jobPost from './jobPost'
import legalStatements from './legalStatements'
import mainImage from './mainImage'
import notion from './notion'
import pageTitle from './pageTitle'
import postCategory from './postCategory'
import purpose from './purpose'
import productCategory from './productCategory'
import productResources from './productResources'
import person from './person'
import position from './position'
import post from './post'
import product from './product'
import resource from './resource'
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

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    aboutIntro,
    approach,
    blockContent,
    blockText,
    billboard,
    company,
    figure,
    jobPost,
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
    productResources,
    resource,
    rethinkTabs,
    siteSettings,
    termsConditions,
    testimonial,
    videoURL,

    // Need to move these into the homePage schema type
    homeRethink,
    homeReviews,
    homeMantra,

    homePage,
    aboutPage,
    contactPage,
    newsPage,
    rethinkPage,
    
    // Need to move these into the rethinkPage schema type
    rethinkNotions

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
