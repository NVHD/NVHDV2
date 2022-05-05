export default {
  name: 'chronik',
  title: 'Chronik',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Chronik Text',
      type: 'blockContent'
    }
  ]
}
