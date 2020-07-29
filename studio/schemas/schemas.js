// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import blockText from './blockText'
import postCategory from './postCategory'
import productCategory from './productCategory'
import productResources from './productResources'
import figure from './figure'
import jobPost from './jobPost'
import mainImage from './mainImage'
import notion from './notion'
import pageTitle from './pageTitle'
import person from './person'
import post from './post'
import product from './product'
import rethinkTabs from './rethinkTabs'
import review from './review'
import siteSettings from './siteSettings'

import homeImplants from './home/implants'
import homeRethink from './home/rethink'
import homeHero from './home/hero'
import homeReviews from './home/reviews'
import homeMantra from './home/mantra'

import aboutPage from './aboutPage'

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
    blockContent,
    blockText,
    figure,
    jobPost,
    mainImage,
    notion,
    pageTitle,
    person,
    post,
    postCategory,
    product,
    productCategory,
    productResources,
    rethinkTabs,
    review,
    siteSettings,

    homeHero,
    homeImplants,
    homeRethink,
    homeReviews,
    homeMantra,

    aboutPage,

    rethinkPage,
    
    //////////////////////// REMOVE
    rethinkNotions

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
