export default {
  name: 'impressum',
  title: 'Impressum',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string'
    },
    {
      name: 'text',
      title: 'text',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}
