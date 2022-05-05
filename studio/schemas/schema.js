// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import addresse from './documents/addresse'
import bild from './documents/bild'
import blockContent from './documents/blockContent'
import chronik from './documents/chronik'
import datenschutz from './documents/datenschutz'
import einstellungen from './documents/einstellungen'
import figure from './documents/figure'
import figuren from './documents/figuren'
import galerie from './documents/galerie'
import impressum from './documents/impressum'
import person from './documents/person'
import slideshow from './documents/slideshow'
import termin from './documents/termin'

// Object types

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    bild,
    galerie,
    figuren,
    person,
    chronik,
    addresse,
    datenschutz,
    impressum,
    einstellungen,
    blockContent,
    figure,
    slideshow,
    termin

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
